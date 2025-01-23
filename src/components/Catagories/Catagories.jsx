import React from 'react';
import { NavLink } from 'react-router-dom';

const Catagories = ({catagories}) => {
    
    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>
             <div role="tablist" className="tabs tabs-lifted">
        {
            catagories.map((category)=><NavLink key={category.category} to={`/category/${category.category}`} role="tab" className={({isActive})=>`tab text-2xl font-thin ${isActive ?'tab-active': ''}`}>{category.category}</NavLink>)
        }
</div>
           </div>
        </div>
    );
};

export default Catagories;