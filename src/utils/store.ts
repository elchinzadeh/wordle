import { writable } from 'svelte/store'

export const toast = writable({ message: undefined, isShown: false })
export const infoModalVisible = writable(false)
