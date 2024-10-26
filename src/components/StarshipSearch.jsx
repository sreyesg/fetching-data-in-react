import { useState } from "react"
// display form
// capture user input and update local state search
    // handle onChange
// lift state to app and pass it to starshipList
const searchForm = () => {

    const [search, setSearch] = useState('')

    return (
        <form >
            <label htmlFor="search"></label>
            <input 
            type="text" 
            name="search" 
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>

        </form>
    )
}

export default searchForm