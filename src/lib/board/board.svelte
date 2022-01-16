<script>
	import CompletedRow from '$lib/board/completed_row.svelte';
	import CurrentRow from '$lib/board/current_row.svelte';
	import EmptyRow from '$lib/board/empty_row.svelte';

	export let guess_list = [];
	export let current_guess = '';
	$: empties = guess_list.length < 5 ? Array.from(Array(5 - guess_list.length)) : [];
</script>

<div class="flex-1 flex flex-col justify-center">
	{#each guess_list as guess}
		<CompletedRow {guess} />
	{/each}

	{#if current_guess.length < 6}
		<CurrentRow {current_guess} />
	{/if}

	{#each empties as _}
		<EmptyRow />
	{/each}
</div>
