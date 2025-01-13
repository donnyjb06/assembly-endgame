import styles from "@components/WordDisplay/wordDisplay.module.scss";
import { FC } from "react";
import { nanoid } from "nanoid";

interface WordDisplayProp {
	word: string;
	guessedLetters: Set<string>;
	isGameOver: boolean;
}

const WordDisplay: FC<WordDisplayProp> = ({ word, guessedLetters, isGameOver }) => {
	let letterBoxes = word
		.toUpperCase()
		.split("")
		.map((letter) => {
			const isLetterGuessed = guessedLetters.has(letter);
			
			const style = {
				flexBasis: `calc(100% / ${word.length})`,
				color: isGameOver && !isLetterGuessed ? "#EC5D49" : "#F9F4DA",
			};

			return (
				<span 
					key={nanoid()} 
					className={styles.wordDisplay__letter} 
					style={style}>
					{isLetterGuessed || isGameOver ? letter : ""}
				</span>
			);
		});

	return <section className={styles.wordDisplay}>{letterBoxes}</section>;
};

export default WordDisplay;
