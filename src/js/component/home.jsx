import React from "react";
import ListaTarea from "./listaTarea.jsx";
import Tarea from "./tarea.jsx";

class Home extends React.PureComponent {
	componentDidMount;
	render = () => {
		return (
			<div className="d-flex justify-content-center m-5">
				<h1>TODO LIST</h1>
				<Tarea />
				<ListaTarea />
			</div>
		);
	};
}

export default Home;
