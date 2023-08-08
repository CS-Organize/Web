import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
	return (
		<div className="DiaryList">
			<h2>일기 목록</h2>
			<h4>{diaryList.length}개의 일기가 있습니다.</h4>
			<div>
				{diaryList.map((diary) => ( // key값으로 idx를 사용하면 삭제, 추가 시 문제가 생길 수 있으므로 id값을 사용한다.
					<DiaryItem key={diary.id} {...diary} onRemove={onRemove} onEdit={onEdit} />
				))}
			</div>
		</div>
	);
};

export default DiaryList;
