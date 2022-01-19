<script>
	import MiniBoard from '$lib/mini-board/mini_board.svelte'
	import Icon from '@iconify/svelte'

	import { fade } from 'svelte/transition'
	export let visible = false
	export let guess_list
</script>

{#if visible}
	<div class="modal modal-background" out:fade in:fade>
		<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"> &#8203 </span>
		<div class="modal-content">
			<div>
				<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
					<Icon icon="akar-icons:check" />
				</div>
				<div class="mt-3 text-center sm:mt-5">
					<h3 class="text-lg leading-6 font-medium text-gray-900">You win!</h3>
					<div class="mt-2">
						<MiniBoard {guess_list} />
						<p class="text-sm text-gray-500">Congrats.</p>
					</div>
				</div>
			</div>
			<button on:click={() => (visible = false)} type="button" class="btn"> Close </button>
		</div>
	</div>
{/if}
