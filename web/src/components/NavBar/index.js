
import { Navbar, Nav, NavDropdown } from 'react-bootstrap/';
import './styles.css';

function NavBar() {

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/">
        <img src="/img/logo.png" alt="Logo WIPI" style={{ maxWidth: 60, marginRight: 24 }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto">
          <NavDropdown title="Phoenix" id="basic-nav-dropdown">
            <NavDropdown.Item target="_blank" href="https://sistema.wipi.com.br/frmPHLogin/">Sistema</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item target="_blank" href="https://areadoassinante.winfnet.com.br/frmPHSPLOGIN/">Area Assinante WFN</NavDropdown.Item>
            <NavDropdown.Item target="_blank" href="https://areadoassinante.wipi.com.br/frmPHSPLOGIN/">Area Assinante  WIPI</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link target="_blank" href="https://webmail.wipi.com.br/">Webmail</Nav.Link>
          <Nav.Link target="_blank" href="https://pontoweb.nasajon.com.br/yipi2/">Nasajon</Nav.Link>
          <Nav.Link target="_blank" href="https://winfnet.smartzap.com.br/painel/index.php">Whatsapp</Nav.Link>
          <Nav.Link target="_blank" href="https://www.bitrix24.net/">Bitrix</Nav.Link>
          <Nav.Link target="_blank" href="https://docs.google.com/spreadsheets/d/1hlKj1oJ1_vUjhz2B-hyKVrUkYw0FmyTl8BXA_I18Cu4/edit#gid=0">Massiva</Nav.Link>
          <Nav.Link target="_blank" href="https://docs.google.com/forms/d/1arN6FemyuJq_6DCjlZC5VTbno07AwlQ6FijsbUiYFGw/viewform?edit_requested=true">Incidentes</Nav.Link>

        </Nav>
        {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
