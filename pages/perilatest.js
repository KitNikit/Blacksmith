import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

const Perila = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Navigation />
			<Container>
				<Row className='galery'>
					<Col>
						<Image
							onClick={handleShow}
							className='galeryImg'
							src='/perila1.jpg'
							rounded
						/>
					</Col>
					<Col>
						<Image className='galeryImg' src='/perila3.jpg' rounded />
					</Col>
				</Row>
				<Row className='galery'>
					<Col>
						<Image className='galeryImg' src='/perila2.jpg' rounded />
					</Col>
					<Col>
						<Image className='galeryImg' src='/perila4.jpg' rounded />
					</Col>
				</Row>
			</Container>
			<Footer />
			<Modal size='xl' show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Zoom</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image className='zoom' src='/perila1.jpg' />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Perila;
