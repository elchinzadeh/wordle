import { writable } from 'svelte/store'

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