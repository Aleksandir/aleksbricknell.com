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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </main>

      <video width="320" height="240" controls>
        <source src="rickroll.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>

      <Footer />
    </div >
  )
}
