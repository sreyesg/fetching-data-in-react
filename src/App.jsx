import StarshipSearch from './components/StarshipSearch'
// import StarshipList from './components/StarshipList'
import { useState } from 'react';
import * as fetchStarships from './services/starshipServices'
// import { useEffect } from 'react';

const App = () => {

  const [starships, setstarships] = useState([])
  // const [search, setSearch] = useState('')

  const fetchDefaultData = async (starshipName) => {
    console.log(starshipName, 'FROM APP')
    const data = await fetchStarships.show(starshipName)
    console.log(data, "json RES")
    
  }
  return (
    <>
      <h1>StarWars Starships</h1>
      <StarshipSearch
      fetchDefaultData={fetchDefaultData}
      />
    
    </>
  );
}

export default App
