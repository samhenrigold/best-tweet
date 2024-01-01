// For each blockquote.twitter-tweet > footer > a > time, localize the string to the user's locale and format it using Intl.DateTimeFormat.

const tweets = document.querySelectorAll('blockquote.twitter-tweet');

/**
 * Formats as "Apr 14, 2018 at 5:19 PM" for en-US locale
 * @param {string} dateString - The date string to format
 * @param {boolean} showTime - Whether to show the time or not
 * @returns {string} - The formatted date string
 */
function formatTweetDate(dateString, showTime = true) {
    const options = {
        hour: showTime ? "numeric" : undefined,
        minute: showTime ? "numeric" : undefined,
        month: "short",
        day: "numeric",
        year: "numeric",
    };
    return new Date(dateString).toLocaleString(undefined, options);
}

const numberFormatter = new Intl.NumberFormat(undefined, {
    // add suffixes for thousands, millions, and billions
    // the maximum number of decimal places to use
    maximumFractionDigits: 1,
    // specify the abbreviations to use for the suffixes
    notation: 'compact',
    compactDisplay: 'short'
});

/**
 * Formats a big number to a fuzzy string (e.g. 1_290_000 -> 1.3M)
 * @param {number} number - The number string to format
 * @returns {string} - The formatted number string
 */
function fuzzyNumber(number) {
    return numberFormatter.format(number);
}

tweets.forEach(tweet => {
    // Formatting the time
    const timeStamps = tweet.querySelectorAll('footer > a > time');
    timeStamps.forEach(time => {
        const date = new Date(time.getAttribute('datetime'));
        if (time.className == "long") {
            time.textContent = formatTweetDate(date, true);
        } else {
            time.textContent = formatTweetDate(date, false);
        }
    });

    // Formatting the engagement counters
    const counters = tweet.querySelectorAll('footer > .engagement-counter--container > .engagement-counter');
    counters.forEach(counter => {
        const value = counter.getAttribute('data-value');
        counter.querySelector('span').textContent = fuzzyNumber(value);
    });
});