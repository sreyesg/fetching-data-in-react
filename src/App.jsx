import StarshipSearch from './components/StarshipSearch'
// import StarshipList from './components/StarshipList'
import { useState } from 'react';
// import { useEffect } from 'react';

const App = () => {

  const [starships, setstarships] = useState([])
  return (
    <>
      <h1>StarWars Starships</h1>
      <StarshipSearch/>
    
    </>
  );
}

export default App
