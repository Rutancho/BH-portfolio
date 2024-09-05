// "use client";

// import { useEffect, useState } from 'react';
// import Layout from '@/app/component/layout';
// import Head from 'next/head';
// import projectNames from '@/pages/api/notion';
// import data from '@/pages/api/notion';

// export default function Project() {
//   const [projectNames, setProjectNames] = useState<string[] | null>(null); // 프로젝트 이름 배열로 저장
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch('/api/notion'); // API 호출
//         if (!res.ok) {
//           throw new Error('Failed to fetch');
//         }
//         const result = await res.json(); // JSON 데이터 파싱
//         setProjectNames(result.projectNames); // projectNames 배열 저장
//       } catch (error) {
//         setError('Failed to fetch data');
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <Layout>
//       <Head>
//         <title>Portfolio</title>
//         <meta name="description" content="portfolio" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//           <h1>Project: {projectNames ? projectNames.length : 'No Projects'}</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </>
//       )}
//     </Layout>
//   );
// }


"use client";

import { useEffect, useState } from 'react';
import Layout from '@/app/component/layout';
import Head from 'next/head';
import projectNames from '@/pages/api/notion';

export default function Project() {
  const [data, setData] = useState(null);  // 타입 지정 없이 사용
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/notion');
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </Layout>
  );
}