import React, { useState } from 'react'

const Search = ({ history }) => {

    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()

        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <form onSubmit={searchHandler} >
            <div className="flex border-grey-light border my-10">
                <input
                    type="text"
                    id="search_field"
                    className="w-full rounded ml-1"
                    placeholder="Enter Product Name ..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                    <button id="search_btn" className="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest px-5">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
            </div>
        </form>
    )
}

export default Search
