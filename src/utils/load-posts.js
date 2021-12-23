export const loadPosts = async () => {

    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    
    const postJson = await posts.json();
    const photoJson = await photos.json()

    //unir array
    const postsAndPhotos = postJson.map((post, index) => {
      //retornar um objeto
      return { ...post, cover: photoJson[index].url }
    })

    return postsAndPhotos;
}