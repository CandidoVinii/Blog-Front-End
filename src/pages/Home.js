import { useEffect, useState } from "react";
import ApiPost from "../helpers/ApisPost";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await ApiPost.getPosts();
      if(result.status === 200) setPosts(result.data);
    })();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Link to={`/post/${post.id}`}>
          <>
            <h1>{post.title}</h1>
            <div>
              <h4>{`Author: ${post.user.displayName}`}</h4>
              <img src={post.user.image} width="50px" />
            </div>
            <span>{post.published.split("T").reverse()[1]}</span>
          </>
        </Link>
      ))}
    </div>
  )
};

export default Home;