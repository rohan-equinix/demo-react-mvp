import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <script src="./analytics"/> Need to add scripts in this file eg. fullstory / googe tag manager*/} 
      </body>
    </Html>
  )
}
