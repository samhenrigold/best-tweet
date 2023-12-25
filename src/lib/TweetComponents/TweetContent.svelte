<script lang="ts">
	import { turnUrlsIntoHTMLLinks } from "../TweetCardUtils";
	import type { TweetData } from "../TweetData";
	export let tweet: TweetData;

	let mediaIsVideo = (media: TweetData["tweet_media"][0]) => {
		return media.type === "video" || media.type === "animated_gif";
	};

</script>

<main class="tweet__content">
	<p class="tweet__text">{@html turnUrlsIntoHTMLLinks(tweet.full_text)}</p>
	{#if tweet.tweet_media.length > 0}
		<div class="tweet__media">
			{#each tweet.tweet_media as media}
				{#if mediaIsVideo(media)}
					<!-- svelte-ignore a11y-media-has-caption -->
					<video
						class="tweet__media-image"
						src={media.media_url_https}
						controls
						width="100%"
					></video>
				{:else}
				<a href={media.media_url_https} target="_blank">
					<img
						class="tweet__media-image"
						src={media.media_url_https}
						alt={media.alt_text ?? ""}
						width="100%"
					/>
				</a>
				{/if}
			{/each}
		</div>
	{/if}
</main>

<style lang="postcss">
	.tweet__content {
		@apply my-3;
	}

	.tweet__text {
		@apply text-base lg:text-lg mb-1.5 px-4 whitespace-pre-line;
	}

	.tweet__media {
		@apply flex overflow-x-scroll gap-2 px-4;
		scroll-snap-type: x mandatory;
	}

	.tweet__media .tweet__media-image {
		@apply max-h-[430px] object-cover border border-black border-opacity-15 rounded-md;
	}
</style>
