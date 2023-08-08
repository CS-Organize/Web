import { useState } from "react";

const DiaryEditor = () => {
	// const [author, setAuthor] = useState("");
	// const [content, setContent] = useState("");
	const [state, setState] = useState({
		author: "",
		content: "",
		emotion: 3,
	});

	const handleChangeState = (e) => {
		setState({
			...state, // 이전 state를 그대로 가져오고
			[e.target.name]: e.target.value, // 변경된 값을 덮어씌운다.
		});
	};

	const handleClickSave = () => {
		console.log(state);
		alert("저장 성공 !");
	};

	return (
		<div className="DiaryEditor">
			<h2>오늘의 일기</h2>
			<div>
				<input
					name="author"
					value={state.author}
					onChange={handleChangeState}
				/>
				<div>
					<textarea
						name="content"
						value={state.content}
						onChange={handleChangeState}
					/>
				</div>
			</div>
			<div>
				<span>오늘의 기분 : </span>
				<select
					name="emotion"
					value={state.emotion}
					onChange={handleChangeState}
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
				</select>
			</div>
			<div>
				<button
					onClick={handleClickSave}
				>
					일기 저장하기
				</button>
			</div>
		</div>
	);
};

export default DiaryEditor;
