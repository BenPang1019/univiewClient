import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import './App.css';
import Navbar from '../src/Components/Navigation/Navbar'
import Footer from '../src/Components/Footer/Footer'



import AniamtedRoutes from "./Components/AnimatedRoutes/AniamtedRoutes";

function App() {

  return (
    <Router >
    <Navbar/>
      <AniamtedRoutes/>
    <Footer/>
    </Router>
  );
}

export default App;
