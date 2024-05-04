import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../src/images/cropped-rentomatic_logo.png';
import axios from "axios";

const Navbar=()=>{

  const location=useLocation();
  const isServiceTab=location.pathname==='/service';
  const isActiveHomePage = location.pathname === '/';
  const [pageTitle,setPageTitle]=useState('Login');

  const navigate= useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then(res=>{
        if(res.data.valid){
            setPageTitle('Logout')
        }
        else{
            navigate('/login')
        }
    })
  })

  return(
    <>
          <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid " >
            <NavLink className="navbar-brand " to='/'><img src={logo} alt="logo" style={{width:'200px',height:'auto'}}/></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown" >
            <div className="ms-auto">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <NavLink to='/' className={`nav-link active ${isActiveHomePage ? 'active' : ''}`} aria-current="page" style={{textDecoration:'none',color:"black"}} 
                                    onMouseOver={(e) => {e.target.style.color = 'blue'; }}
                                      onMouseOut={(e) => {e.target.style.color = 'black';}}
                  >Home&nbsp;&nbsp;&nbsp;</NavLink>
                </li>
               
                <li className="nav-item dropdown">
                  {isServiceTab?(
                  <NavLink to="/service" className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration:'none',color:"black"}}
                       onMouseOver={(e) => {e.target.style.color = 'grey'; }}
                        onMouseOut={(e) => {e.target.style.color = 'grey';}}

                        disabled={location.pathname==='/service'}
                  >
                    Services&nbsp;&nbsp;&nbsp;
                  </NavLink>):
                  (
                    <NavLink to="/service" className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration:'none',color:"black"}}
                         onMouseOver={(e) => {e.target.style.color = 'blue'; }}
                          onMouseOut={(e) => {e.target.style.color = 'black';}}
  
                          disabled={location.pathname==='/service'}
                    >
                      Services&nbsp;&nbsp;&nbsp;
                    </NavLink>)}
                  <ul className="dropdown-menu "  aria-labelledby="navbarDropdownMenuLink">
                    <li><Link to="/service#pay-rent #pay-rent" className="dropdown-item " style={{textDecoration:'none',color:"black",backgroundColor:'white'}}
                          onMouseOver={(e) => {e.target.style.color = 'blue'; }}
                          onMouseOut={(e) => {e.target.style.color = 'black';}}
                           //onClick={() => navigateToSection('/service#pay-rent')}
                    >Pay Rent</Link></li>
                    <li><Link to="/service#electricity-bill " className="dropdown-item" style={{textDecoration:'none',color:"black",backgroundColor:'white'}}
                        onMouseOver={(e) => {e.target.style.color = 'blue'; }}
                        onMouseOut={(e) => {e.target.style.color = 'black';}}
                         //onClick={() => navigateToSection('/service#electricity-bill')}
                    >Pay Electricity Bill</Link></li>
                    <li><Link to="/service#gas-bill" className="dropdown-item" style={{textDecoration:'none',color:"black",backgroundColor:'white'}}
                        onMouseOver={(e) => {e.target.style.color = 'blue'; }}
                        onMouseOut={(e) => {e.target.style.color = 'black';}}
                         //onClick={() => navigateToSection('/service#gas-bill')}
                    >Pay Gas Bill</Link></li>
                    <li><Link to="/service#contact-seller" className="dropdown-item" style={{textDecoration:'none',color:"black",backgroundColor:'white'}}
                        onMouseOver={(e) => {e.target.style.color = 'blue'; }}
                        onMouseOut={(e) => {e.target.style.color = 'black';}}
                         //onClick={() => navigateToSection('/service#conatct-seller')}
                    >Contact Seller</Link></li>
                    <li><Link to="/service#maintenance" className="dropdown-item" style={{textDecoration:'none',color:"black",backgroundColor:'white'}}
                        onMouseOver={(e) => {e.target.style.color = 'blue'; }}
                        onMouseOut={(e) => {e.target.style.color = 'black';}}
                         //onClick={() => navigateToSection('/service#maintenance')}
                    >Maintenance And Service</Link></li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <NavLink to="/property" className="nav-link" style={{textDecoration:'none',color:"black"}}
                      onMouseOver={(e) => {e.target.style.color = 'blue'; }}
                      onMouseOut={(e) => {e.target.style.color = 'black';}}
                  >Property&nbsp;&nbsp;&nbsp;</NavLink>
                </li>
                {/* <li className="nav-item ">
                  <NavLink to="/contact us" className="nav-link" style={{textDecoration:'none',color:"black"}}
                      onMouseOver={(e) => {e.target.style.color = 'blue'; }}
                      onMouseOut={(e) => {e.target.style.color = 'black';}}
                  >Contact Us&nbsp;&nbsp;&nbsp;</NavLink>
                </li> */}
                <li className="nav-item ">
                  <NavLink to="/about us" className="nav-link" style={{textDecoration:'none',color:"black"}}
                      onMouseOver={(e) => {e.target.style.color = 'blue'; }}
                      onMouseOut={(e) => {e.target.style.color = 'black';}}
                  >About Us&nbsp;&nbsp;&nbsp;</NavLink>
                </li>

                <li className="nav-item ">
                {isActiveHomePage && pageTitle === 'Login' && (
        <NavLink to="/login" className="nav-link login" style={{textDecoration:'none'}} 
            onMouseOver={(e) => {e.target.style.color = 'blue'; }}
            onMouseOut={(e) => {e.target.style.color = 'black';}}
            >{pageTitle}</NavLink>
      )}

      {isActiveHomePage && pageTitle === 'Logout' && (
      <button
        onClick={() => {
          axios.post('http://localhost:3001/logout')
            .then(res => {
              if (res.data.Status === "Success") {
                // Redirect to the home page after successful logout
                console.log("hi")
                navigate('/');
                console.log('hello')
              } else {
                alert('Error occurred while logging out: ' + res.data.Message);
              }
            })
            .catch(error => {
              console.error("Error occurred during logout:", error);
              alert("Error occurred while logging out");
            });
        }}
        className="nav-link login"
        style={{ textDecoration: 'none' }}
        onMouseOver={(e) => { e.target.style.color = 'blue'; }}
        onMouseOut={(e) => { e.target.style.color = 'black'; }}
      >
        {pageTitle}
      </button>
    )}

                </li>
              </ul>
             </div>
            </div>
            </div>
          
        </nav>
        {/* <hr style={{color:'#c8dbfa'}}></hr> */}
        
        
    </>
  );
};

export default Navbar;