<script lang="ts">
    export let src: string;
    export let name: string;
</script>

<picture>
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
        width: 44pt;
        height: 44pt;
        border-radius: 50%;
        background-color: lightgray;
        border: 1pt solid silver;
    }
</style>