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
						<Image src='/logo.png' />
						Главная страница
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Link href='/info' passHref>
							<Nav.Link>Информация</Nav.Link>
						</Link>

						<NavDropdown title='Галерея' id='collasible-nav-dropdown'>
							<Link href='/perila' passHref>
								<NavDropdown.Item>Перила</NavDropdown.Item>
							</Link>
							<Link href='/vorota' passHref>
								<NavDropdown.Item>Ворота</NavDropdown.Item>
							</Link>
							<Link href='/lavki' passHref>
								<NavDropdown.Item>Лавки</NavDropdown.Item>
							</Link>
							<Link href='/mosti' passHref>
								<NavDropdown.Item>Мосты</NavDropdown.Item>
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
