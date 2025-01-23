import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [coffee , setCoffee] = useState({});
    const {popularity,rating,type,origin,image,category,name,} = coffee;
    useEffect(()=>{
        const singleData = data.find(coffee => coffee.id === parseInt(id));
        setCoffee(singleData)
    },[data,id])

    return (
        <div>
                <div className="card relative overflow-hidden bg-base-100 w-full shadow-xl  ">
  <figure>
    <img
    className=''
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Catagory :{category}</p>
    <p>Type :{type}</p>
    <p>Origin :{origin}</p>
    <p>Popularity: {popularity}</p>
    <p>Rating: {rating}</p>
    <div className="card-actions justify-end">
      <button  className="btn mt-5 btn-warning">Add Favarite</button>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;