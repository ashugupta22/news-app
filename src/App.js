import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
