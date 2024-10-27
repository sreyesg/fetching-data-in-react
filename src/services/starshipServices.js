const BASE_URL='http://swapi.dev/api/starships/'

const index = async() => {
    try {
        res = await fetch(BASE_URL)
        data = res.json()
        return data
        
    } catch (error) {
        console.log(error)
    }
}
const show = async (starshipName) => {
    try {
        const queryString = `?search=${starshipName}`
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
export { index, show }
// console.log(index('CR90 corvette'))