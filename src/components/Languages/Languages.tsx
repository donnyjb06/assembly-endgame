import styles from "@components/Languages/languages.module.scss";
import { languages } from "@utils/languages";
import { nanoid } from "nanoid";
import { FC } from "react";

interface LanguagesProp {
	wrongGuessCounter: number;
}

const Languages: FC<LanguagesProp> = ({ wrongGuessCounter }) => {
	const languageElements = languages.map((language, index) => {
		const style = {
			backgroundColor: language.backgroundColor,
			color: language.color,
		};

		const isLanguageLost = index <= wrongGuessCounter - 1;

		const className =
			isLanguageLost
				? `${styles.languages__card_status_lost} ${styles.languages__card}`
				: styles.languages__card;

		return (
			<span className={className} key={nanoid()} style={style}>
				{language.name}
			</span>
		);
	});

	return <section className={styles.languages}>{languageElements}</section>;
};

export default Languages;
