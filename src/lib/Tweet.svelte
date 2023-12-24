<script lang="ts">
	import TweetHeader from "./TweetComponents/TweetHeader.svelte";
	import TweetContent from "./TweetComponents/TweetContent.svelte";
	import TweetFooter from "./TweetComponents/TweetFooter.svelte";

	import type { TweetData } from "./TweetData";

	// The tweet data is passed as a prop to this component
	export let tweet: TweetData;
</script>

<blockquote class="tweet">
	<TweetHeader {tweet} />

	<TweetContent {tweet} />

	<TweetFooter {tweet} />
</blockquote>

<style lang="postcss">
	.tweet {
		@apply max-w-md border border-gray-200 cursor-pointer p-4 rounded-lg;
	}
</style>
