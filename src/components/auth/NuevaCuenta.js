import React, { Fragment, useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autenticacion/authContext'

const NuevaCuenta = (props) => {
	const alertaContext = useContext(AlertaContext)
	const { alerta, mostrarAlerta } = alertaContext

	const authContext = useContext(AuthContext)
	const { mensaje, autenticado, registrarUsuario } = authContext

	// En el caso de que el usuario se haya autenticado o registrdo o sea un registro duplicado

	useEffect(() => {
		if(autenticado){
			props.history.push(process.env.REACT_APP_PAGINA_INICIO)
		}

		if(mensaje) {
			mostrarAlerta(mensaje.msg, mensaje.categoria)
		}
	}, [mensaje, autenticado, props.history])

	const [ usuario, guardarUsuario ] = useState({
		nombre: '',
		username: '',
		email: '',
		password: '',
		confirmar: ''
	});

	const { nombre, username, email, password, confirmar } = usuario;

	const onChange = e => {
		guardarUsuario({
			...usuario,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();

		if( nombre.trim() === '' ||
			username.trim() === ''  ||
			email.trim() === ''  ||
			password.trim() === ''  ||
			confirmar.trim() === ''){
				mostrarAlerta('Todos los campos son obligatorios', 'danger')
				return
		}
		if(password.length < 6) {
			mostrarAlerta('El password debe ser de al menos 6 caracteres', 'danger')
			return
		}

		if( password !== confirmar) {
			mostrarAlerta('Los passwords no son iguales', 'danger')
			return
		}

		registrarUsuario({
			nombre,
			username,
			email,
			password
		})
	}

	return (
		<div className="form-usuario">
			<Fragment>
				<div className="contenedor-form sombra-dark">
					<h1 className="headline4">Crear nueva cuenta</h1>

					<form id="form" onSubmit={onSubmit}>
						{alerta ? <div className={`alert alert-${alerta.categoria}`}>{alerta.msg}</div> : null}
						<div className="campo-form">
							<label htmlFor="nombre">Nombre</label>
							<input
								type="text"
								id="nombre"
								name="nombre"
								placeholder="Tu Nombre"
								onChange={onChange}
								value={nombre}
							/>
						</div>
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
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Tu Email"
								onChange={onChange}
								value={email}
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
							<label htmlFor="confirmar">Confirmar password</label>
							<input
								type="password"
								id="confirmar"
								name="confirmar"
								placeholder="Tu password"
								onChange={onChange}
								value={confirmar}
							/>
						</div>

						<div className="campo-form">
							<input type="submit" className="btn btn-primario btn-block" value="Registrar" />
						</div>
					</form>
					<Link to={'/'} className="enlace">
						Volver a iniciar sesion
					</Link>
				</div>
			</Fragment>
		</div>
	);
};

export default NuevaCuenta;
