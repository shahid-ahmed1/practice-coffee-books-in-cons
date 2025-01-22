import React, { useEffect, useState } from 'react';
import Catagories from '../Catagories/Catagories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const catagories= useLoaderData()
    
//    const [data ,setData] = useState([])
//    useEffect(()=>{
//     fetch('./categories.json')
//     .then(res => res.json())
//     .then(data => setData(data))
//    },[])
//    console.log(data.length)

   
    return (
        <div className=''>
           <div className=' my-5  w-[1250px] mx-auto'>
            <img className='rounded-lg' src="/src/assets/banner.jpg" alt="" />
           </div>
           <div className='text-center my-5'>
            <h3 className='text-4xl font-thin '>Heare Is My Cofffee Title </h3>
            <p className='font-thin text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat.</p>
           </div>
            <div>
              <Catagories key={catagories.catagory} catagories={catagories}></Catagories>
              <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;