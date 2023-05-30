import {ToDoList} from '../components/ToDoList/ToDoList';
import {Form} from '../components/Form/Form';
import {Header} from '../components/Header/Header';

export const ToDoListPage = () => {
	return (
		<>
			<Header />

			<Form />

			<ToDoList />
		</>
	);
};
