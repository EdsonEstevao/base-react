export const loadPosts = async () => {

    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos')
    const cinemaResponse = await fetch('https://api.b7web.com.br/cinema/')

    const [posts, photos, filmes] = await Promise.all([postsResponse, photosResponse, cinemaResponse]);
    
    const postJson = await posts.json()
    const photoJson = await photos.json()
    const filmesJson = await filmes.json()

    //unir array
    
    const postsAndPhotos = postJson.map((post, index) => {        
      //retornar um objeto
      return { ...post, cover: photoJson[index].url }

    })

    const filmesAndPost = filmesJson.map((filme, i)=> {      
      return {...filme, body: postJson[i].body}
    })    

    return filmesAndPost;

    return postsAndPhotos;
}