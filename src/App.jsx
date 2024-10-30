import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'
import { useState, useEffect } from 'react';
import * as fetchStarships from './services/starshipServices'


const App = () => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    
    const fetchDefaultData = async() =>{
      const defaultData = await fetchStarships.index()
      console.log(defaultData.results)
      setStarships(defaultData.results)
    }
    fetchDefaultData()
  }, [])

  const fetchData = async (starshipName) => {
    
    const data = await fetchStarships.show(starshipName)
    const newStarship = {
      name: data.results[0].name,
      starshipClass: data.results[0].starship_class,
      starshipModel: data.results[0].model,
      starshipManufacturer: data.results[0].manufacturer
    }
    setStarships([...starships, newStarship])
  }
  console.log(starships, 'NEW STARSHIPT STATE');
  return (
    <>
      <h1>Star Wars Starships</h1>
      <div className="form">
      <StarshipSearch
      fetchData={fetchData}
      />
      </div>
      <section>

      <StarshipList starships={starships} />

      </section>
    </>
  );
}

export default App
