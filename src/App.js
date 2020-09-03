import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Pagina from './components/layout/Pagina';

import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';

function App() {

	console.log(process.env.REACT_APP_BACKEND_URL)

	return (
		<AuthState>
			<AlertaState>
				<Router>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/nueva-cuenta" component={NuevaCuenta} />
						<Route exact path="/empresa" component={Pagina} />
					</Switch>
				</Router>
			</AlertaState>
		</AuthState>
	);
}

export default App;
