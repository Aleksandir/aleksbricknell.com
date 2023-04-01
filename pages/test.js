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

            <iframe width="560" height="315" src="https://www.youtube.com/embed/WQneO40JPho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


            <Footer />
        </div>
    )
}
