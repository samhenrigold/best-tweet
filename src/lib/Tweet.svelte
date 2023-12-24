<script lang="ts">
    import ResponsiveAvatar from "./ResponsiveAvatar.svelte";
    import type { TweetData } from "./TweetData";
    import { cleanFullText, formatTweetDate } from "./TweetCardUtils";
    import Icon from "./Icon.svelte";

    // The tweet data is passed as a prop to this component
    export let tweet: TweetData;
</script>

<blockquote class="tweet">
    <header class="tweet__header">
        <ResponsiveAvatar
            src={tweet.users.profile_image_url_https}
            name={tweet.users.name}
        />
        <p class="tweet__user-info">
            <strong class="tweet__user-name">{tweet.users.name}</strong>
            <br>
            <span class="tweet__user-handle">@{tweet.users.screen_name}</span>
        </p>
    </header>

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

    <footer class="tweet__footer">
        <div class="tweet__engagement">
            <span class="tweet__retweets">
                <Icon name="repeat" />
                {tweet.retweet_count}
            </span>
            <span class="tweet__likes">
                <Icon name="favorite" />
                {tweet.favorite_count}
            </span>
        </div>
        <p class="tweet__date">
            {formatTweetDate(tweet.created_at)}
        </p>
    </footer>
</blockquote>

<style>
    .tweet {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px 0;
        border-radius: 8px;
        max-width: 45ch;
    }

    .tweet__header {
        display: flex;
        align-items: center;
    }

    .tweet__user-info {
        display: inline-block;
        margin-inline-start: 1rem;
    }

    .tweet__media .tweet__media-image {
        display: block;
    }
</style>