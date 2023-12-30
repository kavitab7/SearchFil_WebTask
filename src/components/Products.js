import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const categories = searchParams.getAll('category');
    const prices = searchParams.getAll('price');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };
        fetchData();
    }, []);

    const filteredProducts = products.filter((product) => {
        const searchWords = query ? query.split(' ') : [];
        const title = product.title ? product.title.toLowerCase() : '';
        const categoryMatches = categories.length === 0 || categories.some((cat) => product.category.includes(cat));
        const priceMatches = prices.length === 0 || prices.some((price) => {
            const [min, max] = price.split('-');
            const match = product.price >= Number(min) && product.price <= Number(max);
            console.log('Price Match:', match);
            return match;
        });


        const matches = (searchWords.length === 0 || searchWords.some((word) => title.includes(word.toLowerCase()))) &&
            categoryMatches &&
            priceMatches;

        console.log('Overall Matches:', matches);

        return matches;
    });


    const handleReset = () => {
        setSearchParams({ query: '', category: '', price: '' });
        navigate('/');
    };

    return (
        <>
            <div>
                <button className='back-btn' onClick={handleReset}><span class="material-symbols-outlined">
                    arrow_back_ios
                </span></button>
            </div>
            <div className="product-page">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Card key={product.id} product={product} />
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </>
    );
};

export default Products;
