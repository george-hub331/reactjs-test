import { useParams } from "react-router-dom";

import NavButtons from "./navbuttons/button";
const Nav = () => {
    const { page } = useParams();

    return <div className="navParent">
        <NavButtons selected={page === "lasthour"} text="Last Hour"/>
        <NavButtons selected={page === "today"} text="Today"/>
        <NavButtons selected={page === "yesterday" || !page} text="Yesterday"/>
        <NavButtons selected={page === "last3days"} text="Last 3 Days"/>
    </div>
}

export default Nav;