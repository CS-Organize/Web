import React, { useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {
	const authorInput = useRef(); // DOM을 직접 선택해야 할 때 사용
	const contentInput = useRef();

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
		if (state.author.length < 1) {
			authorInput.current.focus();
			return;
		}
		if (state.content.length < 1) {
			contentInput.current.focus();
			return;
		}
		onCreate(state.author, state.content, state.emotion);
		alert("저장 성공 !");
		setState({
			author: "",
			content: "",
			emotion: 3,
		});
	};

	return (
		<div className="DiaryEditor">
			<h2>오늘의 일기</h2>
			<div>
				<input
					ref={authorInput}
					name="author"
					value={state.author}
					onChange={handleChangeState}
				/>
				<div>
					<textarea
						ref={contentInput}
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
				<button onClick={handleClickSave}>일기 저장하기</button>
			</div>
		</div>
	);
};

export default DiaryEditor;
