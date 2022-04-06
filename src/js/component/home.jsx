import React, { useState } from "react";
import ListaTarea from "./listaTarea.jsx";

const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	const addTask = (e) => {
		e.preventDefault();
		setList([...list, task]);
		setTask("");
	};

	return (
		<form>
			<div className="todo-list">
				<h1>TODO TAREAS</h1>
				<div className="input">
					<input
						type="text"
						className="text"
						value={task}
						onChange={(e) => {
							setTask(e.target.value);
						}}
					/>
					<button
						className="button red"
						disabled={task ? "" : "disabled"}
						onClick={(e) => addTask(e)}
					/>
				</div>
			</div>
			<ListaTarea list={list} />
		</form>
	);
};

export default Home;
