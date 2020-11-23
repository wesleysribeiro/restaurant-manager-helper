import React from 'react';
import Dishes from './Dishes.js';
import Home from './Home.js';
import Restaurants from './Restaurants.js';
import Profile from './Profile.js';
import MENU_ITEM_CODES from './constants.js';
import './Content.css';

const {DISHES, HOME, RESTAURANTS, PROFILE} = MENU_ITEM_CODES;

class Content extends React.Component {
	constructor(props) {
		super(props);
		
		this.onLoginCallback = props.onLogin;
		this.state = props;
		this.sessionToken = ""
		console.log('Content.constructor() called with ', this.state);
	}

	componentWillReceiveProps(nextProps)
	{
		this.setState(nextProps);
	}

	onLogin = (loggedIn, sessionToken) => {
		this.sessionToken = sessionToken;
		this.onLoginCallback(loggedIn, sessionToken)
	}

	render = () => {
		console.log('Content.render() called with this.state = ', this.state);

		const currentPage = this.state.value;

		switch(currentPage) {
			case DISHES:
				return <Dishes/>
			case HOME:
				return <Home onLogin={this.onLogin}/>
			case RESTAURANTS: 
				return <Restaurants token={this.sessionToken}/>
			case PROFILE:
				return <Profile token={this.sessionToken}/>
			default:
				return <div className="maintenence-container">
						 <div> Clicked item = {this.state.value} </div>
						 <img src="https://cdn.shopify.com/s/files/1/2425/3665/products/104-022_800x.jpg?v=1571921877"/>
				   		</div>
		}



	}
}

export default Content;