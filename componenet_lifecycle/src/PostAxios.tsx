import React, { useState, useEffect } from "react";
import axios from "axios";
interface Post {
  id: number;
  title: string;
}

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const newPost={
        title:"this is new tiltle",
        author:"author"
    }
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
     
      .then((response) => {
          setPosts(response.data);
       })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
    useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


const handleDelete = (id: number) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
       // Remove deleted post from UI
       setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        console.log(`Post ${id} deleted`);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}
          <button
            onClick={() => handleDelete(post.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}


export default PostList;
