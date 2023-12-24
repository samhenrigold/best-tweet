<script lang="ts">
	import type { TweetData } from "../TweetData";
	import ResponsiveAvatar from "../ResponsiveAvatar.svelte";

	// The tweet data is passed as a prop to this component
	export let tweet: TweetData;
</script>

<header class="tweet__header">
	<ResponsiveAvatar
		src={tweet.users.profile_image_url_https}
		name={tweet.users.name}
	/>
	<p class="tweet__user-info">
		<strong class="tweet__user-name">{tweet.users.name}</strong>
		<br />
		<span class="tweet__user-handle">@{tweet.users.screen_name}</span>
	</p>
</header>

<style lang="postcss">
	.tweet__header {
		@apply flex items-center text-sm gap-3 px-4;
	}

	.tweet__user-info {
		@apply flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis;
	}

	.tweet__user-handle {
		@apply text-gray-600;
	}
</style>
