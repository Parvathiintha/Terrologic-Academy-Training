import { useParams } from "react-router-dom";
import React from "react";

export const Post = () => {
  const { id } = useParams();
  return <div>PostID:{id}</div>;
};
export default Post;