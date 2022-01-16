<script>
	import MiniCell from './mini_cell.svelte';
	import { getGuessStatuses } from '../../utils/utils';

	export let guess;
	const letter_statuses = getGuessStatuses(guess);
</script>

<div class="flex justify-center mb-1">
	{#each guess.split('') as letter, i}
		<MiniCell status={letter_statuses[i]} />
	{/each}
</div>
