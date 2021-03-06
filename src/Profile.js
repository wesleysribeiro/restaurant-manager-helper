import React from 'react';
import './Profile.css'

class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			readonly: true,
			nome: "",
			cpf: "",
			dataNasc: ""
		}

		this.sessionToken = props.token;

		this.form = {
			nome: "",
			cpf: "",
			dataNasc: "",
		}
	}

	componentDidMount = () => {
		const url = 'http://localhost:3003/profileData';

		console.log(this.sessionToken)

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({token: this.sessionToken})
		})
		.then((resp) => {
			return resp.json()
		})
		.then((json) => {
			const data = {nome: json.name, cpf: json.cpf, dataNasc: json.birthdate};
			Object.assign(this.form, data);
			this.setState(data)
		})
	}

	onEditClicked = (evt) => {
		this.setState({readonly : false})
	}

	onApply = (evt) => {
		const url = 'http://localhost:3003/profileData';

		console.log(this.sessionToken)

		fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({token: this.sessionToken, form: this.form})
		})
		.then((resp) => {
			return resp.json()
		})
		.then((json) => {
			alert(json.message)
			this.setState({readonly: true})
		})
	}

	onNameChanged = (evt) => {
		this.form.nome = evt.target.value;
		console.log(this.form);
	}

	onCPFChanged = (evt) => {
		this.form.cpf = evt.target.value;
		console.log(this.form);
	}

	onBirthdateChanged = (evt) => {
		this.form.dataNasc = evt.target.value;
		console.log(this.form);
	}

	render = () => {

		const readOnly = this.state.readonly;

		return (
			<div className="profile-content">
				<div className="line-inner">
					<label htmlFor="Nome">Nome</label>
					<input type="text" id="Nome" name="Name" disabled={readOnly} defaultValue={this.state.nome} onChange={this.onNameChanged}/>
				</div>
				<div className="line-inner">
					<label htmlFor="CPF">CPF</label>
					<input type="text" id="CPF" name="CPF" disabled={readOnly} defaultValue={this.state.cpf} onChange={this.onCPFChanged}/>
				</div>
				<div className="line-inner">
					<label htmlFor="birthday">Data de Nascimento: </label>
					<input type="date" id="birthday" name="birthday" disabled={readOnly} defaultValue={this.state.dataNasc} onChange={this.onBirthdateChanged}/>
				</div>
				<div className="buttons">
					<button onClick={this.onEditClicked}> Editar </button>
					<button onClick={this.onApply} disabled={readOnly}> Aplicar </button>
				</div>
			</div>
		)

	}
}

export default Profile;