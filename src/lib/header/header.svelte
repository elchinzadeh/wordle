<script>
	import InfoModal from '$lib/modal/info_modal.svelte'
	import { infoModal } from '../../utils/store'
	import Icon from '@iconify/svelte'

	function showInfoModal() {
		infoModal.set(true)
	}
</script>

<InfoModal />
<div>
	<div class="max-w-md mx-auto p-2 border-b">
		<div class="flex justify-between">
			<div class="flex items-center" on:click={showInfoModal}>
				<Icon icon="ant-design:question-circle-outlined" class="h-8 w-8"/>
			</div>

			<div class="flex items-center">
				<h1 class="text-4xl font-bold">WORDLE</h1>
			</div>

			<div class="flex items-center">
				<Icon icon="ant-design:setting-outlined" class="h-8 w-8"/>	
			</div>
		</div>
	</div>
</div>
