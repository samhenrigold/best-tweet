import { writable } from 'svelte/store';

export const countdownStore = writable({
  now: new Date(),
  targetDate: new Date('2023-12-31T23:59:59-05:00'),
  diff: 1,
});