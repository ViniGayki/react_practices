import React, { useState } from 'react';
import Movie from './component/Movie';
import MoviesList from './component/Movielist';
import './App.css';


function App() {
  //(hardcode) data fatch....

  // const [dummyMovies, setdummyMovies] = useState([
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   }
  // ])
  //  return (
  //   <div className="App">
  //     <h1>Fatching source Data</h1>
  //     <Movie title={dummyMovies[0].title} openingText={dummyMovies[0].openingText} releaseDate={dummyMovies[0].releaseDate}  />
  //     <Movie title={dummyMovies[1].title} openingText={dummyMovies[1].openingText} releaseDate={dummyMovies[1].releaseDate}  />

  //   </div>
  // );





  const [moviesList, setMovielist] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchmovieHandler = async () => {
    // fetch data 1st method
    /* fetch('https://swapi.dev/api/films')
       .then(response => {
        return response.json();
       }).then(result => {
         console.log(result);
 
         let data = result.results;
         data = data.map(movie => {
           return {
 
             id: movie.episode_id,
             title: movie.title,
             releaseDate: movie.release_date,
             openingText: movie.opening_crawl,
           }
         })
         setMovielist(data);
 
       })*/




    // fetch data 2nd method
    setIsloading(true);
    setError(null);
    const response = await fetch('https://swapi.dev/api/films')
    try {
      if (!response.ok) {
        throw Error('Somthing went wrong!!!!....');
      }



      let data = await response.json();
      const arr = data.results;
      data = arr.map(movie => {
        return {

          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        }
      });
      setMovielist(data);
    }catch (err) {
      setError(err.message);
    }


    setIsloading(false);
  
  }
  return (
    <div className="App">
      <h1>Fatching source Data</h1>
      <button onClick={fetchmovieHandler}>FetchMove</button> 
      {!isloading && <MoviesList movies={moviesList} />}
      {!isloading && moviesList.length == 0 && <p>No movie list found</p>}
      {isloading && <p>Loading movie list.........</p>}
      {!isloading && error && <p>{error }</p>}      

 


    </div>
  )
}

export default App;
