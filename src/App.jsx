import StarshipSearch from './components/StarshipSearch'
// import StarshipList from './components/StarshipList'
import { useState } from 'react';
import * as fetchStarships from './services/starshipServices'
// import { useEffect } from 'react';

const App = () => {

  const [starships, setstarships] = useState([])
  // const [search, setSearch] = useState('')

  const fetchDefaultData = async (starshipName) => {
    
    const data = await fetchStarships.show(starshipName)

    const newStarship = {
      name: data.results[0].name,
      starshipClass: data.results[0].starship_class,
      starshipModel: data.results[0].model,
      starshipManufacturer: data.results[0].manufacturer
    }
    setstarships([...starships, newStarship])
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
