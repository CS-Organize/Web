import React, {
	useCallback,
	useRef,
	useState,
	useEffect,
	useMemo,
} from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// https://jsonplaceholder.typicode.com/comments

function App() {
	const [data, setData] = useState([]);

	const dataId = useRef(1);

	const getData = async () => {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/comments"
		).then((res) => res.json());

		const initData = response.slice(0, 20).map((item) => ({
			author: item.name,
			content: item.body,
			emotion: Math.floor(Math.random() * 5) + 1,
			created_date: new Date().getTime(),
			id: dataId.current++,
		}));

		setData(initData);
	};

	useEffect(() => {
		getData();
	}, []);

	const onCreate = useCallback((author, content, emotion) => {
		const created_date = new Date().getTime();
		const newItem = {
			author,
			content,
			emotion,
			created_date,
			id: dataId.current,
		};
		dataId.current += 1;
		setData((data) => [newItem, ...data]); // 함수형 업데이트를 사용하여 최신 state를 참조한다.
	}, []);

	const onRemove = useCallback((targetId) => {
		setData(data => data.filter((target) => target.id !== targetId));
	}, []);

	const onEdit = useCallback((targetId, newContent) => {
		setData(
			data.map((target) =>
				target.id === targetId
					? { ...target, content: newContent }
					: target
			)
		);
	}, []);

	const getDiaryAnalysis = useMemo(
		// useMemo를 사용하여 불필요한 렌더링을 방지한다.
		() => {
			const goodCount = data.filter((item) => 3 <= item.emotion).length;
			const badCount = data.filter((item) => item.emotion < 3).length;
			const goodRatio = (goodCount / data.length) * 100;
			return { goodCount, badCount, goodRatio };
		},
		[data.length]
	);

	const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

	return (
		<div className="App">
			<DiaryEditor onCreate={onCreate} />
			<div>전체 일기 : {data.length}개</div>
			<div>기분 좋은 일기 : {goodCount}개</div>
			<div>기분 나쁜 일기 : {badCount}개</div>
			<div>기분 좋은 일기 비율 : {goodRatio}%</div>
			<DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
		</div>
	);
}

export default App;
