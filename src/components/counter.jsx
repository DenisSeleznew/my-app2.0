import React, { useState } from "react";

const Counter = () => {
	const count = -1;
	const formatCount = () => {
		return count <= 0 ? "empty" : count;
	};

	const getBadgeClasses = () => {
		let classes = "badge m-2 ";
		return (classes += count <= 0 ? "bg-warning" : "bg-primary");
	};

	return (
		<>
			<span className={getBadgeClasses()}>{formatCount()}</span>
			<button className="btn btn-primary btn-sm m-2">+</button>
		</>
	);
};

export default Counter;
