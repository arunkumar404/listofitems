import React, { useEffect, useState } from 'react'

import "./List.css"
import ListItem from './ListItem'

const List = () => {

  //set inital states
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

      //get data from jsonplaceholder api on page load
      useEffect(()=>{
        const getItems = async() =>{
          try{
            setLoading(true)
            const data = await(await fetch("https://jsonplaceholder.typicode.com/posts")).json()
            setPosts(data)
            setLoading(false)
          }catch(err){
            setError(err)
            setLoading(false)
          }
        }
        getItems();
      },[])

    //display loading before data is fetched
    if(loading){
      return (
        <div className="loading">
          <section className="loader"></section>
        </div>
      )
    }
    if(error){
      console.log(error);
    }

  return (
    <div className="listContainer">
      {posts&&posts.map((post)=>{
        return <ListItem post={post} key={post.id}/>
      })}
    </div>
  )
}

export default List