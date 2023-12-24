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

// Format numbers as fuzzy numbers (17932 -> 17.9K in en-US or 17,9k in fr-FR)

const numberFormatter = new Intl.NumberFormat(undefined, {
    // add suffixes for thousands, millions, and billions
    // the maximum number of decimal places to use
    maximumFractionDigits: 1,
    // specify the abbreviations to use for the suffixes
    notation: 'compact',
    compactDisplay: 'short'
});

export function fuzzyNumber(number: number): string {
    return numberFormatter.format(number);
}
