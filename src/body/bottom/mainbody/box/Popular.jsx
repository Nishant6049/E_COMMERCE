import React from 'react'
import './Popular.css'
import ShopCategory from './ShopCategory'
import { useState, useEffect } from 'react'


const Popular = () => {

const [data, setdata] = useState([]);

const fetchdata = async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const result = await response.json();
  setdata(result);
};

useEffect(() => {

  fetchdata();

}, [])  // dependency array
    return (
        <div>
            <div className="popular-item ">

                {data.length > 0 && data.map((item) => {

                    return (<ShopCategory key={item.id} image={item.images[0]} name={item.title} price={item.price} category={item.category} />)
                })}

            </div>
        </div>
    )
}

export default Popular