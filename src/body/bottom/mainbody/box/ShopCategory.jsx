import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Items from './Items';

const ShopCategory = () => {
    const { category } = useParams();  // Get category from URL
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://api.escuelajs.co/api/v1/products");
                const result = await response.json();

                // Convert category to lowercase for case-insensitive comparison
                const filteredData = result.filter(item => 
                   item.category.name.toLowerCase() === category.toLowerCase()
                );

                setData(filteredData);
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]); // Re-fetch data when category changes

    return (
        <div>
            {loading ? (
                <p className='text-[100px] font-bold text-center h-[100vh] '>Loading...</p>
            ) : data.length > 0 ? (
                <div className="shop-category grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((item) => (
                        <Items key={item.id} image={item.images[0]} name={item.title} price={item.price} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No products found for "{category}".</p>
            )}
        </div>
    );
};

export default ShopCategory;
