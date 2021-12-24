import { useCallback, useEffect, useState } from 'react';

import './styles.css';
import { Posts } from '../../component/Posts';

import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../component/Button';
import { TextInput } from '../../component/TextInput';

export const Home = () => { 
  
  let d = new Date().toLocaleString('pt-br')
  const [date] = useState(d);
  const [posts, setPosts] = useState([])  
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage, setPostsPerPage] = useState(3)
  const [searchValue, setSearchValue] = useState('')
  
  const noMorePosts = page + postsPerPage >= allPosts.length;  

  const filteredPosts = !!searchValue ? 
      allPosts.filter((post)=> {
        return post.titulo.toLowerCase().includes(searchValue.toLowerCase());
      })
      : 
      posts;


      const HandleLoadPosts = useCallback(async (page, postsPerPage) => {
        
        const postsAndPhotos = await loadPosts()    
        
        setPosts(postsAndPhotos.slice(page, postsPerPage));
        setAllPosts(postsAndPhotos)
        setPostsPerPage(3)
        
        
      },[])
    
      const loadMorePosts = () => {
        
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    
        posts.push(...nextPosts);
        
        setPosts(posts)
        setPage(nextPage)
      }
    
      const  handleInputChange = (e) => {
        const { value } = e.target;        
        setSearchValue(value);
      }

      useEffect(() => {        
        HandleLoadPosts(0, postsPerPage)
        console.log('oi...')
      },[HandleLoadPosts, postsPerPage]);

  return (
    <section className='container'> 
      <h3>{date}</h3>       
      <div className='search-container'>          
       <div>
          {!!searchValue && (
            <h1>Search: {searchValue}</h1>
          )}
       </div>
       <div>
          <TextInput 
              actionFn={ handleInputChange }
              inputValue = { searchValue }
            />
       </div>
      </div>
      {filteredPosts.length > 0 && (
        <Posts posts = {filteredPosts} />
      )}
      {filteredPosts.length === 0 && (
        <h3>Não exist posts <span className='s-emoji'>🥴</span><span className='s-emoji'>😓</span></h3>
      )}

      
      <div className='button-container'>
        {!searchValue && (

            <Button 
            text='Load more posts called'
            onClick = { loadMorePosts }
            disabled = {noMorePosts}
            />

        )}
        
      </div>
      
    </section>
    );
}
/*
class Home2 extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: ''
  }
  
  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const {page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts()    
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage), 
      allPosts: postsAndPhotos
    });
    
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    
    this.setState({ 
      ...this.state,
      posts, 
      page: nextPage 
    });
  }

  handleInputChange = (event) => {
    const value  = event.currentTarget.value;
    this.setState({ ...this.state, searchValue: value});
  }

  render(){
    const { 
      posts, 
      page, 
      postsPerPage, 
      allPosts, 
      searchValue 
    } = this.state;

    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? 
      allPosts.filter((post)=> {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
      : 
      posts;
     
    return (
      <section className='container'>        
        <div className='search-container'>          
         <div>
            {!!searchValue && (
              <h1>Search: {searchValue}</h1>
            )}
         </div>
         <div>
            <TextInput 
                actionFn={ this.handleInputChange }
                inputValue = { searchValue }
              />
         </div>
        </div>
        {filteredPosts.length > 0 && (
          <Posts posts = {filteredPosts} />
        )}
        {filteredPosts.length === 0 && (
          <h3>Não exist posts <span className='s-emoji'>🥴</span><span className='s-emoji'>😓</span></h3>
        )}

        
        <div className='button-container'>
          {!searchValue && (

              <Button 
              text='Load more posts called'
              onClick = { this.loadMorePosts }
              disabled = {noMorePosts}
              />

          )}
          
        </div>
        
      </section>
      );

  }  
}
*/
export default Home;
