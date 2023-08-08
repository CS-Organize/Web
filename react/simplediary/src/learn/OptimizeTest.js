import React, { useState, useEffect, useMemo } from "react";

const CounterA = React.memo(({ count }) => {
	useEffect(() => {
		console.log(`count changed: ${count}`);
	}, [count]);
	return <div>{count}</div>;
});

// const CounterB = React.memo(({ obj }) => { // 객체는 주소를 비교하는 얕은 비교를 하기 때문에 불필요한 렌더링이 발생할 수 있다.
// 	useEffect(() => {
// 		console.log(`obj changed: ${obj.count}`);
// 	}, [obj]);
// 	return <div>{obj.count}</div>;
// });

const CounterB = ({ obj }) => { // 객체는 주소를 비교하는 얕은 비교를 하기 때문에 불필요한 렌더링이 발생할 수 있다.
	useEffect(() => {
		console.log(`obj changed: ${obj.count}`);
	}, [obj]);
	return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
	return (prevProps.obj.count === nextProps.obj.count);
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
	const [count, setCount] = useState(1);
	const [obj, setObj] = useState({
		count: 1,
	});

	return (
		<div style={{ padding: 50 }}>
			<div>
				<h2>Counter A</h2>
				<CounterA count={count} />
				<button onClick={() => setCount(count)}>A button</button>
			</div>
			<div>
				<h2>Counter B</h2>
				<MemoizedCounterB obj={obj} />
				<button onClick={() => ({ count: obj.count })}>
					B button
				</button>
			</div>
		</div>
	);
};

export default OptimizeTest;
