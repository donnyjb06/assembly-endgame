import styles from "@components/Keyboard/keyboard.module.scss";
import { FC } from "react";
import clsx from "clsx";

interface KeyboardProp {
	addToGuessedLetters: (letter: string) => void;
	currentWord: string;
	guessedLetters: Set<string>
	isGameOver: boolean;
}

const Keyboard: FC<KeyboardProp> = ({ addToGuessedLetters, currentWord, guessedLetters, isGameOver }) => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

	const alphabetButtons = alphabet.split("").map((letter: string) => {
		const isGuessed = guessedLetters.has(letter);
		const isCorrect = currentWord.includes(letter);

		const buttonClass = clsx(styles.keyboard__key, {
			[styles.keyboard__correctGuess]: isCorrect && isGuessed,
			[styles.keyboard__incorrectGuess]: !isCorrect && isGuessed,
		})

		return (
			<button
				className={buttonClass}
				key={letter}
				onClick={() => addToGuessedLetters(letter)}
				disabled={isGameOver}
				aria-disabled={guessedLetters.has(letter)}
				data-letter={letter}
				aria-label={`Letter ${letter}`}
			>
				{letter}
			</button>
		);
	});

	return <section className={styles.keyboard}>{alphabetButtons}</section>;
};

export default Keyboard;
