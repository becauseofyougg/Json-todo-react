import {Navbar, Nav, NavDropdown, Container  } from 'react-bootstrap'
import image from '../icons/image1.png';
import logo from '../icons/Vector.png';


const NavbarMenu = () => {  
    return (        
      <div className='nav-menu'>
        <Navbar bg="light" expand="lg" sticky="top">
        <Container>          
          <Navbar.Brand href="#home" className='tasks'>
          <img src={logo} alt='logo' className='logo'/>
          Tasks
          </Navbar.Brand>            
              <Nav.Link href="#account" className="justify-content-end">Leanne Graham
              <img src={image} alt="man" className='picture'/>
              <NavDropdown id="basic-nav-dropdown" className="graham">                             
              </NavDropdown> 
              </Nav.Link>       
        </Container>
      </Navbar>
      </div>
    )
}

export default NavbarMenu
