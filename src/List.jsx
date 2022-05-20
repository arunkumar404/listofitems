import React, { useEffect, useState } from 'react'

import "./List.css"
import ListItem from './ListItem'

const List = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

      useEffect(()=>{
        const getItems = async() =>{
          try{
            setLoading(true)
            const data = await(await fetch("https://jsonplaceholder.typicode.com/posts")).json()
            console.log(data);
            setPosts(data)
            setLoading(false)
          }catch(error){
            setError(error)
            setLoading(false)
          }
        }
        getItems();
      },[])

    if(loading){
      return (
        <div className="loading">
          <section className="loader"></section>
        </div>
      )
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