import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Routes from './routes/Router';

function App() {
  const routing = useRoutes(Routes);
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <div>
        {routing}
      </div>
      <button className='btn btn-primary'>Button <i class="bi bi-apple"></i></button>

    </div>
  );
}

export default App;
