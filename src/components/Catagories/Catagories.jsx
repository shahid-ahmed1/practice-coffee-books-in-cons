import React from 'react';
import { NavLink } from 'react-router-dom';

const Catagories = ({catagories}) => {
    
    return (
        <div>
            <div className='max-w-screen-xl mx-auto'>
             <div role="tablist" className="tabs tabs-lifted">
        {
            catagories.map((catagory)=><NavLink key={catagory.category} to='/cards' role="tab" className="tab">{catagory.category}</NavLink>)
        }
</div>
           </div>
        </div>
    );
};

export default Catagories;