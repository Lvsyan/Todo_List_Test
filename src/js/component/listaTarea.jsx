import React from "react";
import PropTypes from "prop-types";
import Tarea from "./tarea.jsx";

const ListaTarea = (props) => {
	//2 props: elemento y delete
	//prop de tipo funcion: eliminar la lista. coge index que coge lista (hace slice de elemento numero 3)
	return (
		<div>
			{props.list
				? props.list.map((task, index) => (
						<Tarea key={index} tasks={task}></Tarea>
				  ))
				: null}
		</div>
	);
};

ListaTarea.propTypes = {
	list: PropTypes.array,
};

export default ListaTarea;
