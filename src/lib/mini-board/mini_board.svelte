<script>
	import MiniCompletedRow from '$lib/mini-board/mini_completed_row.svelte'

	export let guess_list
</script>

<div class="pb-6">
	{#each guess_list as guess}
		<MiniCompletedRow {guess} />
	{/each}
</div>
