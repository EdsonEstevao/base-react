import { PostCard } from '../PostCard'
import './styles.css'

export const Posts = ({ posts }) => {
    return (
        <div className='posts'>          
            {posts.map((post,i)=> (              
                <PostCard 
                    title = {post.title}
                    body = {post.body}
                    id= {post.id}
                    cover = {post.cover}
                    key={i}
                />                
            ))}            
        </div>
    ) 
}