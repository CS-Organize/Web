import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton";

function Examples() {
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
	);
}

export default Examples;
