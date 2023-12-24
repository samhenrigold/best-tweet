import type { TweetData } from "./TweetData";

export function formatTweetDate(dateString: string): string {
    // Formats as "Apr 14, 2018 at 5:19 PM" for en-US locale
    const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        month: "short",
        day: "numeric",
        year: "numeric",
    };
    return new Date(dateString).toLocaleString(undefined, options);
}

export function cleanFullText(fullText: string): string {
    // Remove t.co links
    fullText = fullText.replace(/https?:\/\/t.co\/[a-zA-Z0-9]+/g, "");
    return fullText;
}