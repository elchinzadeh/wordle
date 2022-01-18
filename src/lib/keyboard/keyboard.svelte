<script>
	import Key from '$lib/keyboard/key.svelte'
	import { getStatuses } from '$utils/utils'

	export let guess_list
	let keyboard = [
		['Q', 'Ü', 'E', 'R', 'T', 'Y', 'U', 'İ', 'O', 'P', 'Ö', 'Ğ'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'I', 'Ə'],
		['Yoxla', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Z', 'Ç', 'Ş', 'Sil']
	]
	$: charStatuses = getStatuses(guess_list)
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
