import styles from "@components/StatusSection/statusSection.module.scss";
import { FC, CSSProperties } from "react";
import { getFarewellText } from "@utils/getFarewellText";
import { languages } from "@utils/languages";

interface StatusSectionProps {
	isGameWon: boolean;
	isGameLost: boolean;
	isGameOver: boolean;
	guessedLetters: Set<string>;
	currentWord: string;
	incorrectGuessCount: number;
}

const StatusSection: FC<StatusSectionProps> = ({
	isGameWon,
	isGameLost,
	isGameOver,
	guessedLetters,
	currentWord,
	incorrectGuessCount,
}) => {
	const StatusSectionStyle: CSSProperties = {
		visibility: guessedLetters.size > 0 ? "visible" : "hidden",
	};

	let statusClass = styles.statusSection;

	if (isGameWon) {
		statusClass = `${styles.statusSection} ${styles.statusSection_win}`;
	} else if (isGameLost) {
		statusClass = `${styles.statusSection} ${styles.statusSection_lose}`;
	} else {
		statusClass = `${styles.statusSection} ${styles.statusSection_notice}`;
	}

	const lastGuessedLetter = Array.from(guessedLetters).pop();
	const isLastGuessedLetterIncorrect =
		lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

	console.log(isLastGuessedLetterIncorrect);

	const renderGameStatus = () => {
		if (!isGameOver && isLastGuessedLetterIncorrect) {
			return (
				<>
					<h2 className={styles.statusSection__status}>
						{getFarewellText(languages[incorrectGuessCount - 1].name)}
					</h2>
				</>
			);
		}
		if (isGameWon) {
			return (
				<>
					<h2 className={styles.statusSection__status}>You win!</h2>
					<p className={styles.statusSection__statusMsg}>Well done! 🎉</p>
				</>
			);
		}
		if (isGameLost) {
			return (
				<>
					<h2 className={styles.statusSection__status}>Game over!</h2>
					<p className={styles.statusSection__statusMsg}>
						You lose! Better start learning Assembly 😭
					</p>
				</>
			);
		}

		return (
			<>
				<h2 className={styles.statusSection__status}>
					{`${languages[incorrectGuessCount].name} survives the pandemic!`}
				</h2>
			</>
		);
	};

	return (
		<section
			className={statusClass}
			style={StatusSectionStyle}
			aria-live="polite"
			role="status"
		>
			{renderGameStatus()}
		</section>
	);
};

export default StatusSection;
