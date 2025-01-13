import Header from "@components/Header/Header";
import StatusSection from "@components/StatusSection/StatusSection";
import Languages from "@components/Languages/Languages";
import WordDisplay from "@components/WordDisplay/WordDisplay";
import Keyboard from "@components/Keyboard/Keyboard";
import Button from "@components/Button/Button";
import React from "react";
import { languages } from "@utils/languages";

function App() {
	// State variables
	const [currentWord, setcurrentWord] = React.useState<string>(
		"React".toUpperCase()
	);
	const [guessedLetters, setGuessedLetters] = React.useState<Set<string>>(
		new Set()
	);

	// Derived state variables
	const amountOfGuessesLeft = languages.length - 1;
	let incorrectGuessCount: number = 0;

	for (const letter of guessedLetters) {
		if (guessedLetters.has(letter) && !currentWord.includes(letter)) {
			incorrectGuessCount += 1;
		}
	}

	const isGameWon = currentWord
		.split("")
		.every((letter) => guessedLetters.has(letter));
	const isGameLost = incorrectGuessCount >= languages.length - 1;
	const isGameOver = isGameWon || isGameLost;

	const addToGuessedLetters = (letter: string) => {
		setGuessedLetters((prevGuessedLetters) =>
			prevGuessedLetters.has(letter)
				? prevGuessedLetters
				: new Set([...prevGuessedLetters, letter])
		);
	};

	const lastGuessedLetter = Array.from(guessedLetters).pop();
	const isLastGuessedLetterCorrect = lastGuessedLetter && currentWord.includes(lastGuessedLetter);

	return (
		<>
			<Header />
			<StatusSection
				isGameWon={isGameWon}
				isGameLost={isGameLost}
				guessedLetters={guessedLetters}
				isGameOver={isGameOver}
				currentWord={currentWord}
				incorrectGuessCount={incorrectGuessCount}
			/>
			<Languages wrongGuessCounter={incorrectGuessCount} />
			<WordDisplay
				word={currentWord}
				guessedLetters={guessedLetters}
				isGameOver={isGameOver}
			/>

			<section
				className="screen-reader-only"
				aria-live="polite"
				role="status"
			>
				<p>
					{isLastGuessedLetterCorrect
					? `Correct! The letter ${lastGuessedLetter} is in the word.`
					: `Incorrect! The letter ${lastGuessedLetter} is not in the word.`}
					You have ${amountOfGuessesLeft} guesses left.
				</p>
				<p>Current word: {currentWord.split("").map(letter =>
					guessedLetters.has(letter) ? letter + "." : "blank."
				).join(" ")}</p>
			</section>

			<Keyboard
				addToGuessedLetters={addToGuessedLetters}
				currentWord={currentWord}
				guessedLetters={guessedLetters}
				isGameOver={isGameOver}
			/>
			{isGameOver && <Button />}
		</>
	);
}

export default App;
