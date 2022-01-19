<script>
	export let value = ''
	export let status = 'normal'

	let status_class = {
		normal: 'normal_cell',
		absent: 'absent_cell',
		correct: 'correct_cell',
		present: 'present_cell'
	}
</script>

<div class="board_cell {status_class[status]}">
	{value}
</div>
