import {useEffect, useState} from 'react';
import {ToDo} from '../models/todo-item';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

export const ViewListItem = () => {
	const toDoList = useSelector((state: RootState) => state.todoList.todos);

	const {id} = useParams();
	const navigate = useNavigate();
	const [todo, setTodo] = useState<ToDo>();

	useEffect(() => {
		const searchTodo = toDoList.find((todo) => String(todo.id) === id);

		if (searchTodo) {
			setTodo(searchTodo);
		} else {
			navigate('/404');
		}
	}, [toDoList, id, navigate]);

	return (
		<div className="container">
			<h1>{todo?.text}</h1>
		</div>
	);
};
