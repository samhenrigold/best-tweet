<script lang="ts">
	import { cleanFullText } from "../TweetCardUtils";
    import type { TweetData } from "../TweetData";
    export let tweet: TweetData;
</script>

<main class="tweet__content">
    <p class="tweet__text">{cleanFullText(tweet.full_text)}</p>
    {#if tweet.tweet_media.length > 0}
        <div class="tweet__media">
            {#each tweet.tweet_media as media}
                <img
                    class="tweet__media-image"
                    src={media.media_url_https}
                    alt={media.alt_text ?? ""}
                    width="100%"
                />
            {/each}
        </div>
    {/if}
</main>

<style lang="postcss">
	.tweet__content {
		@apply my-4;
	}

	.tweet__text {
		@apply text-lg mb-2;
	}

	.tweet__media .tweet__media-image {
		display: block;
	}

	.tweet__footer {
		@apply text-sm text-gray-500;
	}
</style>

