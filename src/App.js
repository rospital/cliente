import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Pagina from './components/layout/Pagina';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/nueva-cuenta" component={NuevaCuenta} />
					<Route exact path="/empresa" component={Pagina} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
