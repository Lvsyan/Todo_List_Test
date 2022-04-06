import React from "react";
import PropTypes from "prop-types";

const Tarea = (props) => {
	return <div>{props.tasks}</div>;
};

Tarea.propTypes = {
	tasks: PropTypes.string,
};

export default Tarea;
