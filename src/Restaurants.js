import React from 'react';
import './Restaurants.css'

class Restaurants extends React.Component  {
	constructor(props) {
		super(props)

		this.state = {
			restaurants: [],
		}

		this.data = {
			name: '',
			cep: '',
			description: ''
		}
	}

	onNameChanged = (e) => {
		console.log(e.target.value)
		Object.assign(this.data, {name: e.target.value})
	}

	onCepChanged = (e) => {
		Object.assign(this.data, {cep: e.target.value})
	}

	onDescriptionChanged = (e) => {
		Object.assign(this.data, {description: e.target.value})
	}

	onSubmit = (e) => {
		e.preventDefault()
		const aux = this.state.restaurants;
		console.log(this.data)
		aux.push({name: this.data.name})

		const url = "http://localhost:3003/restaurant"

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.data)
		})
		.then(resp => resp.json())
		.then(json => {
			console.log(json)
			alert(json.message);
		})
		.catch(err => {
			console.log('Um erro ocorreu: ')
			console.log(err)
		})

		this.setState({restaurants: aux})
	}

	render = () => {
		let content = []

		content = this.state.restaurants.map((rest, index) => {
			return <ul>• {rest.name}</ul>
		})

		if(content.length === 0) {
			content.push(<p> Nenhum restaurante encontrado </p>)
		}

		return (
			<form className="restaurants-container" onSubmit={this.onSubmit}>
				<div className="my-restaurants">
					<ul>
						{content}
					</ul>
				</div>
				<div className="register-restaurants">
					<div className="input-form">
						<div className="flex-row">
							<label> Nome do restaurante: </label>
							<input type="text" required onChange={this.onNameChanged} defaultValue={this.data.name}/>
						</div>
						<br/>
						<div className="flex-row">
							<label> CEP: </label>
							<input type="number" placeholder="ex. 43819-388" required defaultValue={this.data.cep} onChange={this.onCepChanged}/>
						</div>
						<br/>
						<div className="flex-row">
							<label> Descrição: </label>
							<textarea placeholder="Insira a descrição do restaurante, temática aqui" defaultValue={this.data.description} onChange={this.onDescriptionChanged}></textarea>
						</div>
						<br/>
					</div>
					<input type="submit" className="submit-btn" value="Registrar restaurante"/>
				</div>
			</form>
		)
	}
}

export default Restaurants;