import Header from "@components/Header/Header";
import StatusSection from "@components/StatusSection/StatusSection";
import Languages from "@components/Languages/Languages";
import WordDisplay from "@components/WordDisplay/WordDisplay";
import Keyboard from "@components/Keyboard/Keyboard";
import Button from "@components/Button/Button";
import React from "react";
import clsx from "clsx";

function App() {
	const [currentWord, setcurrentWord] = React.useState<string>("Pterodactyl".toUpperCase());
	const [guessedLetters, setGuessedLetters] = React.useState<Set<string>>(
		new Set()
	);

	let incorrectGuessCount: number = 0;

	for (const letter of guessedLetters) {
		if (guessedLetters.has(letter) && !currentWord.includes(letter)) {
			incorrectGuessCount += 1;
		}
	}

	console.log(incorrectGuessCount)

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
			<Languages />
			<WordDisplay word={currentWord} guessedLetters={guessedLetters} />
			<Keyboard alphabet={alphabet} addToGuessedLetters={addToGuessedLetters} currentWord={currentWord} guessedLetters={guessedLetters} />
			<Button />
		</>
	);
}

export default App;
