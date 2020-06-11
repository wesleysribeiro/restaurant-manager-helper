import React from 'react';
import RestAccess from './RestAccess.js';
import Dish from './Dish.js';

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
			"price" : ""
		}

		this.dishes = [<Dish srcImg={"https://img.itdg.com.br/tdg/images/blog/uploads/2019/01/macarrao-a-bolonhesa.jpg"}/>,
		 			   <Dish srcImg={"https://vemcomigo.fr/wp-content/uploads/2017/04/pratos-da-gastronomia-francesa.jpg"}/>,
		 			   <Dish/>,
		 			   <Dish srcImg={"https://static1.conquistesuavida.com.br/articles//0/54/60/@/17695-mel-em-pratos-salgados-como-saladas-e-r-article_block_media-2.jpg"}/>, 
		 			   <Dish/>,
		 			   <Dish srcImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbbZSRfENjZLFPcjgBsRLb5G5gXnaft1yOWlegAv5R2J5uWiM_&usqp=CAU"}/>,
		 			   <Dish/>,
		 			   <Dish/>,
		 			   <Dish srcImg={"https://lh3.googleusercontent.com/proxy/9Qrfwk9oRHR5TidlmDd4FdmxRkzh3-yL-zjf4EY4sbzzFC3JemQ3Zvf_8uzy4J98Xp1y2mAJhcOIDL6oMvp048egAy5EJTi36bigfRXIGk5YzA0-b_0YJRC8WeCCrJ43J05s-7gFE4Vo"}/>,
		 			   <Dish/>,
		 			   <Dish srcImg={"data:image/jpeg;base64,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"}/>,
		 			   <Dish srcImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkmYgXpTXEVOGuR2APJcImdnW4ec9pDzpj8dlirtrC73wCQ54W&usqp=CAU"}/>
		 			   ]
	}

	componentDidMount = () => {
		// Fetch dishes from REST API

		// Fake data for testing
	}

	checkEmptyInputFields = () => {
		return this.form["name"] !== "" && this.form["ingrediente"] !== "" 
		&& this.form["more-info"] !== "" && this.form["price"] !== ""
	}

	onSubmitClicked = (event) => {
		if(!this.checkEmptyInputFields())
		{
			return
		}
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
         	<div className="dishes-container">
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
							<label htmlFor="price" required>Preço (em R$)</label>
							<input id="price" onChange={this.onChange} type="number" required/>
						</div>
						<div className="main-flex">
							<label htmlFor="img" required>Anexar foto</label>
							<input id="img" type="file"/>
						</div>
						<div className="submit-btn">
							<input type="submit" onClick={this.onSubmitClicked}/>
						</div>
					</form>
				</div>
				<div className="registered-dishes">
					<h2 className="subtitle">Pratos cadastrados</h2>
					{this.dishes}
				</div>
			</div>
			);
	}

}

export default Dishes;