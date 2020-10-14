import React from 'react';
import Dishes from './Dishes.js';
import Home from './Home.js';
import MENU_ITEM_CODES from './constants.js';
import './Content.css';

const {DISHES, HOME} = MENU_ITEM_CODES;

class Content extends React.Component {
	constructor(props) {
		super(props);
		
		this.onLoginCallback = props.onLogin;
		this.state = props;
		console.log('Content.constructor() called with ', this.state);
	}

	componentWillReceiveProps(nextProps)
	{
		this.setState(nextProps);
	}

	onLogin = (loggedIn) => {
		this.onLoginCallback(loggedIn)
	}

	render = () => {
		console.log('Content.render() called with this.state = ', this.state);

		if(this.state.value === DISHES)
		{
			return <Dishes/>
		}
		if(this.state.value === HOME)
		{
			return <Home onLogin={this.onLogin}/>
		}

		return <div className="maintenence-container">
				<div> Clicked item = {this.state.value} </div>
				<img src="https://cdn.shopify.com/s/files/1/2425/3665/products/104-022_800x.jpg?v=1571921877"/>
			   </div>
	}
}

export default Content;