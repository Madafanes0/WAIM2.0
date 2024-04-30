import React from "react";
import { CAREERS, OFFERINGS, SERVICES, INSIGHTS, ABOUT, Icons} from "./Menus";
import logo from '../images/wizeline_logo.png';
import DeleteScreen from "./DeleteScreen";

const Item = ({Links, title}) => {
  return (
  <ul>
      <h1 className = "mb-1 font-bold text-gray-400">{title}</h1>
      {
          Links.map((Link) => (
              <li className = "mb-1 font-semibold text-white py-2" key = {Link.name}>
                  <a href={Link.link}>{Link.name}</a>
              </li>
          ))
      }

  </ul>
  )
}

const SocialIcons = ({Icons}) => {
  return (
    <div className="">
      <h1 className="mb-1 font-bold text-gray-400">FOLLOW US</h1>
      <div className="flex items-center">
        {
          Icons.map((Icon) => (
            <a href={Icon.link} key={Icon.name} className="me-4 text-white py-2 mb-1 font-semibold">
              <img src={`https://img.icons8.com/ios-glyphs/30/ffffff/${Icon.name.toLowerCase()}.png`} alt={Icon.name}/>
            </a>
          ))
        }
      </div>
    </div>
  )
}

const ItemsContainer = () => {
  return <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:px-8 px-5 py-6">
      <a href="/"><img src={logo} alt="Logo" className="h-5 w-auto my-1.5" /></a>
      <Item Links = {CAREERS} title = "CAREERS"/>
      <Item Links = {OFFERINGS} title = "OFFERINGS"/>
      <Item Links = {SERVICES} title = "SERVICES"/>
      <Item Links = {INSIGHTS} title = "INSIGHTS"/>
      <Item Links = {ABOUT} title = "ABOUT"/>
      <div><SocialIcons Icons = {Icons}/></div>
      
  </div>
}

const Footer = () => {
  return <footer className ="bg-zinc-800 text-white">
  <ItemsContainer/>

  <div className="grid grid-cols-1 sm:grid cols-2 lg:grid-cols-2 gap-10 text-center pt-2 text-gray-400 text sm:pb-8 gap-x-80">
    <p className="text-left padding pl-6">© Copyright Wizeline 2024</p>
    <ul className= "flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
      <li className="md:me-6"><a href="https://www.wizeline.com/cookie-notice/">Cookie Notice</a></li>
      <li className="md:me-6"><a href="https://www.wizeline.com/privacy-policy/">Privacy Policy</a></li>
      <li className="md:me-6"><a href="https://www.wizeline.com/terms-and-conditions/">Terms & Conditions</a></li>
      <li className="md:me-6"><a href="https://www.wizeline.com/security-and-compliance/">Security and Complience</a></li>
      <li className="md:me-6"><a href="/DeleteScreen">Delete AI</a></li>
      <li className="md:me-6"><a href="/AddScreen">Add AI</a></li>
    </ul>

  </div>

  </footer>;
}



export default Footer;