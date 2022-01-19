<script>
	import Toast from '$lib/toast/toast.svelte'
	import WinModal from '$lib/modal/win_modal.svelte'
	import LostModal from '$lib/modal/lost_modal.svelte'
	import Header from '$lib/header/header.svelte'
	import Board from '$lib/board/board.svelte'
	import Keyboard from '$lib/keyboard/keyboard.svelte'

	import { isWordInWordList, isWinningWord, solution } from '$utils/utils'

	let guess_list = []
	let current_guess = ''
	let is_game_won = false
	let is_game_lost = false
	let toast

	function enterKey(character) {
		if (!is_game_won && !is_game_lost) {
			if (character == 'DELETE' || character == 'BACKSPACE') {
				current_guess = current_guess.slice(0, -1)
			} else if (character == 'ENTER') {
				checkWord()
			} else if (current_guess.length < 5 && current_guess.length < 6 && character.length == 1) {
				current_guess += character
			}
		}
	}

	function checkWord() {
		if (!isWordInWordList(current_guess)) return toast.showToast('Word not found')
		const winningWord = isWinningWord(current_guess)
		if (current_guess.length == 5 && guess_list.length < 6 && !is_game_won) {
			guess_list = [...guess_list, current_guess]
			current_guess = ''
			if (winningWord) return (is_game_won = true)
		}
		if (guess_list.length == 6) is_game_lost = true
	}
</script>

<svelte:window on:keydown={(event) => enterKey(event.key.toUpperCase())} />

<Toast bind:this={toast} />
<WinModal visible={is_game_won} {guess_list} />
<LostModal visible={is_game_lost} secret_word={solution} />

<div class="main">
	<Header />
	<Board {guess_list} {current_guess} />
	<Keyboard on:clicked={(event) => enterKey(event.detail.text.toUpperCase())} {guess_list} />
</div>
