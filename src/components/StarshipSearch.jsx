import { useState } from "react"

// display form
// capture user input and update local state search
    // handle onChange
// lift state to app and pass it to starshipList
const searchForm = (props) => {

    const [searchString, setSearchString] = useState('')
    
    const handleSubmit = () => {
        event.preventDefault()
        props.fetchDefaultData(searchString)
    }
    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="search"></label>
            <input 
            type="text" 
            name="search" 
            id="search"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit">Search</button>

        </form>
    )
}

export default searchForm