const StarshipCard = ({starships}) => {
    
    return(
        <>
        {
        starships.map((starship) => {
            return(
                <article>
                        <h3>{starship.name}</h3>
                        <p>Class: {starship.class_list}</p>
                        <p>Manufacturer: {starship.manufacturer}</p>
                        <p>Model: {starship.model}</p>
                </article>
            )
                
        })
        }
        </>
    )
}

export default StarshipCard