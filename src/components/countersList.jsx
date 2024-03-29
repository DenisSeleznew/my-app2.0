import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
	const initialState = [
		{ id: 0, value: 0, name: "Ненужная вещь" },
		{ id: 1, value: 4, name: "Ложка" },
		{ id: 2, value: 0, name: "Вилка" },
		{ id: 3, value: 0, name: "Тарелка" },
		{ id: 4, value: 0, name: "Набор минималиста" },
	];

	const [counters, setCounters] = useState(initialState);

	const handleDelete = id => {
		const newCounters = counters.filter(c => c.id !== id);
		setCounters(newCounters);
	};

	const handleIncrement = count => {
		const newIncrement = (count.value += 1);
		setCounters(
			counters.map(obj => {
				if (count === count.id) {
					return {
						...obj,
						value: newIncrement,
					};
				}
				return obj;
			})
		);
	};
	const handleDecrement = count => {
		const newIncrement = (count.value -= 1);

		setCounters(
			counters.map(obj => {
				if (count === count.id) {
					return {
						...obj,
						value: newIncrement,
					};
				}
				return obj;
			})
		);
	};

	const handleReset = () => {
		setCounters(initialState);
	};

	return (
		<>
			{counters.map(count => (
				<Counter
					key={count.id}
					onDelete={handleDelete}
					onIncrement={() => handleIncrement(count)}
					onDecrement={() => handleDecrement(count)}
					{...count}
				/>
			))}
			<button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
				Сброс
			</button>
		</>
	);
};

export default CountersList;
