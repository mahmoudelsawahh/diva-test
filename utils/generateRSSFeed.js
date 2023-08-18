import fs from 'fs';
import RSS from 'rss';


async function getArticleData() {
    const res = await fetch(`https://api.divanice.com/rest/tables.article/getArticlesPojo`,{
      cache : 'no-store',
      headers : {
        'Content-Type': 'application/json',
      },
    })
    return res.json()
  }

export default async function generateRssFeed() {
const site_url = 'https://divanice.com';

 const posts = await getArticleData();

 const feedOptions = {
 
 };

 const feed = new RSS(feedOptions);

  posts.data.map((item)=>{
    feed.item({
        title: item.name,
        description: item.name,
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
    })
  })

 fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));

}