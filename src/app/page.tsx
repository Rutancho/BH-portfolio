import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';
import Layout from '@/app/component/layout'
import Hero from '@/app/component/home/hero'
import Animation from '@/app/component/home/animation'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold underline">Portfolio</h1>
      </div>

      
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
          <Animation />
        </div>
        
      </section>
    </Layout>
  );
}
