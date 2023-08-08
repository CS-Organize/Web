import React, { useEffect, useState } from "react";

const UnmountTest = () => {
	useEffect(() => {
		console.log("마운트 될 때만 실행됩니다.");

		return () => {
			console.log("언마운트 될 때만 실행됩니다.");
		}
	}, []);

	return <div>Unmount Testing Componenet</div>;
};

const Lifecycle = () => {
	const [isVisible, setIsVisible] = useState(true);
	const toggle = () => setIsVisible(!isVisible);

	const [count, setCount] = useState(0);
	const [text, setText] = useState("");

	useEffect(() => {
		console.log("마운트 될 때만 실행됩니다.");
	}, []);

	useEffect(() => {
		console.log("마운트와 업데이트 될 때 실행됩니다.");
	});

	useEffect(() => {
		console.log(`count가 ${count}로 바뀌었습니다.`);
		if (count > 5) {
			alert("count가 5를 넘었습니다 따라서 1로 초기화합니다.");
			setCount(0);
		}
	}, [count]);

	useEffect(() => {
		console.log(`text가 ${text}로 바뀌었습니다.`);
	}, [text]);

	return (
		<div style={{ padding: "20px" }}>
			<div>
				{count}
				<button onClick={() => setCount(count + 1)}>+</button>
			</div>
			<div>
				<input value={text} onChange={(e) => setText(e.target.value)} />
			</div>
			<div>
				<button onClick={toggle}>ON/OFF</button>
				{isVisible && <UnmountTest />}
			</div>
		</div>
	);
};

export default Lifecycle;
