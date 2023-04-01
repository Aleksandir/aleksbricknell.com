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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </main>

      <Footer />
    </div >
  )
}
