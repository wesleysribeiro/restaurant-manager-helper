import React from 'react';
import './Restaurants.css'

const Restaurants = (props) => {
	return (
		<div className="restaurants-container">
			<div className="my-restaurants">
				<p> Nenhum restaurante encontrado. </p>
			</div>
			<div className="register-restaurants">
				<div className="input-form">
					<div className="flex-row">
						<label> Nome do restaurante: </label>
						<input type="text"/>
					</div>
					<br/>
					<div className="flex-row">
						<label> CEP: </label>
						<input type="number" placeholder="ex. 43819-388"/>
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
		</div>
	)
}

export default Restaurants;