import styles from "@components/StatusSection/statusSection.module.scss";
import { FC, CSSProperties } from "react";

interface StatusSectionProps {
	isGameWon: boolean;
	isGameLost: boolean;
	isGameOver: boolean;
	guessedLetters: Set<string>;
}

const StatusSection: FC<StatusSectionProps> = ({
	isGameWon,
	isGameLost,
	isGameOver,
	guessedLetters,
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

  const renderGameStatus = () => {
    if (!isGameOver) return null;
    if (isGameWon) {
      return (
        <>
          <h2 className={styles.statusSection__status}>You win!</h2>
          <p className={styles.statusSection__statusMsg}>Well done! 🎉</p>
        </>
      )
    }
    return (
      <>
        <h2 className={styles.statusSection__status}>Game over!</h2>
        <p className={styles.statusSection__statusMsg}>You lose! Better start learning Assembly 😭</p>
      </>
    )
  }

	return (
		<section className={statusClass} style={StatusSectionStyle}>
			{renderGameStatus()}
		</section>
	);
};

export default StatusSection;
