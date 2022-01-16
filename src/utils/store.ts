import { writable } from 'svelte/store'

export const toast = writable({ message: undefined })
export const infoModal = writable(false)
