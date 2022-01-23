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
	let isGameWon = false
	let isGameLost = false
	let toast

	function handleKeyboardClickOnWindows(event) {
		let key = event.key.toUpperCase()
		if (key == 'ENTER') {
			key = 'Enter'
		} else if (key == 'BACKSPACE') {
			key = 'Delete'
		}
		if (key.length === 1 || key == 'Enter' || key == 'Delete') {
			enterKey(key)
		}
	}

	function enterKey(key) {
		if (!isGameWon && !isGameLost) {
			if (key == 'Delete' || key == 'Sil') {
				current_guess = current_guess.slice(0, -1)
			} else if (key == 'Enter' || key == 'Yoxla') {
				checkWord()
			} else {
				if (current_guess.length < 5 && current_guess.length < 6) {
					current_guess += key
				}
			}
		}
	}

	function checkWord() {
		if (!isWordInWordList(current_guess)) {
			toast.showToast('Söz bazada tapılmadı')
			return
		}

		const winningWord = isWinningWord(current_guess)

		if (current_guess.length == 5 && guess_list.length < 6 && !isGameWon) {
			guess_list.push(current_guess)
			guess_list = guess_list
			current_guess = ''
			if (winningWord) {
				isGameWon = true
			}
		}

		if (guess_list.length == 6) {
			isGameLost = true
		}
	}
</script>

<svelte:window on:keydown={handleKeyboardClickOnWindows} />

<Toast bind:this={toast} />
<WinModal visible={isGameWon} {guess_list} />
<LostModal visible={isGameLost} {guess_list} secret_word = {solution} />

<div class="flex flex-col max-w-lg  mx-auto"  style="height: 620px;">
	<Header />
	<Board {guess_list} {current_guess} />
	<Keyboard on:clicked={(event) => enterKey(event.detail.text)} {guess_list} />
</div>
