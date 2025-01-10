import styles from "@components/Keyboard/keyboard.module.scss";
import { FC } from "react";

interface KeyboardProp {
	alphabet: string;
	addToGuessedLetters: (letter: string) => void;
}

const Keyboard: FC<KeyboardProp> = ({ alphabet, addToGuessedLetters }) => {
	const alphabetButtons = alphabet.split("").map((letter) => {
		return (
			<button
				className={styles.keyboard__key}
				key={letter}
				onClick={() => {addToGuessedLetters(letter)}}
				data-letter={letter}
			>
				{letter}
			</button>
		);
	});

	return <section className={styles.keyboard}>{alphabetButtons}</section>;
};

export default Keyboard;
