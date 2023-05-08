import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useTitle('category')
    useEffect(() => {
        fetch('https://birmingham-news-server.vercel.app/news-categories')
        .then(res => res.json())
        .then(data =>{ 
            setCategories(data)
            // console.log(data)
        })
    }, [])
    return (
        <div>
            <h2>Left side nav: {categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key= {category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;