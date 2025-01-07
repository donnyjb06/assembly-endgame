import Header from "@components/Header/Header";
import StatusSection from "@components/StatusSection/StatusSection";
import Languages from "@components/Languages/Languages";
import WordDisplay from "@components/WordDisplay/WordDisplay";
import React from "react";

function App() {
	const [currentWord, setcurrentWord] = React.useState<string>("Pterodactyl");

	return (
		<>
			<Header />
			<StatusSection />
			<Languages />
			<WordDisplay word={currentWord} />
		</>
	);
}

export default App;
