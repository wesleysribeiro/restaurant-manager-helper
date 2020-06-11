import React from 'react';
import Dishes from './Dishes.js';
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

		if(this.state.value === DISHES)
		{
			return <Dishes/>
		}

		return <div className="maintenence-container">
				<div> Clicked item = {this.state.value} </div>
				<img src="https://lh3.googleusercontent.com/proxy/O8TVZbXaffo5xBPVZZ7WHP0fWj9NxCRc97iXEAPzIWiDle9h0_iFpd1-6TmnkNPx9GZVqsWmoYNWHP3zUc4sS0E92a271VoFowlLIk5svinccBAktPf-VlponGjpTwC-FhMTo6rVzLCMAopxn0BIomO7YULPJ2kugA7d6Ue4wNEu2x-Hk9jxZ_SQHVTG9pGmA_QwRU97kYfM6R4T"/>
			   </div>
	}
}

export default Content;