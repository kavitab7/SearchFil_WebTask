import React from 'react'
import Filter from '../components/Filter'
import Products from '../components/Products'
import Header from '../components/Header'

const SearchResult = () => {
    return (
        <>
            <Header />
            <div className="search-page">
                <Filter />
                <Products />
            </div>
        </>
    )
}

export default SearchResult