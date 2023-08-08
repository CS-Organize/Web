import React, { useState, useRef } from "react";

const DiaryItem = ({
	author,
	content,
	created_date,
	emotion,
	id,
	onRemove,
	onEdit,
}) => {
	const [isEdit, setIsEdit] = useState(false);
	const toggleIsEdit = () => setIsEdit(!isEdit);

	const [newContent, setNewContent] = useState(content);
	const newContentInput = useRef();

	const handleRemove = () => {
		if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`))
			onRemove(id);
	};

	const handleEdit = () => {
		if (newContent.length < 1) {
			newContentInput.current.focus();
			return;
		}
		if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
			onEdit(id, newContent);
			setIsEdit(false);
		}
	};

	const handleQuitEdit = () => {
		setNewContent(content);
		setIsEdit(false);
	};

	return (
		<div className="DiaryItem">
			<div className="info">
				<span>
					작성자 : {author} | 감정 점수 : {emotion}
				</span>
				<br />
				<span className="date">
					{new Date(created_date).toLocaleDateString()}
				</span>
			</div>
			<div className="content">
				{isEdit ? (
					<>
						<textarea
							ref={newContentInput}
							value={newContent}
							onChange={(e) => setNewContent(e.target.value)}
						/>
					</>
				) : (
					content
				)}
			</div>

			{isEdit ? (
				<>
					<button onClick={handleEdit}>수정 완료</button>
					<button onClick={handleQuitEdit}>수정 취소</button>
				</>
			) : (
				<>
					<button onClick={toggleIsEdit}>수정</button>
					<button onClick={handleRemove}>삭제</button>
				</>
			)}
		</div>
	);
};

export default DiaryItem;
