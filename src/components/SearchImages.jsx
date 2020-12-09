import React, { useState } from 'react'
import { createApi } from 'unsplash-js';

const SearchImage = () => {
    const [searchValue, setSearchValue] = useState('')

    const unsplash = createApi({
        accessKey: 'VleyzCT_-kQShHR-NsTdEe8mSpV7BUJL0uCG4FpHn6g',
    });

    


    const handleOnChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = () => {
        unsplash.search.getPhotos({ query: searchValue }).then(result => {
            const urls = []
            for (let i = 0; i < 6; ++i) {
                urls.push(result.response.results[i].urls.small)
            }
            const data = JSON.stringify({ city: searchValue, urls })
            setSearchValue('')
        })
    }

    return (
        <>
            <input
                type="text"
                name="searchValue"
                className="input"
                placeholder="Try a city name"
                value={searchValue}
                onChange={handleOnChange}
            />
            <button className="button" onClick={handleSubmit}>
                Search
            </button>
        </>
    )
}

export default SearchImage