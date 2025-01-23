import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from '../Card/Card';

const Cards = () => {
    const {category} = useParams();
    const data = useLoaderData();
const [coffees,setCoffees]=useState([]);
const navigate = useNavigate()
useEffect(()=>{
    if(category){
        const filterd = [...data].filter(coffee=> coffee.category === category);
        setCoffees(filterd)
    }
    else{
        setCoffees(data.slice(0,6))
    }
    
    
},[category,data])
    
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            cards heare : {category}
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    coffees.map(coffee=> <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
            <button className='btn btn-warning mt-4 ' onClick={()=>navigate('/coffees')}>View All</button>
        </div>
    );
};

export default Cards;