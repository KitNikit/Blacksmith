import Link from 'next/link';
import Image from 'react-bootstrap/Image';

const Footer = () => {
	return (
		<footer>
			<Link href='tel:+89100000000'>
				<a className='tel'>
					<Image src='tel.png' />
					+7 910 000 00 00
				</a>
			</Link>
		</footer>
	);
};
export default Footer;
