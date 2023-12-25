<script lang="ts">
	import TweetHeader from "./TweetComponents/TweetHeader.svelte";
	import TweetContent from "./TweetComponents/TweetContent.svelte";
	import TweetFooter from "./TweetComponents/TweetFooter.svelte";

	import type { TweetData } from "./TweetData";

	export let tweet: TweetData;
	export let selected: Boolean;
</script>

<blockquote class="tweet" data-selected={selected}>
	<TweetHeader  {tweet} />
	<TweetContent {tweet} />
	<TweetFooter  {tweet} />
</blockquote>

<style lang="postcss">
	.tweet {
		@apply w-96 lg:max-w-md border border-gray-200 cursor-pointer rounded-lg bg-gray-50 py-4 relative;
	}

	.tweet::after {
		@apply text-blue-500;
		content: "check_circle";
		font-family: 'Material Symbols Outlined';
		font-size: 12em;
		font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
		position: absolute;
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, 50%) scale(0);
		opacity: 0;
		transition: opacity 0.3s, transform 0.3s;
	}

	.tweet[data-selected="true"] {
		@apply border-blue-500 bg-blue-100;
	}

	.tweet[data-selected="true"]::after {
		opacity: 1;
		transform: translate(-50%, 50%) scale(1);
	}
</style>