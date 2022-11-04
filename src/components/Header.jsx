import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Navbar style={{ backgroundColor: '#ff6600' }} expand='lg'>
      <Container>
        <Navbar.Brand href='#'>
          <span className='text_ring'>&nbsp;H&nbsp;</span> Hacker News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#' id='newstories'>
              New
            </Nav.Link>
            <Nav.Link href='#' id='topstories'>
              Top
            </Nav.Link>
            <Nav.Link href='#' id='beststories'>
              Best
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
