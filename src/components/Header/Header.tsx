import styles from "@components/Header/header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.header__title}>Assembly: Endgame</h1>
			<p className={styles.header__subtitle}>
				Guess the word in under 8 attempts to keep the programming world safe
				from Assembly!
			</p>
		</header>
	);
};

export default Header;
