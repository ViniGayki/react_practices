// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Movie from'./component/Movie';

function App() {
  const [dummyMovies,setdummyMovies] = useState ([
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    }
  ]);
  return (
    <div className="App">
      <h1>Fatching source Data</h1>
      {/* <Movie title={dummyMovies[0].title} openingText={dummyMovies[0].openingText} releaseDate={dummyMovies[0].releaseDate}  />
      <Movie title={dummyMovies[1].title} openingText={dummyMovies[1].openingText} releaseDate={dummyMovies[1].releaseDate}  /> */}
   
   { 
   dummyMovies.map((item) => 
   { return
   <>
   <li>{item}</li>
   </>
   }
  )}


    {/* <button onClick={}>FetchMove</button> */}
    </div>
  );
}

export default App;
