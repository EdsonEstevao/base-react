export const loadPosts = async () => {
  const postsResponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
  );
  // const photosResponse = await fetch(
  //   'https://jsonplaceholder.typicode.com/photos',
  // );
  const cinemaResponse = await fetch('https://api.b7web.com.br/cinema/');

  const [posts, films] = await Promise.all([
    postsResponse,
    // photosResponse,
    cinemaResponse,
  ]);

  const postJson = await posts.json();
  // const photoJson = await photos.json();
  const filmsJson = await films.json();

  //join array

  const filmsAndPost = filmsJson.map((film, index) => {
    //return um object
    // return { ...post, cover: photoJson[index].url };
    // });

    return { ...film, body: postJson[index].body, title: film.titulo };
  });

  console.log(filmsAndPost);

  return filmsAndPost;

  // return postsAndPhotos;
};
