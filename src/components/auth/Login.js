import React, { Fragment, useState, useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autenticacion/authContext'



const Login = (props) => {

	const alertaContext = useContext(AlertaContext)
	const { alerta, mostrarAlerta } = alertaContext

	const authContext = useContext(AuthContext)
	const { mensaje, autenticado, iniciarSesion } = authContext

	useEffect(() => {
		if(autenticado){
			props.history.push(process.env.REACT_APP_PAGINA_INICIO)
		}
	
		if(mensaje) {
			mostrarAlerta(mensaje.msg, mensaje.categoria)
		}
	}, [mensaje, autenticado, props.history])

    const [usuario, guardarUsuario] = useState({
        username: '',
        password: ''
    })

    const {username, password} = usuario

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })    
    }

    const onSubmit = e => {
		e.preventDefault()
		
		if( username.trim() === ''  ||
			password.trim() === ''){
				mostrarAlerta('Todos los campos son obligatorios', 'danger')
				return
		}

		iniciarSesion({username, password})
    }

	return (
		<div className="form-usuario">
			<Fragment>
				<div className="contenedor-form sombra-dark">
					<h1 className="headline4">Iniciar Sesión</h1>

					<form id="form" onSubmit={onSubmit}>
					{alerta ? <div className={`alert alert-${alerta.categoria}`}>{alerta.msg}</div> : null}

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
