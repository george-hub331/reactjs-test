import Yesterday from "./yesterday";
import Last3days from "./last3days";
import Lasthour from "./lasthour";
import Today from "./today";
import { useParams } from "react-router-dom";

const Home = () => {
    const { page } = useParams();

    return <div>
        <h2>Main Metrics</h2>
    
        {page === 'yesterday' ? <Yesterday/> : (page === 'today' ? <Today/> : (page === 'last3days' ? <Last3days/> : (page === 'lasthour' ? <Lasthour/> : <Yesterday/>)))}

    </div>
}

export default Home;