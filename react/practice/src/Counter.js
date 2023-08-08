import React, { useState } from "react";
import OddEvenRes from "./OddEvenRes";

const Counter = (props) => {
	const [count, setCount] = useState(props.initialValue); // [상태변수, 상태변수를 변경하는 함수]
	// const [count, setCount] = useState(0);

	// console.log(`count 호출 : ${count}`); // 값이 바뀔 때마다 rerendering

	console.log(props);

	const onIncrement = () => {
		setCount(count + props.a);
	};

	const onDecrement = () => {
		setCount(count - props.a);
	};

	return (
		<div>
			<OddEvenRes count={count} />
			<h2>{count}</h2>
			<button onClick={onIncrement}>+</button>
			<button onClick={onDecrement}>-</button>
		</div>
	);
};

Counter.defaultProps = {
	a: 1,
	initialValue: 0,
};

export default Counter;
