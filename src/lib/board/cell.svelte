<script>
	export let value = ''
	export let status = 'normal'

	let initial_class = 'w-16 h-16 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded-lg unselectable'
	let status_class = {
		normal: 'bg-white border-slate-200',
		absent: 'bg-slate-400 border-slate-400 text-white',
		correct: 'bg-green-500 border-green-500 text-white',
		present: 'bg-yellow-500 border-yellow-500 text-white'
	}
</script>

<div class="{initial_class} {status_class[status]}">
	{value}
</div>
