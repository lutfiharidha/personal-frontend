import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="lutfi.ico" type="image/x-icon" />
        <title>Lutfi Haridha</title>
      </Head>
      <div className={"bg-gray-100"}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
