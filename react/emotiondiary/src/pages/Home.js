import React, { useContext, useState } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Home = () => {
	const diaryList = useContext(DiaryStateContext);
	console.log(diaryList);

	const [curDate, setCurDate] = useState(new Date());
	const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

	const increaseMonth = () => {
		setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1));
	};

	const decreaseMonth = () => {
		setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1));
	};

	return (
		<div>
			<MyHeader
				headText={headText}
				leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
				rightChild={<MyButton text={">"} onClick={increaseMonth} />}
			/>
		</div>
	);
};

export default Home;
