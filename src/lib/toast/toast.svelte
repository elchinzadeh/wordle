<script>
	import { data } from '$utils/store'

	export function showToast(message) {
		$data.toast = { message: message, visble: true }
		setTimeout(() => ($data.toast = { message: undefined, visble: false }), 3000)
	}
</script>

{#if $data.toast.visble}
	<div class="absolute top-2.5 left-1/2 transform -translate-x-1/2 max-w-sm w-full bg-rose-200 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
		<div class="p-4">
			<p class="text-sm text-center font-medium text-gray-900">
				{$data.toast.message}
			</p>
		</div>
	</div>
{/if}
