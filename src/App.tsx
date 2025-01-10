import Header from "@components/Header/Header";
import StatusSection from "@components/StatusSection/StatusSection";
import Languages from "@components/Languages/Languages";
import WordDisplay from "@components/WordDisplay/WordDisplay";
import Keyboard from "@components/Keyboard/Keyboard";
import Button from "@components/Button/Button";
import React from "react";

function App() {
	const [currentWord, setcurrentWord] = React.useState<string>("Pterodactyl");
	const [guessedLetters, setGuessedLetters] = React.useState<Set<string>>(
		new Set()
	);

	const addToGuessedLetters = (letter: string) => {
		setGuessedLetters((prevGuessedLetters) =>
			prevGuessedLetters.has(letter)
				? prevGuessedLetters
				: new Set([...prevGuessedLetters, letter])
		);
	};
	console.log(guessedLetters);

	const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

	return (
		<>
			<Header />
			<StatusSection />
			<Languages />
			<WordDisplay word={currentWord} />
			<Keyboard alphabet={alphabet} addToGuessedLetters={addToGuessedLetters} />
			<Button />
		</>
	);
}

export default App;
