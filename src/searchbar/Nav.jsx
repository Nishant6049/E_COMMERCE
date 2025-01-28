import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Right from "./Right";
import Left from "./Left";

const Nav = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  

  // Fetch data on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {

        // const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await fetch ("https://api.escuelajs.co/api/v1/products");
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (value) => {
    setInput(value);

    if (value) {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center z-50 p-5 sticky top-0 bg-white">
        <Left/>

        {/* Search Section */}
        <div className="relative w-full max-w-md">
          <div className="flex border border-black rounded-lg overflow-hidden">
            <input
              className="p-2 w-full outline-none"
              placeholder="Search"
              type="text"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button className="p-2 bg-gray-200 hover:bg-gray-300">
              <FaSearch />
            </button>
          </div>
          {/* Search Results */}
          {filteredData.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10">
              <ul className="h-auto overflow-auto">
                {filteredData.map((user) => (
                  <li key={user.id} className="border-b p-2 hover:bg-gray-100">
                    {user.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Right/>
      </div>
      <hr />
    </>
  );
};

export default Nav;
