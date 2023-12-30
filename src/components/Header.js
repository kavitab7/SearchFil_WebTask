import React, { useState } from 'react'
import Suggestion from '../pages/Suggestion'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isDisplay, setDisplay] = useState(false);
    const [searchItem, setSearchItem] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${encodeURIComponent(searchItem)}`);
    }
    const handleDispSugg = (e) => {
        setDisplay(true);
    };
    return (
        <>
            <nav className="navbar">
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                    <input className="form-control me-2" type="search" placeholder="Search"
                        value={searchItem}
                        onChange={(e) => {
                            setSearchItem(e.target.value)
                        }}
                        onClick={handleDispSugg} />
                    <button className="btn" type="submit" >Search</button>
                </form>
            </nav>
            <Suggestion isDisplay={isDisplay} />
        </>
    )
}

export default Header