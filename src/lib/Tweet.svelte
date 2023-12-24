<script lang="ts">
	import TweetHeader from "./TweetComponents/TweetHeader.svelte";
	import TweetContent from "./TweetComponents/TweetContent.svelte";
	import TweetFooter from "./TweetComponents/TweetFooter.svelte";

	import type { TweetData } from "./TweetData";

	// The tweet data is passed as a prop to this component
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
		@apply max-w-md border border-gray-200 cursor-pointer rounded-lg bg-gray-50 py-4 relative; 
	}

	/* 
		<label>
			<blockquote class="tweet">...</blockquote>
			<input type="radio" />
		</label>

		if the input is checked, then the tweet should have a blue border
	*/

	.tweet[data-selected="true"] {
		@apply border-blue-500 bg-blue-100;
	}

	.tweet[data-selected="true"]::after {
		@apply text-blue-500;
		content: "check_circle";
		font-family: 'Material Symbols Outlined';
		font-size: 12em;

		font-variation-settings:
		'FILL' 1,
		'wght' 400,
		'GRAD' 0,
		'opsz' 24;
		
		position: absolute;
		/* center the checkmark */
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, 50%);
	}
</style>
