import { word_list } from "./word_list"
import { SUPABASE_URL, SUPABASE_KEY } from '../utils/variables';
import { createClient } from '@supabase/supabase-js'
import { userStore } from '../utils/store';

export type CharStatus = "absent" | "present" | "correct"

export const isWordInWordList = (word: string) => {
  return word_list.includes(word.toLowerCase())
}

export const isWinningWord = (word: string) => {
  return solution === word.toLowerCase()
}

export const getWordOfDay = () => {
    // January 1, 2022 Game Epoch
  const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 700000
  let index = Math.floor((now - epochMs) / msInDay)
  console.log(word_list[index])
  return word_list[index].toUpperCase()
}

export const solution = getWordOfDay()

export const getStatuses = (guesses: string[]): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}

  console.log(guesses)
  console.log(solution)
  
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
  console.log(charObj)
  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
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
export const supabase = createClient(SUPABASE_URL.toString(), SUPABASE_KEY.toString())

export const saveUser = async (username: string) => {
  const { data, error } = await supabase
    .from('users')
    .insert([
      { name: username, score: 0 }
    ])
    userStore.set(username)
}

export const insertWord = async (username, guess_list) => {
  const { data, error } = await supabase
    .from('rooms')
    .update({ 'guess_list': guess_list })
    .eq('username', username)
    .eq('code', 1232)
  return data
}
