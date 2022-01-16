<script>
	import Cell from '$lib/board/cell.svelte'
</script>

<div class="flex justify-center mb-1">
	{#each Array(5) as _}
		<Cell />
	{/each}
</div>
