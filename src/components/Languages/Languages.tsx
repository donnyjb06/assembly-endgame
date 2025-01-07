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
			<span className={styles.languages__card} key={nanoid()} style={style}>
				{language.name}
			</span>
		);
	});

	return <section className={styles.languages}>{languageElements}</section>;
};

export default Languages;
