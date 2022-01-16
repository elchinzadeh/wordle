<script>
	import { onDestroy } from 'svelte'
	import { toast } from '../../utils/store'

	let message
	let isToastShown = false

	const unsubscribe = toast.subscribe((tst) => {
		if (tst.message !== undefined) {
			isToastShown = true
			message = tst.message
			setTimeout(() => toast.set({ message: undefined }), 3000)
		} else {
			isToastShown = false
		}
	})

	onDestroy(unsubscribe)

	export function showToast(message) {
		toast.set({ message: message })
	}
</script>

{#if isToastShown}
	<div class="absolute top-2.5 left-1/2 transform -translate-x-1/2 max-w-sm w-full bg-rose-200 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
		<div class="p-4">
			<p class="text-sm text-center font-medium text-gray-900">
				{message}
			</p>
		</div>
	</div>
{/if}
