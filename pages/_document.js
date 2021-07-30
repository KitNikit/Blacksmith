import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='ru'>
				<Head>
					<link rel='shortcut icon' href='favicon.png' type='image/png'></link>
					<link
						href='https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap'
						rel='stylesheet'
					></link>
					<link
						href='https://fonts.googleapis.com/css2?family=Alice&display=swap'
						rel='stylesheet'
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
