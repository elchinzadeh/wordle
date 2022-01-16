<script>
	import { createEventDispatcher } from 'svelte'

	export let value
	export let status = 'normal'

	const initial_class = 'flex items-center justify-center rounded mx-0.5 text-base cursor-pointer'
	let status_class = {
		normal: 'bg-slate-200 hover:bg-slate-300 active:bg-slate-400',
		absent: 'bg-slate-400 text-white',
		correct: 'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white',
		present: 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white'
	}

	const dispatch = createEventDispatcher()
	function onClick() {
		dispatch('clicked', { text: value })
	}

	const style = 'width: ' + (value.length > 1 ? '60' : '40') + 'px; height: 58px'
</script>

<button on:click={onClick} class="{initial_class} {status_class[status]}" {style}>
	{value}
</button>
