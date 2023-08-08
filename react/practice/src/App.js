import React from "react";
import "./App.css";

import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
	const counterProps = {
		a: 1,
		initialValue: 0,
	};
	return (
		<div>
			<Container>
				<MyHeader />
				<Counter {...counterProps} />
				<MyFooter />
			</Container>
		</div>
	);
}

export default App; // es Module system
