<script>
	import Key from '$lib/keyboard/key.svelte';
	import { getStatuses } from '../../utils/utils';

	export let guess_list;
	let keyboard = [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Z', 'Delete']
	];
	$: charStatuses = getStatuses(guess_list);
</script>

<div class="flex-none">
	{#each keyboard as letter_list}
		<div class="flex justify-center mb-1">
			{#each letter_list as letter}
				<Key on:clicked value={letter} status={charStatuses[letter] || 'normal'} />
			{/each}
		</div>
	{/each}
</div>
