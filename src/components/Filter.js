import React from 'react'
import BrandFilter from './BrandFilter'
import PriceFilter from './PriceFilter'

const Filter = () => {
    return (
        <>
            <div className="filter-page">
                <div className="filter1">
                    <BrandFilter />
                </div>
                <div className="filter2">
                    <PriceFilter />
                </div>
            </div>
        </>
    )
}

export default Filter