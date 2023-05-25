import { Link } from 'react-router-dom';
import posts from '../../data/posts.json';
import './ArticleList.css';

const ArticleList = () => {
  console.clear();
  console.log('Posts: ', posts);

  return (
    <>
      <h1>Blog Overzichtspagina</h1>
      <h2>Aantal blogposts: {posts.length}</h2>
      <ul className="articles-list">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <span>#{post.id}-</span>
              <Link to={`/blogposts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ArticleList;
