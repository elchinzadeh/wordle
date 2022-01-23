import { writable } from 'svelte/store'

export const data = writable({
    toast: {
        message: undefined,
        visble: false,
        type: 'bg-red-200'
    },
    modals: {
        infoModal: {
            visible: false
        }
    },
});