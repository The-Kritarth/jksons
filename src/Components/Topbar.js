import { React} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Logo from '../Assets/Logo.png'

function Topbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="container-fluid" fixed="top" style={{backgroundColor:'white'}}>
      <Navbar.Brand >
        <Link aria-current="page" to="/">
        <img
          src={Logo}
          width="160px"
          height="60px"
          className="d-inline-block align-top"
          alt="Logo"
          style={{marginLeft:'20%'}}
        />
        </Link>
        
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{borderColor:'white',backgroundColor:'white'}}/>
          <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:'right',marginRight:'5%',marginLeft:'2%'}}>
            <Nav>
              <ul className="navbar-nav">
                {/* <li className="nav-item" ><Link className="nav-link" aria-current="page" to="/"><img src={Logo} alt="" style={{height:'60px',width:'130px'}}/></Link></li> */}
                <li className="nav-item" ><Link className="nav-link" aria-current="page" to="/"><b>Home</b></Link></li>
                <li className="nav-item" ><Link className="nav-link" aria-current="page" to="/About"><b>About</b></Link></li> 
                <li className="nav-item" ><Link className="nav-link" aria-current="page" to="/Product"><b>Products</b></Link></li> 
                
                <li className="nav-item" ><Link className="nav-link" aria-current="page" to="/Career"><b>Career</b></Link></li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default Topbar
