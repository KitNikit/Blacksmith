import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' sticky='top'>
			<Container>
				<Link href='/'>
					<Navbar.Brand className='pointer'>
						<Image src='/4.png' />
						Главная страница
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Link href='/test' passHref>
							<Nav.Link>Информация</Nav.Link>
						</Link>

						<NavDropdown title='Галерея' id='collasible-nav-dropdown'>
							<Link href='/' passHref>
								<NavDropdown.Item>Ковка</NavDropdown.Item>
							</Link>
							<Link href='/' passHref>
								<NavDropdown.Item href='#action/3.2'>Дерево</NavDropdown.Item>
							</Link>
							<Link href='/' passHref>
								<NavDropdown.Item href='#action/3.3'>Металл</NavDropdown.Item>
							</Link>
							<NavDropdown.Divider />
							<Link href='/' passHref>
								<NavDropdown.Item href='#action/3.4'>Другое</NavDropdown.Item>
							</Link>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href='tel:+89100000000'>+7 910 000 00 00</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default Navigation;
