import Header from "@components/Header/Header";
import StatusSection from "@components/StatusSection/StatusSection";
import Languages from "@components/Languages/Languages";
import WordDisplay from "@components/WordDisplay/WordDisplay";
import Keyboard from "@components/Keyboard/Keyboard";
import Button from "@components/Button/Button";
import React from "react";
import clsx from "clsx";
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



	// Stativ variables
	const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

	const addToGuessedLetters = (letter: string) => {
		setGuessedLetters((prevGuessedLetters) =>
			prevGuessedLetters.has(letter)
				? prevGuessedLetters
				: new Set([...prevGuessedLetters, letter])
		);
	};

	return (
		<>
			<Header />
			<StatusSection />
			<Languages wrongGuessCounter={incorrectGuessCount} />
			<WordDisplay word={currentWord} guessedLetters={guessedLetters} />
			<Keyboard
				alphabet={alphabet}
				addToGuessedLetters={addToGuessedLetters}
				currentWord={currentWord}
				guessedLetters={guessedLetters}
			/>
			{isGameOver && <Button />}
		</>
	);
}

export default App;
