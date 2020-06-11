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

		return <div> Clicked item = {this.state.value} </div>
	}
}

export default Content;