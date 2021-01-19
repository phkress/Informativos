import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter> 
      <NavBar/>
      <Routes  />
    </BrowserRouter>
  );
}

export default App;
