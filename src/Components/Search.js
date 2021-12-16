import React, {useState} from "react";

function Search() {
    const [anagrams, setAnagrams] = useState([])
    const [wordSearch, setWordSearch] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        findAnagrams(wordSearch)
    }
    const handleFormChange = event => {
        setWordSearch(event.target.value)
    }
    const findAnagrams = (word) => {
        fetch(`http://localhost:3000/search/${word}`)
        .then(res => res.json())
        .then((results) => {
            console.log(results)
            setAnagrams(results)
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search for anagrams
                </label>
                <input
                classname='searchInput'
                type='text'
                name='wordSearch'
                value={wordSearch} onChange={handleFormChange}
                />
            </form>
            Anagrams for {wordSearch} are 
            {anagrams.map(word => <div>{word}</div> )}
        </div>
    )
}

export default Search