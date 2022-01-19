<script>
	import Cell from '$lib/board/cell.svelte'
	import { fade } from 'svelte/transition'
	import { data } from '$utils/store'
</script>

{#if $data.modals.infoModal.visible}
	<div class="modal modal-background" out:fade in:fade>
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"> &#8203 </span>
			<div class="modal-content">
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

						<button on:click={() => ($data.modals.infoModal.visible = false)} type="button" class="btn"> Close </button>
					</div>
				</div>
			</div>
		</div>
{/if}
