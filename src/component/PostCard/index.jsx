import './styles.css'

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

export const PostCard = ({title, cover, body}) => {
       
    return (
        <div className='post'>
            <img src={cover} alt={ title }></img>
            <div className='post-content'>
                <h2>{ title }</h2>
                <p>{ body }</p>
            </div>
        </div>
        
    )
}