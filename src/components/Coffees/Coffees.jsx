import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Coffees = () => {
    const data = useLoaderData();
    const [coffee ,setCoffee]=useState(data)
    const handleShort=(sortby)=>{
        if(sortby=='popularity'){
         const sorted = [...data].sort((a,b) =>b.popularity -a.popularity);
         setCoffee(sorted)
        }
        else if(sortby=='rating'){
            const sorted = [...data].sort((a,b) =>b.rating -a.rating);
            setCoffee(sorted)
        }
    }
    return (
        <div>
            <div className='flex justify-between items-center my-5'>
                <div>
             <h3 className='text-3xl font-thin '>Sort Coffes Popularity & Rating</h3>
                </div>
                <div className=''>
 <button className='btn mr-7 btn-warning ' onClick={()=> handleShort('popularity')}>Sort By popularity</button>
 <button onClick={()=> handleShort('rating')} className='btn btn-warning '>Sort By rating</button>
                </div>
            </div>
             <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    coffee.map(coffee=> <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </div>
    );
};

export default Coffees;