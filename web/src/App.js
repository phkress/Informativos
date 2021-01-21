import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap/'
import Routes from './routes';
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Container>
        <Jumbotron style={{ paddingTop: '1rem' }}>
          <Routes />
        </Jumbotron>
      </Container>

    </BrowserRouter>
  );
}

export default App;
