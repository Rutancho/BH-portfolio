import Layout from '@/app/component/layout';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image'; // next/image 모듈을 import

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:flex-row md:justify-between items-center">
        {/* 텍스트 부분 */}
        <div className="lg:w-1/2 md:w-1/2 w-full pr-4">
          <h1 className="title-font sm:text-7xl text-4xl mb-4 font-medium text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed text-lg dark:text-gray-300">
            Hi, I’m Brian (Jaehyuk) Heo, a former chef who has found a new passion in the world of programming. After over five years of mastering the fast-paced kitchen environment, I decided to switch gears and pursue a career in coding. Currently, I’m working towards an Advanced Diploma in Computer Programming at Seneca College, where I’ve developed strong skills in Next.js, C++, HTML, JavaScript, and SQL.
            <br /><br />
            I enjoy creating web applications and tackling interesting coding challenges. Recently, I’ve worked on a personal coding notebook and a blog-style web page where users can log in with GitHub and create topics. I’m driven by the desire to continually improve and learn new technologies, all while maintaining a collaborative and adaptable mindset.
            <br /><br />
            If you’re looking for someone who’s as skilled at coding as they are at working in dynamic environments, I’d love to connect!
          </p>
        </div>

        {/* 이미지 부분 */}
        <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
          <Image
            src="/image/me.jpg"  // 실제 이미지 경로로 수정
            alt="Brian's photo"
            width={300}   // 이미지의 너비
            height={300}  // 이미지의 높이
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </Layout>
  );
}
