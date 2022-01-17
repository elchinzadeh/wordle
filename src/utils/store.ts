import { writable } from 'svelte/store'
import { browser } from '$app/env';

export const toast = writable({ message: undefined })
export const infoModal = writable(false)
export const nameModal = writable(false)
 
const defaultValue = 'undefined';
const userInitialValue = browser ? window.localStorage.getItem('username') ?? defaultValue : defaultValue;
 
export const userStore = writable<string>(userInitialValue);
 
userStore.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('username', value);
  }
});