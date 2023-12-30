import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Suggestion = ({ isDisplay }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setCategories(data);
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <div className={isDisplay ? 'disp-bg' : 'disp-none'}>
                Latest trends
                <div className="latest">
                    {categories.map((category, index) => (
                        <div className="box" id={`box${index}`} key={index}  >{category}</div>
                    ))}
                </div>
                <div className="popular">
                    Popular search
                    <ul>
                        <li className='list'>Women Wardrobe</li>
                        <li className='list'>Stylish Jewelry</li>
                        <li className='list'>Trendy Men Clothing</li>
                        <li className='list'>New Gadgets</li>
                        <li className='list'>Trendy Tees</li>
                    </ul></div>
            </div>
        </>
    )
}

export default Suggestion