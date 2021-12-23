import { Component } from 'react';

import './styles.css';
import { Posts } from '../../component/Posts';

import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../component/Button';
import { TextInput } from '../../component/TextInput';

class Home extends Component {
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
          <h3>Não existem posts <span className='s-emoji'>🥴</span><span className='s-emoji'>😓</span></h3>
        )}

        
        <div className='button-container'>
          {!searchValue && (

              <Button 
              text='Load more posts chamado'
              onClick = { this.loadMorePosts }
              disabled = {noMorePosts}
              />

          )}
          
        </div>
        
      </section>
      );

  }  
}

export default Home;
