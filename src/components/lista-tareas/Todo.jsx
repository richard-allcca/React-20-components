import { useEffect, useRef, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { TodoList } from "./TodoList";
import './Todo.css';

// LINK -
// https://www.youtube.com/watch?v=EMk6nom1aS4&t=1838s&ab_channel=CarlosAzaustre-AprendeJavaScript

const KEY = "todoApp.todos";

export function Todo() {
	const [todos, setTodos] = useState([
		{ id: 1, task: "Tarea ", completed: false },
	]);
	const todoTaskRef = useRef(); // referencia para obtener el valor del input

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(KEY));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(KEY, JSON.stringify(todos));
	}, [todos]);

	const toggleTodo = (id) => {
		const newTodos = [...todos];
		const todo = newTodos.find((todo) => todo.id === id);
		todo.completed = !todo.completed; // TODO - Usa referencia en memoria (modificar)
		setTodos(newTodos);
	};

	const handleTodoAdd = () => {
		const task = todoTaskRef.current.value;
		if (task === "") return;

		setTodos((prevTodos) => {
			// toma el estado anterior en el callback y con un spread le agregamos la nueva tarea
			return [...prevTodos, { id: uuidV4(), task, completed: false }];
		});

		todoTaskRef.current.value = null;
	};

	const handleClearAll = () => {
		const newTodos = todos.filter((todo) => !todo.completed);
		setTodos(newTodos);
	};

	return (
		<div className="todo-container">
			<input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
			<div className="ctn-buttons">
				<button onClick={handleTodoAdd}>Añadir ➕ </button>
				<button onClick={handleClearAll}>Eliminar ❌</button>
			</div>
			<span>
				Te quedan {todos.filter((todo) => !todo.completed).length} por terminar
			</span>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
		</div>
	);
}
