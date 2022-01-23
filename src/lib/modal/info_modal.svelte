<script>
	import Cell from '$lib/board/cell.svelte'
	import { fade } from 'svelte/transition'
	import { data } from '$utils/store'
</script>

{#if $data.modals.infoModal.visible}
	<div class="fixed z-10 inset-0 overflow-y-auto" out:fade in:fade>
		<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"> &#8203 </span>

			<div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
				<div>
					<div class="text-center">
						<h3 class="text-lg leading-6 font-medium text-gray-900">Qaydalar</h3>
						<div class="mt-2">
							<p class="text-sm text-gray-500"> 6 cəhddə söz tapın. Hər təxmindən sonra plitələrin rəngi sizin
								təxmininizin sözə nə qədər yaxın olduğunu göstərmək
								üçün dəyişəcək.</p>

							<div class="flex justify-center mb-1 mt-4">
								<Cell value="G" status="correct" />
								<Cell value="Ö" />
								<Cell value="Z" />
								<Cell value="Ə" />
								<Cell value="L" />
							</div>
							<p class="text-sm text-gray-500">G hərfi gizli sözdədir və düzgün yerdədir							</p>

							<div class="flex justify-center mb-1 mt-4">
								<Cell value="P" />
								<Cell value="I" />
								<Cell value="L" status="present" />
								<Cell value="O" />
								<Cell value="T" />
							</div>
							<p class="text-sm text-gray-500">T hərfi gizli sözdədir lakin səhv yerdədir</p>

							<div class="flex justify-center mb-1 mt-4">
								<Cell value="B" />
								<Cell value="A" />
								<Cell value="L" />
								<Cell value="I" status="absent" />
								<Cell value="Q" />
							</div>
							<p class="text-sm text-gray-500">I hərfi gizli sözün heç bir yerində yoxdur.</p>

							<button on:click={() => ($data.modals.infoModal.visible = false)} type="button" class="mt-4 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"> Close </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
