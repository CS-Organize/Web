import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
	console.log("App component is rendered");

	return (
		<> {/* <> 빈 태그로 감싸는 것과 같은 역할 */}
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
