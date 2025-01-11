import styles from "@components/WordDisplay/wordDisplay.module.scss";
import { FC } from "react";
import { nanoid } from "nanoid";

interface WordDisplayProp {
	word: string;
	guessedLetters: Set<string>;
}

const WordDisplay: FC<WordDisplayProp> = ({ word, guessedLetters }) => {
	const style = {
		flexBasis: `calc(100% / ${word.length})`,
	};

	let letterBoxes = word
		.toUpperCase()
		.split("")
		.map((letter) => {
			return (
				<span key={nanoid()} className={styles.wordDisplay__letter} style={style}>
					{guessedLetters.has(letter) ? letter : ""}
				</span>
			);
		});

	return <section className={styles.wordDisplay}>{letterBoxes}</section>;
};

export default WordDisplay;
