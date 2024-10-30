const BASE_URL='http://swapi.dev/api/starships/'

const index = async() => {
    try {
        const res = await fetch(BASE_URL)
        const data = res.json()
        // console.log(data,"from Services")
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
        return data
    } catch (error) {
        console.log(error)
    }
}
export { index, show }
// console.log(index('CR90 corvette'))