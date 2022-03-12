import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg' className='mb-3'>
      <Container>
        <Navbar.Brand as={Link} className='issue-brand' to='/'>
          Issue Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/issues'>
              Issues
            </Nav.Link>
            <Nav.Link as={NavLink} to='/add'>
              Add Issue
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
