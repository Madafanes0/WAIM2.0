import Item from "./item";
import {LOGO, CAREERS, OFFERINGS, SERVICES, INSIGHTS, ABOUT, FOLLOW} from "./Menus";


const ItemsContainer = () => {
    return <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-7 gap-6 sm:px-8 px-5 py-6">
        <Item Links = {LOGO} title = "WIZELINE"/>
        <Item Links = {CAREERS} title = "CAREERS"/>
        <Item Links = {OFFERINGS} title = "OFFERINGS"/>
        <Item Links = {SERVICES} title = "SERVICES"/>
        <Item Links = {INSIGHTS} title = "INSIGHTS"/>
        <Item Links = {ABOUT} title = "ABOUT"/>
        <Item Links = {FOLLOW} title = "FOLLOW US"/>
        

    </div>
}


export default ItemsContainer;