<script>
	import CompletedRow from '$lib/board/completed_row.svelte'
	import CurrentRow from '$lib/board/current_row.svelte'
	import EmptyRow from '$lib/board/empty_row.svelte'

	export let guess_list = []
	export let current_guess = ''
	export let username = ''
	export let hidden = false
	$: empties = guess_list.length < 6 ? Array.from(Array(5 - guess_list.length)) : []
</script>

<div class="flex flex-col justify-center">
	<div class="flex justify-center text-bold text-2xl mb-2">
		{username}
	</div>
	
	{#each guess_list as guess}
		<CompletedRow {hidden} {guess} />
	{/each}

	{#if current_guess.length < 6 && guess_list.length != 6}
		<CurrentRow {current_guess} />
	{/if}

	{#each empties as _}
		<EmptyRow />
	{/each}
</div>
