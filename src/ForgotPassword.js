import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ForgotPassword = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<a className="forgot-password" onClick={handleShow}> Esqueci minha senha </a>
			<Modal show={show} onHide={handleClose}>
			    <Modal.Header closeButton>
			      <Modal.Title>Esqueci minha senha</Modal.Title>
			    </Modal.Header>
		    	<Modal.Body>
		    		<label> Email: </label>
		    		<input type="text"/>
		    	</Modal.Body>
		    	<Modal.Footer>
	   		       <Button variant="primary" onClick={handleClose}>
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