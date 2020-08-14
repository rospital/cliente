import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    const [user, guardarUser] = useState({
        username: '',
        password: ''
    })

    const {username, password} = user

    const onChange = e => {
        guardarUser({
            ...user,
            [e.target.name]: e.target.value
        })    
    }

    const onSubmit = e => {
        e.preventDefault()
    }

	return (
		<div className="form-usuario">
			<Fragment>
				<div className="contenedor-form sombra-dark">
					<h1 className="headline4">Iniciar Sesión</h1>

					<form id="form" onSubmit={onSubmit}>
						<div className="campo-form">
							<label htmlFor="username">Nombre de usuario</label>
							<input
								type="text"
								id="username"
								name="username"
								placeholder="Nombre de usuario"
								onChange={onChange}
								value={username}
							/>
						</div>
						<div className="campo-form">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Tu password"
								onChange={onChange}
								value={password}
							/>
						</div>

						<div className="campo-form">
							<input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
						</div>
					</form>
					<Link to={'/nueva-cuenta'} className="enlace">
						Obtener Cuenta
					</Link>
				</div>
			</Fragment>
		</div>
	);
};

export default Login;
