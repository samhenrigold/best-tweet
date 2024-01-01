<script lang="ts">
	import { onMount } from "svelte";
	import Tweet from "./lib/Tweet.svelte";
	import type { Matchup, VoteRequestBody } from "./lib/EndpointTypes";
	import Countdown from "./lib/Countdown.svelte";
	import { countdownStore } from './lib/countdownStore';
	import VotingOver from "./lib/VotingOver.svelte";

	// Get the diff in countdownStore
	const { diff } = $countdownStore;

	let currentMatchup: Matchup;
	let selectedTweetId: string;

	async function fetchMatchup() {
		
		let getMatchupsEndpoint = "https://api.thebesttweet.com/get-matchups";
		
		const response = await fetch(getMatchupsEndpoint);
		const matchups = await response.json();

		currentMatchup = matchups[0];
		selectedTweetId = ""; // Reset selected tweet
	}

	async function handleVote(event: Event) {
		event.preventDefault(); // Prevent the default form submission behavior

		const vote: VoteRequestBody = {
			matchup_id: currentMatchup.matchup_id,
			selected_tweet_id: selectedTweetId,
		};

		await fetch("https://api.thebesttweet.com/cast-ballot", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(vote),
		});

		fetchMatchup();

		// scroll to very top of the page
		window.scrollTo(0, 0);
	}

	onMount(() => {
		fetchMatchup();
	});
</script>

<div class="flex flex-col min-h-screen">
	<VotingOver />
</div>

<style lang="postcss">
	div header {
		@apply text-blue-500 mb-8 md:text-lg text-center;
		text-wrap: balance;
	
	}
	
	h1 {
		@apply text-4xl md:text-6xl lg:text-9xl font-black italic uppercase;
	
	}

	header p {
		@apply max-w-[50ch] mx-auto text-gray-500;
	}

	form {
		@apply flex flex-col;
	}

	form button {
		@apply self-center px-5 font-bold text-yellow-950 bg-yellow-500 rounded-xl shadow-sm flex items-end;
	}

	footer {
		@apply text-sm text-gray-500 mt-auto p-8;
	}

	form div {
		@apply flex flex-col justify-center items-center gap-4 lg:gap-10 lg:flex-row pb-16 h-full;
	}

	.vs {
		@apply text-4xl font-bold text-gray-500 italic tracking-wide;
		/* small caps */
		font-variant: all-small-caps;
	}

	input[type="radio"] {
		@apply sr-only;
	}

	button {
		@apply px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm;
	}

	button:disabled {
		@apply bg-gray-300;
	}
</style>