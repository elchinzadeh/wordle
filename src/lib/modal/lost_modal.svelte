<script>
	import Icon from '@iconify/svelte'

	import { fade } from 'svelte/transition'

	export let visible = false
	export let secret_word
</script>

{#if visible}
	<div class="modal modal-background" out:fade in:fade>
		<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"> &#8203 </span>
		<div class="modal-content">
			<div>
				<div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
					<Icon icon="bi:x" class="h-6 w-6" />
				</div>
				<div class="mt-3 text-center sm:mt-5">
					<h3 class="text-lg leading-6 font-medium text-gray-900">You Lost!</h3>
					<div class="mt-2">
						<p class="text-sm text-gray-500">Secret word was <b>{secret_word}</b></p>
					</div>
				</div>
			</div>
			<button on:click={() => (visible = false)} type="button" class="btn"> Close </button>
		</div>
	</div>
{/if}
