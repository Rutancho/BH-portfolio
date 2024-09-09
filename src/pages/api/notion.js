// export default async function handler(req, res) {
//   const notionToken = process.env.NOTION_TOKEN;
//   const databaseId = process.env.NOTION_DATABASE_ID;

//   console.log("Notion Token:", notionToken);
//   console.log("Database ID:", databaseId);

//   // 만약 환경 변수가 제대로 불러와지지 않는다면 문제를 찾을 수 있음
//   if (!notionToken || !databaseId) {
//     return res.status(500).json({ error: "Missing Notion token or database ID" });
//   }

//   // Notion API 요청 예시
//   const options = {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${notionToken}`,
//       "Content-Type": "application/json",
//       "Notion-Version": "2022-02-22"
//     },
//     body: JSON.stringify({ page_size: 100 })
//   };

//   try {
//     const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, options);
//     const data = await response.json();

//     // 각 프로젝트의 이름을 추출
//     const projectNames = data.results.map((aProject) => (
//       aProject.properties.Name.title[0].plain_text
//     ));

//     // 프로젝트 이름 배열과 데이터를 응답으로 반환
//     res.status(200).json({ projectNames, data });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch data from Notion API" });
//   }
// }

export default async function handler(req, res) {
  const notionToken = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!notionToken || !databaseId) {
    return res.status(500).json({ error: "Missing Notion token or database ID" });
  }

  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${notionToken}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-02-22",
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, options);
    const data = await response.json();

    const projectNames = data.results.map((aProject) => {
      if (aProject.properties.Name && aProject.properties.Name.title && aProject.properties.Name.title.length > 0) {
        return aProject.properties.Name.title[0].plain_text;
      }
      return "Untitled"; // Name이 없을 경우 대비
    });
    
    
    

    // 데이터와 프로젝트 이름을 반환
    res.status(200).json({ projectNames, data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Notion API" });
  }
}

