import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept/CoreConcept.jsx";

function CoreConcepts() {
	return (
		<section id="core-concepts">
			<h2>Time to get started!</h2>
			<ul>
				{/* 배열로 전달해도 렌더링 가능
				{[<p>"Hello"</p>, <p>"world"</p>]} */}
				{CORE_CONCEPTS.map((conceptItem) => {
					return (
						<CoreConcept key={conceptItem.title} {...conceptItem} />
					);
				})}
				{/* long */}
				{/* {<CoreConcept
					title={CORE_CONCEPTS[0].title}
					description={CORE_CONCEPTS[0].description}
					image={CORE_CONCEPTS[0].image}
				/>} */}
				{/* short */}
				{/* {<CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>}
				{<CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>}
				{<CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>} */}
			</ul>
		</section>
	);
}

export default CoreConcepts;
