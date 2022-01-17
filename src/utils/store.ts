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

const roomInitialValue = browser ? window.localStorage.getItem('room') ?? defaultValue : defaultValue;
 
export const roomStore = writable<string>(roomInitialValue);
 
roomStore.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('room', value);
  }
});

const gameStateDefaultValue = {};
const gameStateInitialValue = browser ? JSON.parse(window.localStorage.getItem('gameState')) ?? gameStateDefaultValue : gameStateDefaultValue;

export const gameStateStore = writable<any>(gameStateInitialValue);
 
gameStateStore.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('gameState', JSON.stringify(value));
  }
});

export const remove = () => {
  if (browser) {
    window.localStorage.clear()
    window.location.reload()
  }
}