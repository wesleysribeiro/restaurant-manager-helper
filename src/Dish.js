import React, {useState} from 'react';
import './Dish.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const emptyImg = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg';

const Dish = (props) => {
	console.log('Rendering ')
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const values = props.values;

	let srcImg = emptyImg;

	if(values.img)
	{
		srcImg = values.img;
	}
	return (
		<>
			<img className="dish-img" src={srcImg} onClick={handleShow}/>
			<Modal show={show} onHide={handleClose}>
		    <Modal.Header closeButton>
		      <Modal.Title>{values['name']}</Modal.Title>
		    </Modal.Header>
		    <Modal.Body>
		    	<img className="dish-img" src={values['img']}/>
		    	<br/>
		    	Descrição: {values['moreInfo']}
		    	<br/>
		    	Ingredientes: {values['ingredients']}
		    	<br/>
		    	Preço: {'R$' + values['price']}
		    	<br/>
		    	Avaliação: {values['rating']}
		    </Modal.Body>
		    <Modal.Footer>
	          <Button variant="primary" onClick={handleClose}>
	            Ok
	          </Button>
	        </Modal.Footer>
	      </Modal>
		</>
	);
}

export default Dish;