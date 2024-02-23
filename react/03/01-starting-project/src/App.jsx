import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcept.jsx";

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Time to get started!</h2>
					<ul>
						{/* long */}
						{/* {<CoreConcepts
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/>} */}
						{/* short */}
						{<CoreConcepts {...CORE_CONCEPTS[0]}></CoreConcepts>}
						{<CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>}
						{<CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>}
						{<CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>}
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;

dsa
