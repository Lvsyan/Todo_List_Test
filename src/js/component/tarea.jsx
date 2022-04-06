import React, { useState } from "react";

const Tarea = () => {
	const [tarea, setTarea] = useState("");

	const [list, setList] = useState([]);

	const addTask = () => {
		const copyList = list;
		copyList.push(task);
		console.log(copyList);
		setList(copyList);
	};

	return (
		<form>
			<div className="todo-list">
				<div className="input">
					<input
						type="text"
						className="text"
						value={tarea}
						onChange={(e) => {
							setTarea(e.target.value);
						}}
					/>
					<button
						className="button red"
						disabled={tarea ? "" : "disabled"}
						onClick={() => addTask()}
					/>
				</div>
				{list.map((list, index) => (
					<div key={index}>{list}</div>
				))}
			</div>
		</form>
	);
};

export default Tarea;
