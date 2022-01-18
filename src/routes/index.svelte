<script>
	import Header from '$lib/header/header.svelte'
	import Board from '$lib/board/board.svelte'
	import Keyboard from '$lib/keyboard/keyboard.svelte'
	import Toast from '$lib/toast/toast.svelte'
	import WinModal from '$lib/modal/win_modal.svelte'
	import LostModal from '$lib/modal/lost_modal.svelte'
	import { isWordInWordList, isWinningWord, solution, getWordOfDay, insertWord, supabase, getRoomInformation } from '../utils/utils'
	import { nameModal, roomStore, userStore, gameStateStore } from '../utils/store'
	
import { onMount } from 'svelte';

	let guess_list = []
	let current_guess = ''
	let multi_guess_list = []
	let isModalShowing = false

	let isGameWon = false
	let isGameLost = false
	let toast
	let secret_word = solution
	let current_username
	let current_room
	let another_username = 'another user'

	function enterKey(key) {
		if (!isGameWon && !isGameLost && !isModalShowing) {
			if (key == 'Delete') {
				current_guess = current_guess.slice(0, -1)
			} else if (key == 'Enter') {
				enter()
			} else {
				if (current_guess.length < 5 && current_guess.length < 6) {
					current_guess += key
				}
			}
		}
	}
	nameModal.subscribe((value) => {
		isModalShowing = value
		console.log(isModalShowing)
	})

	function handleKeyboardClick(event) {
		enterKey(event.detail.text)
	}

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

	function enter() {
		if (!isWordInWordList(current_guess)) {
			toast.showToast('Word not found')
			return
		}

		const winningWord = isWinningWord(current_guess)

		if (current_guess.length == 5 && guess_list.length < 6 && !isGameWon) {
			guess_list.push(current_guess)
			guess_list = guess_list
			current_guess = ''

			insertWordToServer(guess_list)
			if (winningWord) {
				isGameWon = true
			}
		}

		if (guess_list.length == 6) {
			isGameLost = true
		}
	}

	userStore.subscribe((value) => {
		current_username = value
	})
	roomStore.subscribe((value) => {
		current_room = value
	})

	function insertWordToServer(guess_list) {
		insertWord(current_username, current_room, guess_list)
	}

	onMount(async () => {
		let data = getRoomInformation(current_room, current_room)
		console.log('ROOM')
		console.log(data)
	});
	

	gameStateStore.subscribe((value) => {
		console.log('HHHHHHH')
		console.log(value)
		try {
			if (value.length != 0 && value) {
				value.forEach((element) => {
					if (element['username'] == current_username) {
						guess_list = element['guess_list']
					} else {
						another_username = element['username']
						multi_guess_list = element['guess_list']
					}
				})
			}
		} catch (Error) {
			console.log(Error)
		}
	})

	const mySubscription = supabase.from('rooms').on('*', (payload) => {
		// console.log(multi_guess_list)
		let data = payload['new']
		console.log("-----")
		console.log(data)
		if (data['username'] != current_username && data['room'] == current_room) {
			console.log(data['guess_list'])
			multi_guess_list = data['guess_list']
		}
	})

	mySubscription.subscribe()

</script>

<svelte:window on:keydown={handleKeyboardClickOnWindows} />

<Toast bind:this={toast} />
<WinModal visible={isGameWon} {guess_list} />
<LostModal visible={isGameLost} {guess_list} {secret_word} />
<div class="flex flex-col max-w-2lg min-h-screen mx-auto " style="height: 100vh; max-height: -webkit-fill-available;">
	<Header />
	<div class="flex-1 flex space-x-3 mx-auto">
		<Board {guess_list} {current_guess} username={current_username} />
		<Board guess_list={multi_guess_list} hidden={true} username={another_username} />
	</div>
	<Keyboard on:clicked={handleKeyboardClick} {guess_list} />
</div>
