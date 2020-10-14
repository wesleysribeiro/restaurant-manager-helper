import React from 'react';
import './Restaurants.css'

class Restaurants extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {
			restaurants: [],
		}

		this.data = {
			name: ''
		}
	}

	onNameChanged = (e) => {
		console.log(e.target.value)
		Object.assign(this.data, {name: e.target.value})
	}

	onSubmit = (e) => {
		e.preventDefault()
		const aux = this.state.restaurants;
		console.log(this.data)
		aux.push({name: this.data.name})

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
							<input type="text" required onChange={this.onNameChanged}/>
						</div>
						<br/>
						<div className="flex-row">
							<label> CEP: </label>
							<input type="number" placeholder="ex. 43819-388" required/>
						</div>
						<br/>
						<div className="flex-row">
							<label> Descrição: </label>
							<textarea placeholder="Insira a descrição do restaurante, temática aqui"></textarea>
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