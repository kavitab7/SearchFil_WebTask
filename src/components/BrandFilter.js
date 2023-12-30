import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BrandFilter = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setCategories(data);
                console.log(data);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);

    console.log(selectedCategories);

    const handleCheckboxChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];

        setSelectedCategories(updatedCategories);
        const queryString = updatedCategories.map((cat) => `category=${encodeURIComponent(cat)}`).join('&');
        navigate(`/search?${queryString}`);
    };
    return (
        <>
            Category
            {categories.map((category, index) => (
                <div key={index} className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={category}
                        id={`flexCheckDefault${index}`}
                        onChange={() => handleCheckboxChange(category)}
                        checked={selectedCategories.includes(category)}
                    />
                    <label className="form-check-label" htmlFor={`flexCheckDefault${index}`}>
                        {category}
                    </label>
                </div>
            ))}
        </>
    );
};

export default BrandFilter;
