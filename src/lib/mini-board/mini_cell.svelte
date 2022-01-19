<script>
	export let status
	let status_class = {
		absent: 'bg-slate-500',
		correct: 'bg-green-500',
		present: 'bg-yellow-500'
	}
</script>

<div class="mini-cell {status_class[status]}" />
