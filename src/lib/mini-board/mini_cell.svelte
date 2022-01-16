<script>
	export let status
	let initial_class = 'w-10 h-10 border-solid border-2 border-slate-200 flex items-center justify-center mx-0.5 text-lg font-bold rounded'
	let status_class = {
		absent: 'bg-slate-400',
		correct: 'bg-green-500',
		present: 'bg-yellow-500'
	}
</script>

<div class="{initial_class} {status_class[status]}" />
