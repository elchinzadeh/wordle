import { word_list } from "./word_list"

export type CharStatus = "absent" | "present" | "correct"

export const isWordInWordList = (word: string) => {
  return word_list.includes(word)
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  console.log(word_list[index])
  return word_list[44]
}

export const solution = getWordOfDay()

export const getStatuses = (guesses: string[]): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}

  guesses.forEach((word) => {
    word.split("").forEach((letter, i) => {
      if (!solution.includes(letter)) {
        // make status absent
        return (charObj[letter] = "absent")
      }

      if (letter === solution[i]) {
        //make status correct
        return (charObj[letter] = "correct")
      }

      if (charObj[letter] !== "correct") {
        //make status present
        return (charObj[letter] = "present")
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
  guess = guess
  const splitSolution = solution.split("")
  const splitGuess = guess.split("")

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = "correct"
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = "absent"
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = "present"
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = "absent"
      return
    }
  })

  return statuses
}

let solutionIndex = 1

export const shareStatus = (guesses: string[]) => {
  navigator.clipboard.writeText(
    'Wordle Azərbaycanca \n' + 
    'sozutap.com ' +
      solutionIndex +
      ' ' +
      guesses.length +
      '/6\n' +
      generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}