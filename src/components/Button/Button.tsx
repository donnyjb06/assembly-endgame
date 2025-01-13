import styles from "@components/Button/button.module.scss";
import { FC } from "react";

interface ButtonProps {
	resetGame: () => void;
}

const Button: FC<ButtonProps> = ({ resetGame }) => {
	return <button className={styles.newGameBtn} onClick={resetGame}>New Game</button>;
};

export default Button;
