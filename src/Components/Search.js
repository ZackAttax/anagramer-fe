import React, {useState} from "react";

function Search() {
    const [anagrams, setAnagrams] = useState([])

    return(
        <div>
            <form>
                <label>
                    Search for anagrams
                </label>
                <input
                classname='searchInput'
                type='text'
                name='word'
                />
            </form>
        </div>
    )
}

export default Search