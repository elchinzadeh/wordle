import { word_list } from '$utils/word_list'

export type CharStatus = 'absent' | 'present' | 'correct' | 'normal'

export const isWordInWordList = (word: string) => {
	return word_list.includes(word.toLowerCase())
}

export const isWinningWord = (word: string) => {
	return solution === word.toUpperCase()
}

export const getWordOfDay = () => {
	// January 1, 2022 Game Epoch
	const epochMs = 1641013200000
	const now = Date.now()
	const msInDay = 86400000
	const index = Math.floor((now - epochMs) / msInDay)
	return word_list[index].toUpperCase()
}

export const solution = getWordOfDay()

export const getStatuses = (guess_list: string[]): { [character: string]: CharStatus } => {
	const result: { [character: string]: CharStatus } = {}
	guess_list.forEach((word) => {
		word
			.toUpperCase()
			.split('')
			.forEach((letter, i) => {
				if (!solution.includes(letter)) {
					// make status absent
					return (result[letter] = 'absent')
				}

				if (letter === solution[i]) {
					//make status correct
					return (result[letter] = 'correct')
				}

				if (result[letter] !== 'correct') {
					//make status present
					return (result[letter] = 'present')
				}
			})
	})
	return result
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
	const solution_letter_list = solution.split('')
	const guess_letter_list = guess.split('')

	const solution_chars_taken = solution_letter_list.map((_) => false)

	const statuses: CharStatus[] = Array.from(Array(guess.length))

	// handle all correct cases first
	guess_letter_list.forEach((letter, i) => {
		if (letter === solution_letter_list[i]) {
			statuses[i] = 'correct'
			solution_chars_taken[i] = true
			return
		}
	})

	guess_letter_list.forEach((letter, i) => {
		if (statuses[i]) return

		if (!solution_letter_list.includes(letter)) {
			// handles the absent case
			statuses[i] = 'absent'
			return
		}

		// now we are left with "present"s
		const indexOfPresentChar = solution_letter_list.findIndex((x, index) => x === letter && !solution_chars_taken[index])

		if (indexOfPresentChar > -1) {
			statuses[i] = 'present'
			solution_chars_taken[indexOfPresentChar] = true
			return
		} else {
			statuses[i] = 'absent'
			return
		}
	})

	return statuses
}
