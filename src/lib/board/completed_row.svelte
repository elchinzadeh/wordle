<script>
	import Cell from '$lib/board/cell.svelte'
	import { getGuessStatuses } from '../../utils/utils'

	export let guess = ''
	export let hidden = false

	const letter_statuses = getGuessStatuses(guess)
</script>

<div class="flex justify-center mb-1">
	{#each guess.split('') as letter, i}
		<Cell value={letter} status={letter_statuses[i]} {hidden} />
	{/each}
</div>
