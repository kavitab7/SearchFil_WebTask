import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PriceFilter = () => {
    const navigate = useNavigate();
    const [selectedPriceRange, setSelectedPriceRange] = useState([]);

    const handleCheckboxChange = (priceRange) => {
        const updatePrice = selectedPriceRange.includes(priceRange)
            ? selectedPriceRange.filter((p) => p != priceRange)
            : [...selectedPriceRange, priceRange]

        setSelectedPriceRange(updatePrice);
        const queryString = updatePrice.map((p) => `price=${encodeURIComponent(p)}`).join('&');
        navigate(`/search?${queryString}`)
        console.log(selectedPriceRange)
    };

    return (
        <>
            <div>Price Range</div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault1"
                    onChange={() => handleCheckboxChange('0-500')}
                    checked={selectedPriceRange.includes('0-500')}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault1">
                    0-500
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault2"
                    onChange={() => handleCheckboxChange('501-800')}
                    checked={selectedPriceRange.includes('501-800')}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault2">
                    501-800
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault3"
                    onChange={() => handleCheckboxChange('801-2000')}
                    checked={selectedPriceRange.includes('801-2000')}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault3">
                    801-2000
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault4"
                    onChange={() => handleCheckboxChange('2001-100000')}
                    checked={selectedPriceRange.includes('2001-100000')}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault4">
                    2001-100000
                </label>
            </div>
        </>
    );
};

export default PriceFilter;
