import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ApiPost from "../helpers/ApisPost";

function PostDetail() {
  const [post, setPost] = useState([]);
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    (async () => {
      const getPost = await ApiPost.getPostsId(id);
      setPost(getPost.data);
    })();
  }, []);

  const handleClick = async (param) => {
    const result = await ApiPost.searchPost(param);
    console.log(result);
  }
  return (
    post.length === 0 ? (
      <p>Loading</p>
    ): (
    <div>
      <div>
        <img src={post.user.image} width="50px" />
        <p>{post.user.displayName}</p>
        <p>{post.updated.split("T").reverse()[1]}</p>
      </div>
      <div>
        <h1>{post.title}</h1>
        <h3>{post.content}</h3> 
      </div>
      <div>
        {post.categories.map((category) => (
          <p>{category.name}</p>
        ))}
      </div>
    </div>
    )
  )
}

export default PostDetail;