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
		@apply max-w-md border border-gray-300 cursor-pointer shadow-sm bg-slate-50 p-4 rounded-md;
	}
</style>
