import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { IoIosCall } from "react-icons/io"; 
import { FaBusinessTime } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <>
    <div className='container1'>
      <div className='box-1'>
        <div  className='hover'> <IoIosCall className='hover' style={{marginRight:10,fontSize:18,postion:'relative',top:5 }}/>
Call on:77776345</div> 
        <div  className='hover'><FaBusinessTime className='hover' style={{marginRight:10,fontSize:18,postion:'relative',top:5 }} />
Open Hours:Mon-Fri</div> 
    </div>
    <div className='box-2'>
      <div  className='hover'>Facebook</div>
      <div  className='hover'>Instagram</div>
      <div  className='hover'>Twitter</div>
    </div>
    </div>
            <div className='navbar'>
              <div className='logo'></div>
        <ul>
          <li><Link to="/" className='navbar1'>Home</Link></li>
          <li><Link to="/Contact" className='navbar1'>Contact Us</Link></li>
          <li><Link to="/About" className='navbar1'>About</Link></li>
          <li className='navbar-drop'><Link to="/Service" className='navbar1' >Service</Link>
          




          <div className='dropdown'>
            <div className='dropdown-link'><Link to="/Service1" className='Link2' >Service 1</Link></div>
            <div className='dropdown-link'>Services 2</div>
            <div className='dropdown-link'> <Link to="/ServiceDetails" className='Link2' > Services Details</Link ></div>
          </div>


          </li>
          <li><Link to="/Projects" className='navbar1'>Projects</Link></li>        
        </ul>
        <div className='quote'>Get A Quote</div>
      </div>
    
     {/* <h1>{props.Data}</h1> */}
    </>
  )
}

export default Navbar
