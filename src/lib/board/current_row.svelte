<script>
	import Cell from '$lib/board/cell.svelte'

	export let current_guess = ''

	$: letter_list = current_guess.split('')
</script>

<div class="flex justify-center mb-1">
	{#each letter_list as value}
		<Cell {value} />
	{/each}

	<!-- Empty Guess Letter Box -->
	{#each Array(5 - letter_list.length) as _}
		<Cell />
	{/each}
</div>
