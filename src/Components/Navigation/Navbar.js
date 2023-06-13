import React,{useState,useEffect} from 'react'
import '../Navigation/Navbar.css'
import { Link } from 'react-router-dom'
import Cart from '../../Images/Cart.svg'
import menuIcon from '../../Images/menuIcon.png'
import closeIcon from '../../Images/close.png'


export default function NavBar() {
  const [active,setActive] = useState(true)
  const [showContainer,setShowContainer] = useState('first')

  useEffect(() => {
    function handleScroll(event) {
      if (active === false) {
        event.preventDefault();
      }
    }
  
    // Add event listener for mouse scroll
    document.addEventListener("wheel", handleScroll, { passive: false });
  
    // Add event listener for touch scroll
    document.addEventListener("touchmove", handleScroll, { passive: false });
  
    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("touchmove", handleScroll);
    };
  }, [active]);
  
  return (
    <div className='navbarN'>
    <div className='web'>
      <div className='headerContainerN'>
        <Link style={{ color:'white',textDecoration:'none' }} to='/'><h1 className='headerN'>uniview</h1></Link> 
        <a href="https://wa.me/601120432729" target="_blank"><img src={Cart} className="iconN"/></a>
      </div>
        <ul className='listContainerN'>
          <li className='listItems firstListItems'>
            <Link to='/' className='listItemsLink'>Home</Link>
          </li>
          <li className='listItems'>
            <Link to='/about' className='listItemsLink'>About Us</Link>
          </li>
          <li className='listItems'>
            <Link to="/products" className='listItemsLink'>Products</Link>
          </li>
          <li className='listItems'>
            <Link to="/blog" className='listItemsLink'>Blog</Link>
          </li>
          <li className='listItems'>
            <Link to="/support" className='listItemsLink'>Support</Link>
          </li>
        </ul>
    </div>



    {/* Mobile */}
    <div className='mobile'>
    
      <div className='headerContainerN'>
        {active ?
          <img src={menuIcon } className='iconMenu' onClick={ ()=>{setActive(!active);setShowContainer('second')}}/>
          :
          <img src={closeIcon} className='iconMenu' onClick={ ()=>{setActive(!active);setShowContainer('third')}}/>
        }
        <Link style={{ color:'white',textDecoration:'none' }} to='/'><h1 className='headerN inlineF'>uniview</h1></Link>
        <a href="https://wa.me/601120432729" target="_blank"><img src={Cart} className="iconN inlineF"/></a>
      </div>

      <div className={`navbarContainer ${showContainer=='second' ? 'navbarContainerShow' : ''} ${showContainer=='third' ? 'navbarContainerHide' : ''}`} style={showContainer=='first'?{display:'none'}:null}>
          <Link to='/' className='listItemsLink firstListItems' onClick={() => {setActive(!active);setShowContainer('first')}}>Home </Link>
          <Link to='/about' className='listItemsLink' onClick={() => {setActive(!active);setShowContainer('first')}}>About Us</Link>
          <Link to="/products" className='listItemsLink' onClick={() => {setActive(!active);setShowContainer('first')}}>Products</Link>
          <Link to="/blog" className='listItemsLink' onClick={() => {setActive(!active);setShowContainer('first')}}>Blog</Link>
          <Link to="/support" className='listItemsLink' onClick={() => {setActive(!active);setShowContainer('first')}}>Support</Link>
      </div>
    </div>
    </div>
  )
}
