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
            <Nav.Link href='#' id='newstories' onClick={props.handleClickStoryButton}>
              New
            </Nav.Link>
            <Nav.Link href='#' id='topstories' onClick={props.handleClickStoryButton}>
              Top
            </Nav.Link>
            <Nav.Link href='#' id='beststories' onClick={props.handleClickStoryButton}>
              Best
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
