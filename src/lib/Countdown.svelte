<script lang="ts">
    import { onMount } from 'svelte';
    import { countdownStore } from './countdownStore'; // Import the store
  
    let countdown = "00 hours, 00 minutes, 00 seconds";
  
    // Function to format the time with leading zero
    function formatTime(time: number): string {
      return time < 10 ? `0${time}` : `${time}`;
    }
  
    // Function to update the countdown
    function updateCountdown() {
      const now = new Date();
      const targetDate = new Date('2023-12-31T23:59:59-05:00');
      const diff = targetDate.getTime() - now.getTime();
  
      countdownStore.set({ now, targetDate, diff }); // Update the store
  
      if (diff <= 0) {
        countdown = "The countdown is over!";
        return;
      }
  
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      const pluralRules = new Intl.PluralRules('en-US');
      const hourUnit = pluralRules.select(hours) === 'one' ? 'hour' : 'hours';
      const minuteUnit = pluralRules.select(minutes) === 'one' ? 'minute' : 'minutes';
      const secondUnit = pluralRules.select(seconds) === 'one' ? 'second' : 'seconds';
  
      countdown = `${hours} ${hourUnit}, ${formatTime(minutes)} ${minuteUnit}, ${formatTime(seconds)} ${secondUnit}`;
    }
  
    onMount(() => {
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    });
  </script>
  
  <!-- HTML to display the countdown -->
  <p>Voting ends in: {countdown}</p>

<style lang="postcss">
    p {
        @apply max-w-[50ch] mx-auto text-gray-500;
        font-feature-settings: "tnum";
    }
</style>