import styles from "@components/Languages/languages.module.scss";
import { languages } from "@utils/languages";
import { nanoid } from "nanoid";

const Languages = () => {
	const languageElements = languages.map((language) => {
		const style = {
			backgroundColor: language.backgroundColor,
			color: language.color,
		};
		return (
			<div className={styles.languages__card} style={style}>
				{language.name}
			</div>
		);
	});

	return <section className={styles.languages}>{languageElements}</section>;
};

export default Languages;
