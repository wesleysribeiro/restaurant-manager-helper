import React from 'react';
import RestAccess from './RestAccess.js';
import Dish from './Dish.js';

class Dishes extends React.Component {
	constructor(props) {
		super(props);

		this.form = {
			"name": "",
			"ingredients": "",
			"more-info": "",
			"gluten-in": false,
			"lac-in": false,
			"vegan-in": false,
			"price" : ""
		}

		this.state = {
			dishes: [
			{
				name: "Macarrao a bolonhesa",
				moreInfo: "Nenhuma descrição disponível",
				ingredients: "Macarrão, Cebola, Azeitona, Azeite de Oliva, Carne Moida, Cenoura e Molho de tomate",
				glutenFree: false,
				lacFree: false,
				vegan: false,
				img: "https://img.itdg.com.br/tdg/images/blog/uploads/2019/01/macarrao-a-bolonhesa.jpg",
				price: 19.90,
				rating: "9/10"
			},
			{
				img: "https://vemcomigo.fr/wp-content/uploads/2017/04/pratos-da-gastronomia-francesa.jpg"
			},
			{
				img: ""
			},
			{
				img: "https://static1.conquistesuavida.com.br/articles//0/54/60/@/17695-mel-em-pratos-salgados-como-saladas-e-r-article_block_media-2.jpg",
			},
			{
				img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbbZSRfENjZLFPcjgBsRLb5G5gXnaft1yOWlegAv5R2J5uWiM_&usqp=CAU",
			},
			{
				img: "" 
			},
			{
				img: "https://lh3.googleusercontent.com/proxy/9Qrfwk9oRHR5TidlmDd4FdmxRkzh3-yL-zjf4EY4sbzzFC3JemQ3Zvf_8uzy4J98Xp1y2mAJhcOIDL6oMvp048egAy5EJTi36bigfRXIGk5YzA0-b_0YJRC8WeCCrJ43J05s-7gFE4Vo", 
			},
			{
				img: ""
			},
			{
				img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkmYgXpTXEVOGuR2APJcImdnW4ec9pDzpj8dlirtrC73wCQ54W&usqp=CAU"
			}
			]
		}
	}

	componentDidMount = () => {
		// Fetch dishes from REST API
		// Fake data for testing
	}

	dishClicked = () => {
		console.log('Dish clicked');
	}

	checkEmptyInputFields = () => {
		return this.form["name"] !== "" && this.form["ingredients"] !== "" 
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
		this.state.dishes.push({
			name: this.form["name"],
			ingredients: this.form["ingredients"],
			moreInfo: this.form["more-info"],
			glutenFree: this.form["gluten-in"],
			lacFree: this.form["lac-in"],
			vegan: this.form["vegan-in"],
			price: this.form["price"],
			img:"",
			rating: "Não avaliado."
		});
		this.setState({dishes: this.state.dishes});
		console.log(this.state);
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
		let ret = [];

		this.state.dishes.forEach((itemInfo) => {
			ret.push(<Dish values={itemInfo}/>);
		})

		console.log('Render() called');
         return (	
         	<div className="dishes-container">
				<div className="content-page">
					<form className="dishes-form">
						<div className="main-flex">
							<label htmlFor="name">Nome</label>
							<input id="name" onChange={this.onChange} required/>
						</div>
						<div className="main-flex">
							<label htmlFor="ingredients">Ingredientes</label>
							<input id="ingredients" onChange={this.onChange} required/>
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
						<div className="submit-container">
							<input type="submit" className="submit-btn" onClick={this.onSubmitClicked}/>
						</div>
					</form>
				</div>
				<div className="registered-dishes">
					<h2 className="subtitle">Pratos cadastrados</h2>
					{ret}
				</div>
			</div>
			);
	}

}

export default Dishes;