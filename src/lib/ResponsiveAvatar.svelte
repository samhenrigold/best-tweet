<script lang="ts">
    export let src: string;
    export let name: string;
</script>

<picture class="avatar">
    <source media="(max-width: 480px)" srcset={src} />
    <source media="(max-width: 768px)" srcset={src.replace("normal", "x96")} />
    <source media="(max-width: 1024px)" srcset={src.replace("normal", "reasonably_small")} />
    <source media="(max-width: 1440px)" srcset={src.replace("_normal", "")} />
    <img 
        src={src.replace("normal", "reasonably_small")}
        alt={name ? `Profile image of ${name}` : ""}
    />
</picture>

<style>
    /* Make sure we're not stretching the image — fill to frame */
    img {
        @apply w-10 h-10 rounded-full bg-gray-400 border border-gray-300;
    }
</style>