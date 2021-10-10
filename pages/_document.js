import Document, { Head, Main, NextScript, Html } from 'next/document';

export default class Documenty extends Document {
  render() {
    return (
      <Html lang='it'>  
        <Head>
          <meta charSet="utf-8" />
		      <base href="/" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;600;900&display=swap" rel="stylesheet" />
         
					<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
					<link rel="icon" href="/favicon.ico" type="image/x-icon" />
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}