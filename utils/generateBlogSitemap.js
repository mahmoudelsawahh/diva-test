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

export default async function generateBlogSitemap() {
const site_url = 'https://divanice.com';

 const posts = await getArticleData();

 const feedOptions = {
  
 };

 const feed = new RSS(feedOptions);

  posts.data.map((item)=>{
    feed.item({
      loc : `https://divanice.com/blog/${item.name}`,
      lastmod :new Date(),
      changefreq : 'daily',
      priority : 0.7,
      title: item.name,
      description: item.name,
      feed_url: 'https://divanice.com/sitemap-blog',
      site_url: 'https://divanice.com',
      managingEditor: 'شركة برمجيات دلتاوي',
      webMaster: 'شركة برمجيات دلتاوي',
      copyright: '2023 شركة برمجيات دلتاوي',
      language: 'ar',
      pubDate: new Date(),
      ttl: '60',
      custom_elements: [
        {'itunes:subtitle': item.title},
        {'itunes:author': 'شركة برمجيات دلتاوي'},
        {'itunes:owner': [
          {'itunes:name': 'https://divanice.com'},
        ]},
        {'itunes:category': [
          {_attr: {
            text: 'fashion'
          }},
        ]}
      ]
    })
  })

 fs.writeFileSync('./public/sitemap-blog', feed.xml({ indent: true }));

}