"use client";

import { useEffect, useState } from 'react';
import Layout from '@/app/component/layout';
import Head from 'next/head';

// 프로젝트 데이터를 객체 배열로 선언
const projectList = [
  { name: 'Collection', link: 'https://github.com/Rutancho/Collection.git' },
  { name: 'Blog', link: 'https://github.com/Rutancho/Blog-practice-Oauth-.git' },
  { name: 'First next.js', link: 'https://github.com/Rutancho/Web_pratice.git' }
];

export default function Project() {
  // projectNames의 타입을 객체 배열로 선언
  const [projectNames, setProjectNames] = useState<{ name: string; link: string }[] | null>(null); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/notion'); // API 호출
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await res.json(); // JSON 데이터 파싱
        setProjectNames(projectList); // projectList를 projectNames로 설정
      } catch (error) {
        ('Failed to fetch data');
      }
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Project: {projectNames ? projectNames.length : 'No Projects'}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {projectNames && projectNames.length > 0 ? (
            projectNames.map((project, index) => (
              <div key={index} className="bg-gray-400 p-4 rounded-lg shadow-md">
                <a
                  href={project.link}  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-lg text-black">
                  <h2>{project.name}</h2> 
                </a>
              </div>
            ))
          ) : (
            <p>No Projects Available</p>
          )}
        </div>

    </Layout>
  );
}
