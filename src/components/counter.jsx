import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

	const formatCount = () => {
		return count === 0 ? "empty" : count;
	};
	const getBadgeClasses = () => {
		let classes = "badge m-2 ";
		return (classes += count === 0 ? "bg-warning" : "bg-primary");
	};
	const handleIncrement = () => {
		setCount(prevState => prevState + 1);
	};
	const handleDecrement = () => {
		setCount(prevState => prevState - 1);
	};
	const handleTagChange = () => {
		setTags(["tag4", "tag5"]);
	};
	return (
		<>
			<ul>
				{tags.map(tag => (
					<li
						key={tag}
						className="btn btn-primary btn-sm m-2"
						onClick={handleTagChange}
					>
						{tag}
					</li>
				))}
			</ul>
			<span className={getBadgeClasses()}>{formatCount()}</span>
			<button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
				+
			</button>
			<button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
				-
			</button>
		</>
	);
};

export default Counter;
