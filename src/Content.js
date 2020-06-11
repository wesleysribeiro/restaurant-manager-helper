import React from 'react';
import MENU_ITEM_CODES from './constants.js';
import './Content.css';

const {DISHES} = MENU_ITEM_CODES;

class Content extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = props;
		console.log('Content.constructor() called with ', this.state);
	}

	componentWillReceiveProps(nextProps)
	{
		this.setState(nextProps);
	}

	render = () => {
		console.log('Content.render() called with this.state = ', this.state);

		if(this.state.value  == DISHES)
		{
			return (
				<div className="content-page">
					<form>
						<div>
							<label for="name">Nome</label>
							<input id="name"/>
						</div>
						<div>
							<label for="ingrediente">Ingredientes</label>
							<input id="ingrediente"/>
						</div>
						<div>
							<label for="more-info">Info Adicional</label>
							<input id="more-info"/>
						</div>
						<div>
							<label for="gluten-in">Gluten-Free</label>
							<input id="gluten-in" type="checkbox"/>
						</div>
						<div>
							<label for="lac-in">Lac-Free</label>
							<input id="lac-in" type="checkbox"/>
						</div>
						<div>
							<label for="vegan-in">Vegan</label>
							<input id="vegan-in" type="checkbox"/>
						</div>
						<div>
							<label for="more-info">Anexar fotos</label>
							<input id="more-info" type="file"/>
						</div>
						<div>
							<label for="more-info">Valor</label>
							<input id="more-info" type="number"/>
						</div>
						<div>
							<button>Submit</button>
						</div>
					</form>
				</div>
			);
		}

		return <div> Clicked item = {this.state.value} </div>
	}
}

export default Content;