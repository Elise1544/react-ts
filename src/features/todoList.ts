import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ToDo} from '../models/todo-item';
import {toast, ToastOptions} from 'react-toastify';
import {v4 as uuid} from 'uuid';

const options: ToastOptions<{}> = {
	position: toast.POSITION.BOTTOM_RIGHT,
	theme: 'colored',
	autoClose: 1500,
};

export interface TodoState {
	todos: ToDo[];
}

const initialState: TodoState = {
	todos: [],
};

export const TodoSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		createAction: (state, action: PayloadAction<string>) => {
			const newTodo: ToDo = {
				id: uuid(),
				text: action.payload,
				isDone: false,
			};
			state.todos = [...state.todos, newTodo];

			toast.success('Задача создана', options);
		},
		updateAction: (state, action: PayloadAction<ToDo>) => {
			const newTodos = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.isDone = !todo.isDone;
				}
				return todo;
			});
			state.todos = newTodos;

			toast.info('Задача изменена', options);
		},
		deleteAction: (state, action: PayloadAction<ToDo>) => {
			const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
			state.todos = newTodos;

			toast.warn('Задача удалена', options);
		},
	},
});

export const {createAction, updateAction, deleteAction} = TodoSlice.actions;

export default TodoSlice.reducer;
