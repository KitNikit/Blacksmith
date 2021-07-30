import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

const Lavki = () => {
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [show4, setShow4] = useState(false);

	return (
		<>
			<Navigation />
			<Container>
				<Row className='galery'>
					<Col className='galery-col'>
						<Image
							onClick={() => setShow1(true)}
							className='galeryImg'
							src='/lavki1.jpg'
							rounded
						/>
					</Col>
					<Col>
						<Image
							onClick={() => setShow2(true)}
							className='galeryImg'
							src='/lavki2.jpg'
							rounded
						/>
					</Col>
				</Row>
				<Row className='galery'>
					<Col className='galery-col'>
						<Image
							onClick={() => setShow3(true)}
							className='galeryImg'
							src='/lavki3.jpg'
							rounded
						/>
					</Col>
					<Col>
						<Image
							onClick={() => setShow4(true)}
							className='galeryImg'
							src='/lavki4.jpg'
							rounded
						/>
					</Col>
				</Row>
			</Container>
			<Footer />
			<Modal size='xl' show={show1} onHide={() => setShow1(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Zoom</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image className='zoom' src='/lavki1.jpg' />
				</Modal.Body>
			</Modal>
			<Modal size='xl' show={show2} onHide={() => setShow2(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Zoom</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image className='zoom' src='/lavki2.jpg' />
				</Modal.Body>
			</Modal>
			<Modal size='xl' show={show3} onHide={() => setShow3(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Zoom</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image className='zoom' src='/lavki3.jpg' />
				</Modal.Body>
			</Modal>
			<Modal size='xl' show={show4} onHide={() => setShow4(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Zoom</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image className='zoom' src='/lavki4.jpg' />
				</Modal.Body>
			</Modal>
		</>
	);
};
export default Lavki;
