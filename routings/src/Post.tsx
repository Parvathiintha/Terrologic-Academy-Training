import React from 'react'
import {useParams} from 'react-router-dom'

const Post = () => {
    const {id}=useParams()  //hook to get 
  return (
    <div>
      <h2>postId:{id}</h2>
    </div>
  )
}

export default Post
