import React, { useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

function App() {
	const [data, setData] = useState([]);

	const dataId = useRef(1);

	const onCreate = (author, content, emotion) => {
		const created_date = new Date().getTime();
		const newItem = {
			author,
			content,
			emotion,
			created_date,
			id: dataId.current,
		};
		dataId.current += 1;
		setData([newItem, ...data]);
	};

	const onRemove = (targetId) => {
		const newDiaryList = data.filter((target) => target.id !== targetId);
		setData(newDiaryList);
	};

	const onEdit = (targetId, newContent) => {
		setData(
			data.map((target) =>
				target.id === targetId
					? { ...target, content: newContent }
					: target
			)
		);
	};

	return (
		<div className="App">
			<DiaryEditor onCreate={onCreate} />
			<DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
		</div>
	);
}

export default App;
