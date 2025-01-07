import styles from "@components/WordDisplay/wordDisplay.module.scss";
import { FC } from "react";
import { nanoid } from "nanoid";

interface WordDisplayProp {
	word: string;
}

const WordDisplay: FC<WordDisplayProp> = ({ word }) => {
	let letterBoxes = word
		.toUpperCase()
		.split("")
		.map((letter, index) => {
			return <span key={nanoid()} className={styles.wordDisplay__letter}>{letter}</span>;
		});

	return <section className={styles.wordDisplay}>{letterBoxes}</section>;
};

export default WordDisplay;
