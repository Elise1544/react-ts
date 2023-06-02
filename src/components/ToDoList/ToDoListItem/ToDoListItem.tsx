import {ToDo} from '../../../models/todo-item';
import classes from './ToDoListItem.module.scss';

export const ToDoListItem = (props: {toDoItem: ToDo; updateToDo: Function; deleteToDo: Function}) => {
	return (
		<li className={classes.wrapper}>
			<span>{props.toDoItem.text}</span>
			<div className={classes.buttons}>
				<button
					className={`${classes.button} ${classes.btnTrash}`}
					onClick={() => props.deleteToDo(props.toDoItem)}></button>
				<button
					className={`${classes.button} ${props.toDoItem.isDone ? classes.btnCheck : classes.btnUncheck}`}
					onClick={() => props.updateToDo(props.toDoItem)}></button>
			</div>
		</li>
	);
};
