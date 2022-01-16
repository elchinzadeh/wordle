<script>
	import Cell from '$lib/board/cell.svelte';
	import { fade } from 'svelte/transition';
	import { infoModal } from '../../utils/store';
	import { onDestroy } from 'svelte';

	export let visible = false;

	const unsubscribe = infoModal.subscribe((value) => {
		visible = value;
	});
	onDestroy(unsubscribe);

	function closeModal() {
		infoModal.set(false);
	}
</script>

{#if visible}
	<div class="fixed z-10 inset-0 overflow-y-auto" out:fade in:fade on:click={closeModal}>
		<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"> &#8203; </span>

			<div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
				<div>
					<div class="text-center">
						<h3 class="text-lg leading-6 font-medium text-gray-900">How to play</h3>
						<div class="mt-2">
							<p class="text-sm text-gray-500">Guess the WORDLE in 6 tries. After each guess, the color of the tiles will change to show how close your guess was to the word.</p>

							<div class="flex justify-center mb-1 mt-4">
								<Cell value="W" status="correct" />
								<Cell value="E" />
								<Cell value="A" />
								<Cell value="R" />
								<Cell value="Y" />
							</div>
							<p class="text-sm text-gray-500">The letter W is in the word and in the correct spot.</p>

							<div class="flex justify-center mb-1 mt-4">
								<Cell value="P" />
								<Cell value="I" />
								<Cell value="L" status="present" />
								<Cell value="O" />
								<Cell value="T" />
							</div>
							<p class="text-sm text-gray-500">The letter L is in the word but in the wrong spot.</p>

							<div class="flex justify-center mb-1 mt-4">
								<Cell value="V" />
								<Cell value="A" />
								<Cell value="G" />
								<Cell value="U" status="absent" />
								<Cell value="E" />
							</div>
							<p class="text-sm text-gray-500">The letter U is not in the word in any spot.</p>

							<button type="button" class="mt-4 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" on:click={closeModal}> Close </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
