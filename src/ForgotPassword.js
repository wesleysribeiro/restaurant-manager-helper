import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ForgotPassword = (props) => {
	const [show, setShow] = useState(false);

	const data = {
		email: ""
	}
	const handleClose = () => {
		console.log('Enviando: ')
		console.log(data.email)
		fetch('http://localhost:3003/forgotPassword', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(resp => {
			return resp.json()
		})
		.then(json => {
			console.log(json)
			alert(json.message)	
			setShow(false);
		})
		.catch(err => {
			setShow(false);
			return err
		});
		
	}

	const handleCancel = () => {
		setShow(false);
	}
	const handleShow = () => setShow(true);

	const onEmailChanged = (event) => {
		data.email = event.target.value
	}

	return (
		<>
			<a className="forgot-password" onClick={handleShow}> Esqueci minha senha </a>
			<Modal show={show} onHide={handleClose}>
			    <Modal.Header closeButton>
			      <Modal.Title>Esqueci minha senha</Modal.Title>
			    </Modal.Header>
		    	<Modal.Body>
		    		<label> Email: </label>
		    		<input type="text" onChange={onEmailChanged}/>
		    	</Modal.Body>
		    	<Modal.Footer>
	   		       <Button variant="primary" onClick={handleCancel}>
	        		    Cancelar
	          		</Button>
	          		<Button variant="primary" onClick={handleClose}>
	        		    Enviar email
	          		</Button>
	        	</Modal.Footer>
	      	</Modal>
      	</>	
	);
}

export default ForgotPassword;