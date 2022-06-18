
import { NavLink } from "react-router-dom";

const NavButtons = ({text, selected = false}: {text:string, selected?:boolean}) => {
    return <NavLink to={`/${((text).replace(/[ ]/gi, '')).toLowerCase()}`} style={{
        backgroundColor: selected ? "#2196F3" : "#fff",
        color : selected ? "#fff" : "#4A4A4A",
        textDecoration: 'none'
    }} className="navButtons">
        {text}
    </NavLink> 
}

export default NavButtons;