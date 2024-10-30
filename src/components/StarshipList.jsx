import StarshipCard from './StarshipCard'

const StarshipList = ({starships}) => {
    // const {starships} = props
    console.log(starships,'MY PROPs')
    if(!starships.length){
        return(
            <>
            <h2>Loading</h2>
            </>
        )   
    }
    return (
        <>
        
        <StarshipCard starships={starships}/>
        </>
    )
}

export default StarshipList