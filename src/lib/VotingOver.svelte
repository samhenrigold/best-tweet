<script lang="ts">
	import Tweet from "./Tweet.svelte";
    import type { TweetData, User } from "./TweetData";

    const winningUser: User = {
        name: "soul nate",
        user_id: 218166083,
        screen_name: "MNateShyamalan",
        legacy_verified: false,
        profile_image_url_https: "https://pbs.twimg.com/profile_images/1649213569999818752/7xsxQv4__400x400.jpg",
    };

    const placeholderTweet: TweetData = {
        lang: "en",
        users: winningUser,
        user_id: 218166083,
        tweet_id: 1409857730656022529,
        full_text: "in the 90’s, computers would scream every time you went online. that was foreshadowing",
        created_at: "2021-06-29 12:54:11+00",
        tweet_media: [],
        tweet_id_str: "1409857730656022529",
        retweet_count: 34718,
        favorite_count: 187783,
        in_reply_to_status_id: null,
    };

</script>

<div class="flex flex-col items-center p-8 gap-12">
    <header>
        <h2>The search for <strong>The Best Tweet</strong> has ended.</h2>
        <p>Congratulations to <a href="https://twitter.com/MNateShyamalan" target="_blank" rel="noopener">{winningUser.name}</a> for their very good words.</p>
        <p>Stay tuned for the raw dataset and source code.</p>
    </header>
    
    <main>
        <article>
            <Tweet tweet={placeholderTweet} selected={false}/>
            <figure class="badge" data-ranking="1" aria-label="First Place Winner">
                <h3>#1</h3>
                <small>55 votes</small>
            </figure>
        </article>
    </main>
</div>


<style lang="postcss">
    header > * {
        @apply mb-2 text-center;
    }

    h2 {
        @apply text-4xl font-medium text-gray-800;
    }

    h2 strong {
        @apply font-extrabold text-blue-500;
    }

    p {
        @apply mx-auto text-gray-500;
    }

    p a {
        @apply text-blue-500 underline;
    }

    article {
        @apply relative; 
    }

    .badge {
        @apply font-bold text-2xl rounded-full w-20 h-20 flex flex-col items-center justify-center absolute -bottom-1/3 left-[43%];
    }
    .badge[data-ranking="1"] {
        @apply bg-yellow-500 text-yellow-950;
    }

    .badge small {
        @apply text-sm font-medium text-[0.75rem];
    }

    .badge[data-ranking="1"] small {
        @apply text-yellow-800;
    }
</style>