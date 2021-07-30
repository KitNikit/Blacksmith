import Navigation from '../components/Navigation';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';

const Info = () => {
	return (
		<>
			<Navigation />
			<Card className='bg-dark text-white'>
				<Card.Img src='/info.png' alt='Card image' />
				<Card.ImgOverlay>
					<Card.Title>Вы можете найти нас по адресу:</Card.Title>
					<Card.Text>
						Область: <br />
						Город: <br />
						Улица: <br />
						Дом: <br />
						Телефон: <br />
					</Card.Text>
					<Card.Text>Мастерская художественной ковки «КЕНТАВР» 2021</Card.Text>
				</Card.ImgOverlay>
			</Card>
			<Footer />
		</>
	);
};
export default Info;
