<script>
	import InfoModal from '$lib/modal/info_modal.svelte';
	import { infoModal } from '../../utils/store';

	function showInfoModal() {
		infoModal.set(true);
	}
</script>

<InfoModal />
<div>
	<div class="max-w-md mx-auto p-2 border-b">
		<div class="flex justify-between">
			<div class="flex items-center" on:click={showInfoModal}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>

			<div class="flex items-center">
				<h1 class="text-4xl font-bold">WORDLE</h1>
			</div>

			<div class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
				</svg>
			</div>
		</div>
	</div>
</div>
