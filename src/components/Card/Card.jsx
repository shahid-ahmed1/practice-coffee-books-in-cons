import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({coffee}) => {
    const {id,popularity,rating,type,origin,image,category,name,} = coffee;
    return (
        <div className=''>
           <NavLink to={`/coffee/${id}`}>
           <div className="card relative overflow-hidden bg-base-100 w-full shadow-xl transition hover:scale-90 ">
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
      <button className="btn mt-5 btn-primary">Buy Now</button>
      <button className="btn mt-5 btn-primary">Buy Now</button>
    </div>
  </div>
</div>
           </NavLink>
        </div>
    );
};

export default Card;