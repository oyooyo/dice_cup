import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {
	HashRouter,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import MainPage from './MainPage.mjs';
import SelectPage from './SelectPage.mjs';
import {
	useStateReducer,
} from './state.mjs';

const App = (() => {
	const [state, dispatch] = useStateReducer();
	return (
		<HashRouter>
			<div className="App">
				<Routes>
					<Route path="main" element={<MainPage state={state} dispatch={dispatch} />} />
					<Route path="select" element={<SelectPage state={state} dispatch={dispatch} />} />
					<Route index element={<Navigate to="select" replace={true} />} />
				</Routes>
			</div>
		</HashRouter>
	);
});

export default App;
