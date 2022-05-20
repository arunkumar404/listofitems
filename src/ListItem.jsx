import React from 'react';
import  "./ListItem.css";

const ListItem = ({post}) => {
  return (
    <div className="itemOne">
        <p className="title">{post.title}</p>
        <p className='bodyPlace'>{post.body}</p>
    </div>
  )
}

export default ListItem