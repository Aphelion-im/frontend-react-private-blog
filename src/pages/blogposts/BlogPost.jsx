import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
import posts from '../../data/posts.json';

const BlogPost = () => {
  const { blogId } = useParams();

  const postId = blogId - 1;

  return (
    <>
      <article>
        <h1>
          #{blogId} {posts[postId].title}
        </h1>
        <h2>{posts[postId].date}</h2>
        <p>{posts[postId].content}</p>
      </article>
      <div className="link-home">
        <Link to="/">Terug Naar Home</Link>
      </div>
    </>
  );
};

export default BlogPost;
