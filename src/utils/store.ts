import { writable } from 'svelte/store'

export const toast = writable({ message: undefined, isShown: false })

export const data = writable({
    toast: {
        message: undefined,
        visble: false
    },
    modals: {
        infoModal: {
            visible: false
        }
    },
});