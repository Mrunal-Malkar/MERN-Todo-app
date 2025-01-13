import React, { useState } from "react";
import { BrowserRouter, NavLink } from "react-router";
import "./navbar.css";;

const Navbar = () => {
  const [ShowNavbar,setShowNavbar] = useState(false);
  const toggle = () => {
    setShowNavbar(!ShowNavbar);
  };
  return (
    <>
    {ShowNavbar?"":
      <i class="fa-solid fa-bars md:hidden inline text-2xl" onClick={toggle}></i>}
      {ShowNavbar?
    <nav className="md:w-[20%] bg-[#F6F0ED] md:hidden block md:h-screen h-[100%] md:text-xl text-sm w-[13%]">
      <i class="fa-solid fa-xmark text-2xl self-centerm k]v " onClick={toggle}></i>
    <ul className="w-full md:h-[40%] h-[95%]">
      {[
        { path: "/", label: "Home" },
        { path: "/notes", label: "Notes" },
        { path: "/todo", label: "Todos" },
        { path: "/aboutdeveloper", label: "About" },
      ].map(({ path, label }) => {
        return (
          <li
            key={path}
            className="w-full h-1/4 flex justify-center align-middle p-1 border-2 border-black"
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "w-full h-full flex justify-center bg-transparent rounded-md border-solid border-4 bg-blue-400"
                  : "w-full h-full flex justify-center bg-[#9F9FED] rounded-md"
              }
            >
              <span className="self-center">{label}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  </nav>:""  
    }
      <nav className="md:w-[20%] bg-[#F6F0ED] md:block hidden md:h-screen h-[40%] md:text-xl text-2xl w-[80%]">
        <ul className="w-full md:h-[40%] h-full">
          {[
            { path: "/", label: "Home" },
            { path: "/notes", label: "Notes" },
            { path: "/todo", label: "Todos" },
            { path: "/aboutdeveloper", label: "About" },
          ].map(({ path, label }) => {
            return (
              <li
                key={path}
                className="w-full h-1/4 flex justify-end align-middle py-1 "
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "w-3/4 h-full flex justify-center bg-[#B1B1FF] border-l-violet-600 rounded-l-md border-solid border-l-8"
                      : "w-full h-full flex justify-center bg-[#9F9FED] rounded-l-md"
                  }
                >
                  <span className="self-center">{label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
     </>
  );

};

export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router";
// import "./navbar.css";

// const Navbar = () => {
//   const [ShowNavbar, setShowNavbar] = useState(false);

//   const toggle = () => {
//     setShowNavbar(!ShowNavbar);
//   };

//   return (
//     <>
//       {/* Navbar Toggle Button for Mobile */}
//       <i
//         className="fa-solid fa-bars md:hidden cursor-pointer text-2xl p-4"
//         onClick={toggle}
//       ></i>

//       {/* Navbar */}
//       <nav
//         className={`${
//           ShowNavbar ? "block" : "hidden"
//         } md:block md:w-[20%] bg-[#F6F0ED] md:h-screen h-[40%] md:text-xl text-2xl w-[80%]`}
//       >
//         <ul className="w-full md:h-[40%] h-full">
//           {[
//             { path: "/", label: "Home" },
//             { path: "/notes", label: "Notes" },
//             { path: "/todo", label: "Todos" },
//             { path: "/aboutdeveloper", label: "AboutDev" },
//           ].map(({ path, label }) => {
//             return (
//               <li
//                 key={path}
//                 className="w-full h-1/4 flex justify-center align-middle p-1"
//               >
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "w-3/4 h-full flex justify-center bg-[#B1B1FF] border-r-violet-600 rounded-md border-solid border-r-8"
//                       : "w-full h-full flex justify-center bg-[#9F9FED] rounded-md"
//                   }
//                 >
//                   <span className="self-center">{label}</span>
//                 </NavLink>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
