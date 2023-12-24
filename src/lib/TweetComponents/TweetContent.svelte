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
		@apply my-3;
	}

	.tweet__text {
		@apply text-lg mb-1.5;
	}

	.tweet__media .tweet__media-image {
		@apply rounded-md border border-gray-200 max-h-[500px] object-cover;
	}
</style>

