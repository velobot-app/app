import Document, { Html, Head, Main, NextScript } from "next/document"
import { getCssText, lightTheme, darkTheme } from "styles/theme"

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />

          <link
            rel="preload"
            href="/fonts/Urbanist-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/urbanist-v5-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/urbanist-v5-latin-600.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />

          <style dangerouslySetInnerHTML={{ __html: getCssText() }}/>
          <style dangerouslySetInnerHTML={{
            __html: `
              html, body {
                margin: 0;
                transition-property: background-color;
                transition-duration: 75ms;
                font-family: 'Urbanist', sans-serif;
              }
              /* urbanist-regular - latin */
              @font-face {
                font-family: 'Urbanist';
                font-style: normal;
                font-weight: 400;
                src: url('../fonts/urbanist-v5-latin-regular.eot'); /* IE9 Compat Modes */
                src: local(''),
                    url('../fonts/urbanist-v5-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
                    url('../fonts/urbanist-v5-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
                    url('../fonts/urbanist-v5-latin-regular.woff') format('woff'), /* Modern Browsers */
                    url('../fonts/urbanist-v5-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
                    url('../fonts/urbanist-v5-latin-regular.svg#Urbanist') format('svg'); /* Legacy iOS */
              }
              /* urbanist-600 - latin */
              @font-face {
                font-family: 'Urbanist';
                font-style: normal;
                font-weight: 600;
                src: url('../fonts/urbanist-v5-latin-600.eot'); /* IE9 Compat Modes */
                src: local(''),
                    url('../fonts/urbanist-v5-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
                    url('../fonts/urbanist-v5-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
                    url('../fonts/urbanist-v5-latin-600.woff') format('woff'), /* Modern Browsers */
                    url('../fonts/urbanist-v5-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
                    url('../fonts/urbanist-v5-latin-600.svg#Urbanist') format('svg'); /* Legacy iOS */
              }
            `}}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
