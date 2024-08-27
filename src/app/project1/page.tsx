import Layout from '@/app/component/layout'
import React from 'react';
import Head from 'next/head';

export default function Project() {
    return(
        <Layout>
             <Head>
        <title>Portfolio</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>Project-1</h1>      
        </Layout>      
    )
}