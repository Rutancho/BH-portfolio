"use client";

import { useEffect, useState } from 'react';
import Layout from '@/app/component/layout';
import Head from 'next/head';
import Image from 'next/image'; 

// Project 타입 정의 (name, link, imgSrc 포함)
type Project = {
  name: string;
  link: string;
  imgSrc: string;
};

// 프로젝트 데이터를 객체 배열로 선언
const initialProjects: Project[] = [
  { 
    name: 'Collection', 
    link: 'https://github.com/Rutancho/Collection.git',
    imgSrc: '/image/Collection.jpg'  // 이미지 경로 추가
  },
  { 
    name: 'Blog', 
    link: 'https://github.com/Rutancho/Blog-practice-Oauth-.git',
    imgSrc: ''  // 이미지 경로 추가
  },
  { 
    name: 'First next.js', 
    link: 'https://github.com/Rutancho/Blog-practice-Oauth-.git',
    imgSrc: '/image/first.jpg'  // 이미지 경로 추가
  },

  {
    name: 'Order-Management-System', 
    link: 'https://github.com/Rutancho/Order-Management-System.git',
    imgSrc: '/image/order.jpg'  // 이미지 경로 추가
  },

  {
    name: 'Aid Management System', 
    link: 'https://github.com/Rutancho/Inventory-Aid-Management.git', 
    imgSrc: '/image/management.jpg'  // 이미지 경로 추가
  }
];

export default function Project() {
  // projectNames의 타입을 { name, link, imgSrc }가 포함된 객체 배열로 선언
  const [projectNames, setProjectNames] = useState<Project[]>(initialProjects); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/notion'); // API 호출
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await res.json(); // JSON 데이터 파싱
      } catch (error) {
        setError('Failed to fetch data');
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
                className="font-bold text-lg text-black"
              >
                <h2>{project.name}</h2>

                {/* 프로젝트 이미지 추가 */}
                <Image
                  src={project.imgSrc}
                  alt={`${project.name} image`}
                  width={500}
                  height={300}
                  layout="responsive"  // 반응형 이미지 크기
                  className="rounded-md"
                />
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
