<script lang="ts">
	import { onMount } from "svelte";
	import Tweet from "./lib/Tweet.svelte";
	import type { Matchup, VoteRequestBody } from "./lib/EndpointTypes";

	let currentMatchup: Matchup;
	let selectedTweetId: string;

	async function fetchMatchup() {
		
		let getMatchupsEndpoint = "https://api.thebesttweet.com/get-matchups";
		
		// check if the current page address is localhost. if so, append debug=1 to the query string
		if (window.location.hostname === "localhost") {
			getMatchupsEndpoint += "?debug=1";
		}
		
		const response = await fetch(getMatchupsEndpoint);
		const matchups = await response.json();
		// Check if the response is wrapped in an array. If so, unwrap it.
		if (Array.isArray(matchups)) {
			currentMatchup = matchups[0];
		}
		currentMatchup = matchups;
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

<main>
	{#if currentMatchup}
		<form on:submit={handleVote}>
			<div>
				<label>
					<Tweet tweet={currentMatchup.tweet_1} />
					<input
						type="radio"
						bind:group={selectedTweetId}
						value={currentMatchup.tweet_1.tweet_id_str}
					/>
				</label>
				<label>
					<Tweet tweet={currentMatchup.tweet_2} />
					<input
						type="radio"
						bind:group={selectedTweetId}
						value={currentMatchup.tweet_2.tweet_id_str}
					/>
				</label>
			</div>
			<button type="submit" disabled={!selectedTweetId}>Vote</button>
		</form>
	{/if}
</main>

<style lang="postcss">
	main, form {
		@apply h-full;
	}
	form div {
		@apply flex items-center justify-evenly h-auto md:h-full md:flex-row flex-col;
	}

	button {
		@apply px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm;
	}

	button:disabled {
		@apply bg-gray-300;
	}
</style>