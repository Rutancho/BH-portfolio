import Head from 'next/head';
import Image from 'next/image';
// import style from '@/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex justify-center">
        <h1>Portfolio</h1>
      </div>

      <div className = "font-lg">
        Resume name
      </div>
    </div>
  );
}
