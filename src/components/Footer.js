import React from "react";
import ItemsContainer from "./itemsContainer.js"

const Footer = () => {
  return <footer className ="bg-gray-800 text-white">
  <ItemsContainer/>

  <div className="grid grid-cols-1 sm:grid cols-2 lg:grid-cols-2 gap-10 text-center pt-2 text-gray-400 text sm:pb-8 gap-x-80">
    <p className="text-left padding pl-6">© Copyright Wizeline 2024</p>
    <ul className= "flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
      <li className="md:me-6">Cookie Notice</li>
      <li className="md:me-6">Privacy Policy</li>
      <li className="md:me-6">Terms & Conditions</li>
      <li className="md:me-6">Security and Complience</li>
    </ul>
    


  </div>




  </footer>;
}



export default Footer;