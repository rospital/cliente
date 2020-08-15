import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
	const [ usuario, guardarUsuario ] = useState({
		nombre: '',
		username: '',
		apodo: '',
		email: '',
		password: '',
		confirmar: ''
	});

	const { nombre, username, apodo, email, password, confirmar } = user;

	const onChange = (e) => {
		guardarUsuario({
			...user,
			[e.target.name]: e.target.value
		});
	};


	const onSubmit = (e) => {
		e.preventDefault()

		
	}

	return (
		<div className="form-usuario">
			<Fragment>
				<div className="contenedor-form sombra-dark">
					<h1 className="headline4">Crear nueva cuenta</h1>

					<form id="form" onSubmit={onSubmit}>
						
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
							<label htmlFor="apodo">Apodo</label>
							<input
								type="text"
								id="apodo"
								name="apodo"
								placeholder="Como te llaman?"
								onChange={onChange}
								value={apodo}
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
