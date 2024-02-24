import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleClick(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	/* 3. 변수 사용 */
	let tabContent = <p>Select a topic to see an example</p>;
	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Time to get started!</h2>
					<ul>
						{/* 배열로 전달해도 렌더링 가능
						{[<p>"Hello"</p>, <p>"world"</p>]} */}
						{CORE_CONCEPTS.map((conceptItem) => {
							return <CoreConcepts key={conceptItem.title} {...conceptItem} />;
						})}
						{/* long */}
						{/* {<CoreConcepts
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/>} */}
						{/* short */}
						{/* {<CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts>}
						{<CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts>}
						{<CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts>} */}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							onSelect={() => {
								handleClick("components");
							}}
							isSelected={selectedTopic === "components"}
						>
							Components
						</TabButton>
						<TabButton
							onSelect={() => {
								handleClick("jsx");
							}}
							isSelected={selectedTopic === "jsx"}
						>
							JSX
						</TabButton>
						<TabButton
							onSelect={() => {
								handleClick("props");
							}}
							isSelected={selectedTopic === "props"}
						>
							Props
						</TabButton>
						<TabButton
							onSelect={() => {
								handleClick("state");
							}}
							isSelected={selectedTopic === "state"}
						>
							State
						</TabButton>
					</menu>
					{/* 1. 삼항 연산자 */}
					{/* {selectedTopic ? (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					) : (
						<p>Select a topic to see an example</p>
					)} */}
					{/* 2. && 연산자 */}
					{/* {selectedTopic && (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
					{!selectedTopic && <p>Select a topic to see an example</p>} */}
					{/* 3. 변수 사용 */}
					{tabContent}
				</section>
			</main>
		</div>
	);
}

export default App;
