import Header from "@components/Header/Header";
import StatusSection from "@components/StatusSection/StatusSection";
import Languages from "@components/Languages/Languages";
import WordDisplay from "@components/WordDisplay/WordDisplay";
import Keyboard from "@components/Keyboard/Keyboard";
import Button from "@components/Button/Button";
import React from "react";

function App() {
	const [currentWord, setcurrentWord] = React.useState<string>("Pterodactyl");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

	return (
		<>
			<Header />
			<StatusSection />
			<Languages />
			<WordDisplay word={currentWord} />
      <Keyboard alphabet={alphabet} />
      <Button />
		</>
	);
}

export default App;
