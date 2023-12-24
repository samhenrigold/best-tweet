<script lang="ts">
	import { onMount } from "svelte";
	import Tweet from "./lib/Tweet.svelte";
	import type { Matchup, VoteRequestBody } from "./lib/EndpointTypes";

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
	}

	onMount(() => {
		fetchMatchup();
	});
</script>

<header>
	<h1>The Best Tweet</h1>
</header>
<main>
	{#if currentMatchup}
		<form on:submit={handleVote} on:change={handleVote}>
			<div>
				<label>
					<Tweet tweet={currentMatchup.tweet_1} selected={selectedTweetId === currentMatchup.tweet_1.tweet_id_str} />
					<input
						type="radio"
						bind:group={selectedTweetId}
						value={currentMatchup.tweet_1.tweet_id_str}
					/>
				</label>
				<span class="vs" aria-label="versus">VS</span>
				<label>
					<Tweet tweet={currentMatchup.tweet_2} selected={selectedTweetId === currentMatchup.tweet_2.tweet_id_str} />
					<input
						type="radio"
						bind:group={selectedTweetId}
						value={currentMatchup.tweet_2.tweet_id_str}
					/>
				</label>
			</div>
		</form>
	{/if}
</main>

<style lang="postcss">

	header {
		@apply text-6xl lg:text-9xl font-black text-gray-500 italic text-center uppercase;
	
	}

	form div {
		@apply flex flex-col justify-center items-center gap-4 lg:flex-row;
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