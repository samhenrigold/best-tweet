<script lang="ts">
	import type { TweetData } from "./TweetData";

	// The tweet data is passed as a prop to this component
	export let tweet: TweetData;

	// Optional: Function to format the date in a more readable format
	function formatDate(dateString: string): string {
		const options: Intl.DateTimeFormatOptions = {
			hour: "numeric",
			minute: "numeric",
			month: "short",
			day: "numeric",
			year: "numeric",
		};
		return new Date(dateString).toLocaleString(undefined, options);
	}
</script>

<div class="tweet">
	<img
		class="profile-image"
		src={tweet.users.profile_image_url_https}
		alt={tweet.users.name}
	/>
	<div class="tweet-content">
		<div class="tweet-header">
			{tweet.users.name} (@{tweet.users.screen_name})
		</div>
		<div class="tweet-text">{tweet.full_text}</div>
		<div class="tweet-info">
			{formatDate(tweet.created_at)} · Retweets: {tweet.retweet_count} · Likes:
			{tweet.favorite_count}
		</div>
	</div>
</div>

<style>
	.tweet {
		border: 1px solid #ccc;
		padding: 10px;
		margin: 10px 0;
		border-radius: 8px;
		display: flex;
		align-items: flex-start;
	}

	.profile-image {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.tweet-content {
		flex-grow: 1;
	}

	.tweet-header {
		font-weight: bold;
	}

	.tweet-text {
		margin: 5px 0;
	}

	.tweet-info {
		color: #555;
		font-size: 0.8em;
	}
</style>
