<script lang="ts">
	import Tweet from "./Tweet.svelte";
    import type { TweetData, User } from "./TweetData";

    const placeholderUser: User = {
        name: "Pending…",
        user_id: 0,
        screen_name: "",
        legacy_verified: false,
        profile_image_url_https: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    };

    const placeholderTweet: TweetData = {
        lang: "en",
        users: placeholderUser,
        user_id: 0,
        tweet_id: 0,
        full_text: "Pending…",
        created_at: Date.now(),
        tweet_media: [],
        tweet_id_str: "0",
        retweet_count: 0,
        favorite_count: 0,
        in_reply_to_status_id: null,
    };

</script>

<div class="flex flex-col items-center p-8 gap-12">
    <header>
        <h2>The search for <strong>The Best Tweet</strong> has ended.</h2>
        <p>I (<a href="https://samhenri.gold">Sam</a>) got lazy and didn’t automate this part. I need to look at the database and update this web app.</p>
        <p>Check back when I wake up at about 8:30 AM.</p>
        <p>Thank you for participating!</p>
    </header>
    
    <main>
        <Tweet tweet={placeholderTweet} selected={false}/>
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
</style>