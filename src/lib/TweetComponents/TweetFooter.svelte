<script lang="ts">
    import type { TweetData } from "../TweetData";
    import { formatTweetDate, fuzzyNumber } from "../TweetCardUtils";
    import Icon from "../Icon.svelte";

    // The tweet data is passed as a prop to this component
    export let tweet: TweetData;
</script>

<footer class="tweet__footer">
        <div class="tweet__engagement">
            <span class="tweet__retweets">
                <Icon name="repeat" />
                {fuzzyNumber(tweet.retweet_count)}
            </span>
            <span class="tweet__likes">
                <Icon name="favorite" />
                {fuzzyNumber(tweet.favorite_count)}
            </span>
        </div>
        <p class="tweet__date">
            {formatTweetDate(tweet.created_at)}
        </p>
    </footer>

<style lang="postcss">
	.tweet__footer {
		@apply text-sm text-gray-500 px-4;
	}

    .tweet__engagement {
        @apply inline-flex items-center gap-3;
    }

    .tweet__date {
        @apply inline-block;
    }
</style>

