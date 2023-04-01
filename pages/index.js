import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Aleks Bricknell</title>
        <link rel="icon" href="/sackboy.ico" />
      </Head>

      <main>
        <video width="560" height="315" controls autoplay>
          <source src="rickroll.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </main>


      <Footer />
    </div >
  )
}
