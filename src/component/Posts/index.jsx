import { PostCard } from '../PostCard'
import './styles.css'

export const Posts = ({ posts }) => {
    return (
        <div className='posts'>          
            {posts.map((post,i)=> ( 
                
                <PostCard 
                    title = {post.titulo}
                    body = {post.body}
                    id= {i}
                    cover = {post.avatar}
                    key={i}
                />                
            ))}            
        </div>
    ) 
}