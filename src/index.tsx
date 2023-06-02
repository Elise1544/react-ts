import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {store} from './store';
import {Provider} from 'react-redux';

import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import {router} from './router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
		{/* <BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<HomePage todos={todos} />}></Route>
				<Route path="/list/:id" element={<ItemDescription todos={todos} />}></Route>

				<Route path="/todo" element={<ToDoListPage />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter> */}
	</React.StrictMode>
);
