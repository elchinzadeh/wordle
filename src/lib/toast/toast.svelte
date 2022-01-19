<script>
	import { data } from '$utils/store'

	export function showToast(message) {
		$data.toast = { message: message, visble: true }
		setTimeout(() => ($data.toast = { message: undefined, visble: false }), 3000)
	}
</script>

{#if $data.toast.visble}
	<div class="toast">
		<p class="text-sm text-center font-medium text-gray-900 p-4">
			{$data.toast.message}
		</p>
	</div>
{/if}
