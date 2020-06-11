import React from 'react';
import './Dish.css';

const emptyImg = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg';

class Dish extends React.Component {
	constructor(props) {
		super(props);

		if(props.srcImg)
		{
			this.srcImg = props.srcImg;
		}
		else
		{
			this.srcImg = emptyImg;
		}
	}
	render = () => {
		return <img className="dish-img" src={this.srcImg}/>
	}
}

export default Dish;