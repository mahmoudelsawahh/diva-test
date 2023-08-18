 import dynamic from "next/dynamic";
import { baseUrl } from "./baseUrl"
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false
});
export async function getCategoryData() {
    const res = await fetch(`${baseUrl}/rest/tables.article/getAllPosts`,{
      cache : 'no-store',
      headers : {
        'Content-Type': 'application/json',
      },
    })
    // Recommendation: handle errors 
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
    return res.json()
  }

  export async function getArticleData() {
    const res = await fetch(`${baseUrl}/rest/tables.article/getArticlesPojo`,{
      cache : 'no-store',
      headers : {
        'Content-Type': 'application/json',
      },
    })
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }

  export async function getArticlePostData() {
    const res = await fetch(`${baseUrl}/rest/tables.article/getAllArticlesPojo`,{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({"id" : 0}),
      cache : 'no-store'
    })
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }


  export async function getBlogData(param) {
    const res = await fetch(`${baseUrl}/rest/tables.article/getArticleDetails`,{
      method : 'POST',
      body : JSON.stringify({"id" : param}),
      cache : 'no-store',
      headers : {
        'Content-Type': 'application/json',
      }
  })
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }

  export async function getCategoryDetail(param) {
    const res = await fetch(`${baseUrl}/rest/tables.article/getPostDetails`,{
      method : 'POST',
      body : JSON.stringify({"id" : param}),
      cache : 'no-store',
      headers : {
        "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests",
        'Content-Type': 'application/json',
      } 
  })
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }