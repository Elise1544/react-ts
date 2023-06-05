import {ToDo} from '../../../models/todo-item';
import { ToDoItemLi, ToDoItemConrol, ToDoItemConrols, ToDoItemText } from './ToDoListItem.styled';

import trashIcon from '../../../assets/images/trash.png'
import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'

export const ToDoListItem = (props: {toDoItem: ToDo; updateToDo: Function; deleteToDo: Function}) => {
	return (
		<ToDoItemLi>
			<ToDoItemText>
				{props.toDoItem.text}
				</ToDoItemText>
			<ToDoItemConrols>
				<ToDoItemConrol icon={trashIcon}
					onClick={() => props.deleteToDo(props.toDoItem)} />
				<ToDoItemConrol
					icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
					onClick={() => props.updateToDo(props.toDoItem)} />
			</ToDoItemConrols>
		</ToDoItemLi>
	);
};