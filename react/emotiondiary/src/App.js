import React, { useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

// COMPONENTS

const reducer = (state, action) => {
	let newState = [];
	switch (action.type) {
		case "INIT": {
			return action.data;
		}
		case "CREATE": {
			const newItem = {
				...action.data,
			};
			newState = [action.data, ...state];
			break;
		}
		case "REMOVE": {
			newState = state.filter((item) => item.id !== action.targetId);
			break;
		}
		case "EDIT": {
			newState = state.map((item) =>
				item.id === action.data.id ? { ...action.data } : item
			);
			break;
		}
		default:
			return state;
	}
	return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
	{
		id: 0,
		emotion: 1,
		content: "오늘은 새해 첫날이다.",
		date: 1691566903866
	},
	{
		id: 1,
		emotion: 1,
		content: "오늘은 새해 2날이다.",
		date: 1691566903867
	},
	{
		id: 2,
		emotion: 1,
		content: "오늘은 새해 3날이다.",
		date: 1691566903868
	},
	{
		id: 3,
		emotion: 1,
		content: "오늘은 새해 4날이다.",
		date: 1691566903869
	},
];

function App() {
	const [data, dispatch] = useReducer(reducer, dummyData);

	const dataId = useRef(0);

	// CREATE
	const onCreate = (date, content, emotion) => {
		dispatch({
			type: "CREATE",
			data: {
				id: dataId.current,
				date: new Date(date).getTime(),
				content,
				emotion,
			},
		});
		dataId.current += 1;
	};

	// REMOVE
	const onRemove = (id) => {
		dispatch({
			type: "REMOVE",
			targetId: id,
		});
	};

	// EDIT
	const onEdit = (targetId, date, content, emotion) => {
		dispatch({
			type: "EDIT",
			data: {
				id: targetId,
				date: new Date(date).getTime(),
				content,
				emotion,
			},
		});
	};

	return (
		<DiaryStateContext.Provider>
			<DiaryDispatchContext.Provider
				value={{
					onCreate,
					onRemove,
					onEdit,
				}}
			>
				<BrowserRouter>
					<div className="App">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/new" element={<New />} />
							<Route path="/edit" element={<Edit />} />
							<Route path="/diary" element={<Diary />} />
							<Route path="/diary/:id" element={<Diary />} />
						</Routes>
					</div>
				</BrowserRouter>
			</DiaryDispatchContext.Provider>
		</DiaryStateContext.Provider>
	);
}

export default App;
