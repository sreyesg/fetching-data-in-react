// import StarshipCard from './StarshipCard'

const StarshipList = ({starships}) => {
    // const {starships} = props
    console.log(starships,'MY PROPs')
    if(!starships.length){
        return(
            <>
            <h1>Loading</h1>
            </>
        )   
    }
    return (
        <>
        <p>Starship is real</p>
        </>
    )
}

export default StarshipList