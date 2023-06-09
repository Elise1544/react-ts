import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './features/todoList';
import themeReducer from './features/themeList';
import formReducer from './features/formInput';

import {loadFromLocalStorage, saveToLocalStorage} from './helpers/storage';

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		themeList: themeReducer,
		formInput: formReducer,
	},
	preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => {
	saveToLocalStorage(store.getState());
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
