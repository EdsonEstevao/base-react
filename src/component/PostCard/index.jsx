import P from 'prop-types';
import './styles.css';

/*
export const PostCard = ({id, title, body, cover}) => {

    return (
        <div className='post'>
            <img src={cover} alt={ title }></img>
            <div className='post-content'>
                <h2>{ title } - { id }</h2>
                <p>{ body }</p>
            </div>
        </div>

    )
}
*/

export const PostCard = ({ title, avatar, body }) => {
  return (
    <div className="post">
      <img src={avatar} alt={title}></img>
      <div className="post-content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: P.string.isRequired,
  avatar: P.string.isRequired,
  body: P.string.isRequired,
};
