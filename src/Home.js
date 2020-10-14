import React from 'react';
import './Home.css'
import ForgotPassword from './ForgotPassword'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.onLogin = props.onLogin;
		this.registerData = {
			name: "",
			CPF: -1,
			birthdate: "00/00/0000",
			email: "",
			password: ""
		}
		this.loginData = {
			email: "",
			password: ""
		}
	}

	onNameChanged = (event) => {
		Object.assign(this.registerData, {name: event.target.value})
	}

	onCPFChanged = (event) => {
		Object.assign(this.registerData, {CPF: event.target.value})	
	}

	onBirthdateChanged = (event) => {
		Object.assign(this.registerData, {birthdate: event.target.value})
	}

	onEmailChanged = (event) => {
		Object.assign(this.registerData, {email: event.target.value})
	}

	onPasswordChanged = (event) => {
		Object.assign(this.registerData, {password: event.target.value})
	}	

	onSigningUp = (event) => {
		event.preventDefault()
		console.log(this.registerData)

		// const url = "https://localhost:3000/signUp"
		// fetch(url, {
		// 	method: 'POST',
		// 	body: JSON.stringify(this.registerData)
		// })
	}

	onSigningIn = (event) => {
		event.preventDefault();
		console.log(this.loginData)

		// const url = "https://localhost:3000/signIn"
		// fetch(url, {
		// 	method: 'POST',
		//	headers: {
		//		'Content-Type': 'application/json'
		//	}
		// 	body: JSON.stringify(this.loginData)
		// })
		let loggedIn = true;
		if(!loggedIn) {
			alert('Email ou senha incorretos')
		}
		else {
			alert('Autenticado com sucesso!')
		}
		this.onLogin(loggedIn);
	}

	onLoginEmailChanged = (event) => {
		Object.assign(this.loginData, {email: event.target.value})
	}

	onLoginPasswordChanged = (event) => {
		Object.assign(this.loginData, {password: event.target.value})
	}

	render = () => {
		return (
			<div className="signInOn">
				<div className="signup">
					<form onSubmit={this.onSigningUp}>
						<h2 className="h2"> Cadastrar usuário </h2>
						<div className="flex-row">
							<label> Nome: </label>
							<input type="text" onChange={this.onNameChanged} required/>
						</div>
						<div className="flex-row">
							<label> CPF: </label>
							<input type="text" onChange={this.onCPFChanged} required/>
						</div>
						<div className="flex-row">
							<label> Data de Nascimento: </label>
							<input type="date" onChange={this.onBirthdateChanged} required/>
						</div>
						<div className="flex-row">
							<label> Email: </label>
							<input type="text" onChange={this.onEmailChanged} required/>
						</div>
						<div className="flex-row">
							<label> Senha: </label>
							<input type="password" onChange={this.onPasswordChanged} required/>
						</div>
						<br/>
						<div className="submit-container-enter">
							<button className="submit-btn">Enviar</button>
						</div>
					</form>
				</div>
				<div className="signin">
					<form onSubmit={this.onSigningIn}>
						<h2 className="h2"> Entrar </h2>
						<div className="flex-row">
							<label> Email:   </label>
							<input onChange={this.onLoginEmailChanged} type="text" required/>
						</div>
						<label> Senha: </label>
						<input onChange={this.onLoginPasswordChanged} type="password" required/>
						<br/>
						<div className="submit-container-enter">
							<ForgotPassword/>
							<button className="submit-btn">Logar</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Home;