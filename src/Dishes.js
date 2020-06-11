import React from 'react';
import RestAccess from './RestAccess.js';

class Dishes extends React.Component {
	constructor(props) {
		super(props);

		this.form = {
			"name": "",
			"ingrediente": "",
			"more-info": "",
			"gluten-in": false,
			"lac-in": false,
			"vegan-in": false,
			"price" : 0.0
		}
	}

	onSubmitClicked = (event) => {
		event.preventDefault();
		// Post this.form to the REST API
		console.log('Posting: ', this.form);
	}


	onChange = (event) => {
		const element = event.target;
		let value = '';

		if(element.type === "checkbox")
		{
			value = element.checked;
		}
		else
		{
			value = element.value;
		}

		this.form[event.target.id] = value;
	}

	render = () => {
         return (	
				<div className="content-page">
					<form>
						<div className="main-flex">
							<label htmlFor="name">Nome</label>
							<input id="name" onChange={this.onChange} required/>
						</div>
						<div className="main-flex">
							<label htmlFor="ingrediente">Ingredientes</label>
							<input id="ingrediente" onChange={this.onChange} required/>
						</div>
						<div className="main-flex">
							<label htmlFor="more-info">Info Adicional</label>
							<input id="more-info" onChange={this.onChange} required/>
						</div>
						<div className="checkbox-flex">
							<label htmlFor="gluten-in">Gluten-Free</label>
							<input className="checkbox" onChange={this.onChange} id="gluten-in" type="checkbox"/>
						</div>
						<div className="checkbox-flex">
							<label htmlFor="lac-in">Lac-Free</label>
							<input className="checkbox" onChange={this.onChange} id="lac-in" type="checkbox"/>
						</div>
						<div className="checkbox-flex">
							<label htmlFor="vegan-in">Vegan</label>
							<input className="checkbox" onChange={this.onChange} id="vegan-in" type="checkbox"/>
						</div>
						<div className="main-flex">
							<label htmlFor="price" required>Valor</label>
							<input id="price" onChange={this.onChange} type="number" required/>
						</div>
						<div className="submit-btn">
							<input type="submit" onClick={this.onSubmitClicked}/>
						</div>
					</form>
				</div>
			);
	}

}

export default Dishes;