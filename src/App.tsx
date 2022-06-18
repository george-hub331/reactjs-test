import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Yesterday from "./pages/yesterday";

const App = () => {
 
    return (
    <div className="mainApp">
        <h2 className="header">Main Metrics</h2>
    <Router>
      <Routes>
        <Route path="/" element={<Yesterday/>} />
        <Route path="/:page" element={<Home/>} />
      </Routes>
    </Router>

    </div>)
}

export default App;
