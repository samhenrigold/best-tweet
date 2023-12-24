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
		display: flex;
		align-items: center;
	}

	.tweet__user-info {
		display: inline-block;
		margin-inline-start: 1rem;
	}
</style>
