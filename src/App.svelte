<script lang="ts">
  import { onMount } from 'svelte';
  import Tweet from './lib/Tweet.svelte';
  import type { Matchup, VoteRequestBody } from './lib/EndpointTypes';

  let currentMatchup: Matchup;
  let selectedTweetId: string;

  async function fetchMatchup() {
      const response = await fetch("https://best-tweet-backend-vifkf.ondigitalocean.app/get-matchups");
      const matchups = await response.json();
      currentMatchup = matchups[0];
      selectedTweetId = ''; // Reset selected tweet
  }

  async function handleVote(event: Event) {
      event.preventDefault(); // Prevent the default form submission behavior

      const vote: VoteRequestBody = {
          matchup_id: currentMatchup.matchup_id,
          selected_tweet_id: selectedTweetId
      };

      await fetch("https://best-tweet-backend-vifkf.ondigitalocean.app/cast-ballot", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(vote)
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
              <Tweet tweet={currentMatchup.tweet_1} />
              <label>
                  <input type="radio" bind:group={selectedTweetId} value={currentMatchup.tweet_1.tweet_id_str} />
              </label>
          </div>
          <div>
              <Tweet tweet={currentMatchup.tweet_2} />
              <label>
                  <input type="radio" bind:group={selectedTweetId} value={currentMatchup.tweet_2.tweet_id_str} />
              </label>
          </div>
          <button type="submit" disabled={!selectedTweetId}>Vote</button>
      </form>
  {/if}
</main>
