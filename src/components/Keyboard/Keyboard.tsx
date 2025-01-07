import styles from "@components/Keyboard/keyboard.module.scss";
import { FC } from "react";

interface KeyboardProp {
	alphabet: string;
}

const Keyboard: FC<KeyboardProp> = ({ alphabet }) => {
	const alphabetButtons = alphabet.split("").map((letter) => {
		return (
			<button className={styles.keyboard__key} key={letter}>
				{letter}
			</button>
		);
	});

	return <section className={styles.keyboard}>
    {alphabetButtons}
  </section>;
};

export default Keyboard;
