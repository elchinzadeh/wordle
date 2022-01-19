<script>
	import { createEventDispatcher } from 'svelte'

	export let value
	export let status

	let status_class = {
		normal: 'normal_key',
		absent: 'absent_key',
		correct: 'correct_key',
		present: 'present_key'
	}

	const dispatch = createEventDispatcher()
	function onClick() {
		dispatch('clicked', { text: value })
	}

	const style = 'width: ' + (value.length > 1 ? '65' : '40') + 'px; height: 50px'
</script>

<button on:click={onClick} class="key {status_class[status]}" {style}>
	{value}
</button>
