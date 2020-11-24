import React from 'react'
import './UserReviews.css'

class UserReviews extends React.Component {
	constructor(props) {
		super(props)
		console.log('Estou no UserReviews')

		this.state = {
			restaurants: [],
			dishes: []
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

			const restaurants = json.map(restaurant => {
				return <option> {restaurant.name} </option>
			})

			const dishes = []

			json.forEach(restaurant => {
				console.log(restaurant)
				if(restaurant.pratos)
				{
					console.log('Got here')
					restaurant.pratos.forEach(dish => {
						console.log(dish)
						dishes.push(<option> {dish} </option>)
					})
				}
			})

			console.log(dishes)

			this.setState({restaurants, dishes})
		})
		.catch(err => {
			console.log('Um erro ocorreu: ')
			console.log(err)
		})

		this.setState({restaurants: []})
	} 

	render = () => {

		return (
			<div className="review-container">
				<div className="review-container-center">
					<h3 className="review-title"> Selecione o restaurante </h3>
					<select>
						{this.state.restaurants}
					</select>
					<h3 className="review-title"> Selecione o prato </h3>
					<select>
						{this.state.dishes}
					</select>
					<h3 className="review-title"> Observações </h3>
					<textarea> </textarea>
					<h3 className="review-title"> Notas </h3>
					<div className="review-ratings">
						<div className="attribute-rating">
							<label> Cor </label>
							<input type="number"></input>
						</div>
						<div className="attribute-rating">
							<label> Sabor </label>
							<input type="number"></input>
						</div>
						<div className="attribute-rating">
							<label> Aroma </label>
							<input type="number"></input>
						</div>
						<div className="attribute-rating">
							<label> Textura </label>
							<input type="number"></input>
						</div>
						<div className="attribute-rating">
							<label> Temperatura </label>
							<input type="number"></input>
						</div>
						<div className="attribute-rating">
							<label> Apresentacao </label>
							<input type="number"></input>
						</div>
						<div className="attribute-rating">
							<label>Geral</label>
							<input type="number"></input>
						</div>
						<button className="review-submit-btn"> Enviar </button>
					</div>
				</div>
			</div>
		);
	}
}

export default UserReviews;