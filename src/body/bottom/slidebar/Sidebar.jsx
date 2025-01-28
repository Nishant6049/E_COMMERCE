import React, { useContext } from 'react'
import './Sidebody.css'
import { context } from '../../../store/Apps'


const Sidebar = () => {

  const next = useContext(context);
  const updated = next.istrue;

  return (
    <>
      <ul className={`sidebody ${(updated)? "hidden":"block"} z-40 fixed top-[82px] h-[100vh] w-[20vw] bg-gray-100 justify-end gap-7 cursor-pointer text-xl font-bold`}>
        <li>Clothes</li>
        <li>Electronics</li>
        <li>Furniture</li>
        <li>Shoes</li>
        <li>Miscellaneous</li>
      </ul>
    </>
  )
}

export default Sidebar




// import React, { useContext } from "react";
// import "./Sidebody.css";
// import { context } from "../../../store/Apps";

// const Sidebar = () => {
//   const { istrue, setistrue } = useContext(context);

//   const closeSidebar = () => {
//     setistrue(false); // Close the sidebar
//   };

//   return (
//     <>
//       {/* Overlay */}
//       {istrue && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
//           onClick={closeSidebar} // Close sidebar when clicking on the overlay
//         ></div>
//       )}

//       {/* Sidebar */}
//       <ul
//         className={`sidebody fixed z-40 top-[82px] h-[100vh] bg-gray-500 text-xl font-bold shadow-lg transition-transform duration-300 ease-in-out ${
//           istrue ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <li>Clothes</li>
//         <li>Electronics</li>
//         <li>Furniture</li>
//         <li>Shoes</li>
//         <li>Miscellaneous</li>
//       </ul>
//     </>
//   );
// };

// export default Sidebar;
