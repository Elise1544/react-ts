import {ToDoListItem} from './ToDoListItem/ToDoListItem';
import classes from './ToDoList.module.scss';
import {ToDo} from '../../models/todo-item';

export const ToDoList = (props: {todos: ToDo[]; updateToDo: Function; deleteToDo: Function}) => {
	const checkedList = () => {
		return props.todos
			.filter((item) => {
				return !item.isDone;
			})
			.map((item, index) => {
				return <ToDoListItem toDoItem={item} key={index} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo} />;
			});
	};

	const unCheckedList = () => {
		return props.todos
			.filter((item) => {
				return item.isDone;
			})
			.map((item, index) => {
				return <ToDoListItem toDoItem={item} key={index} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo} />;
			});
	};

	return (
		<div className={classes.container}>
			<ul className={`${classes.list} ${classes.failed}`}>{checkedList()}</ul>
			<ul className={`${classes.list} ${classes.completed}`}>{unCheckedList()}</ul>
		</div>
	);
};
