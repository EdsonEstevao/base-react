import P from 'prop-types';
import { PostCard } from '../PostCard';
import './styles.css';

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((post, i) => (
        <PostCard
          title={post.title}
          body={post.body}
          avatar={post.avatar}
          key={i}
        />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};
Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      avatar: P.string.isRequired,
      body: P.string.isRequired,
    }),
  ),
};
