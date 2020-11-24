import React from 'react'
import './UserReviews.css'

class UserReviews extends React.Component {
	constructor(props) {
		super(props)
		console.log('Estou no UserReviews')

		this.state = {
			restaurants: [],
			currentRestIndex: 0,
			dish: '',
			note: '',
			color: 0,
			taste: 0,
			smell: 0,
			texture: 0,
			temperature: 0,
			general: 0
		}

		this.enableSubmit = true;

	}

	onNotesChanged = (e) => {
		this.setState({note: e.target.value})
	}

	onColorChanged = (e) => {
		console.log(e.target.value)
		this.setState({color: parseFloat(e.target.value)})
	}

	onTasteChanged = (e) => {
		this.setState({taste: parseFloat(e.target.value)})
	}

	onSmellChanged = (e) => {
		this.setState({smell: parseFloat(e.target.value)})
	}

	onTextureChanged = (e) => {
		this.setState({texture: parseFloat(e.target.value)})
	}

	onTemperatureChanged = (e) => {
		this.setState({temperature: parseFloat(e.target.value)})
	}

	onGeneralChanged = (e) => {
		this.setState({general: parseFloat(e.target.value)})
	}

	onSubmit = (e) => {
		e.preventDefault();
		if(this.enableSubmit)
		{
			console.log(this.state)
			const url = "http://localhost:3003/userReview"
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					restaurant: this.state.restaurants[this.state.currentRestIndex],
					dish: this.state.dish,
					note: this.state.note,
					color: this.state.color,
					taste: this.state.taste,
					smell: this.state.smell,
					texture: this.state.texture,
					temperature: this.state.temperature,
					general: this.state.general
				})
			})
			.then(resp => resp.json())
			.then(json => {
				if(json.success)
					alert('Avaliação enviada com sucesso!')
				this.setState({
					note: '',
					color: 0,
					taste: 0,
					smell: 0,
					texture: 0,
					temperature: 0,
					general: 0
				});
			})
			.catch(err => {
				console.log('Um erro ocorreu: ')
				console.log(err)
			})
		}
		else
		{
			alert('Nenhum prato selecionado!')
		}
	}

	onRestaurantChanged = (e) => {
		const restaurant = e.target.value;

		for(let i = 0; i < this.state.restaurants.length; i++)
		{
			console.log('On index: ' + i)
			const currentRest = this.state.restaurants[i].name;
			console.log(currentRest)
			console.log(restaurant)
			if(restaurant === currentRest)
			{
				console.log('Troquei de restaurante para: ' + restaurant)
				console.log('Index: ' + i)
				this.setState({currentRestIndex: i, dish: ''});
				return;
			}
		}
	}

	componentDidMount = () => {
		const url = "http://localhost:3003/allRestaurants"

		fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(resp => resp.json())
		.then(json => {
			console.log(json)

			this.setState({restaurants: json})
		})
		.catch(err => {
			console.log('Um erro ocorreu: ')
			console.log(err)
		})
	} 

	onDishChanged = (e) => {
		this.setState({dish: e.target.value})
	}

	render = () => {
		const restaurantOptions = this.state.restaurants.map(restaurant => {
			return <option>{restaurant.name}</option>
		})

		let dishesOptions = <option disabled={true}>Não há pratos registrados</option>

		this.enableSubmit = false;

		const restaurants = this.state.restaurants;
		const currentIndex = this.state.currentRestIndex;

		if(restaurants.length && restaurants[currentIndex].dishes) {
			this.enableSubmit = true;
			if(!this.state.dish)
				this.state.dish = restaurants[currentIndex].dishes[0];
			dishesOptions = restaurants[currentIndex].dishes.map(dish => {
				return <option>{dish}</option>
			})
		}

		return (
			<div className="review-container">
				<form className="review-container-center" onSubmit={this.onSubmit}>
					<h3 className="review-title"> Selecione o restaurante </h3>
					<select onChange={this.onRestaurantChanged}>
						{restaurantOptions}
					</select>
					<h3 className="review-title"> Selecione o prato </h3>
					<select onChange={this.onDishChanged}>
						{dishesOptions}
					</select>
					<h3 className="review-title"> Observações </h3>
					<textarea onChange={this.onNotesChanged} value={this.state.note}></textarea>
					<h3 className="review-title"> Notas </h3>
					<div className="review-ratings">
						<div className="attribute-rating">
							<label> Cor </label>
							<input type="number" onChange={this.onColorChanged} required value={this.state.color}></input>
						</div>
						<div className="attribute-rating">
							<label> Sabor </label>
							<input type="number" onChange={this.onTasteChanged} required value={this.state.taste}></input>
						</div>
						<div className="attribute-rating">
							<label> Aroma </label>
							<input type="number" onChange={this.onSmellChanged} required value={this.state.smell}></input>
						</div>
						<div className="attribute-rating">
							<label> Textura </label>
							<input type="number" onChange={this.onTextureChanged} value={this.state.texture}></input>
						</div>
						<div className="attribute-rating">
							<label> Temperatura </label>
							<input type="number" onChange={this.onTemperatureChanged} value={this.state.temperature}></input>
						</div>
						<div className="attribute-rating">
							<label>Geral</label>
							<input type="number" onChange={this.onGeneralChanged} value={this.state.general}></input>
						</div>
						<button className="review-submit-btn" onClick={this.onSendBtn}> Enviar </button>
					</div>
				</form>
			</div>
		);
	}
}

export default UserReviews;