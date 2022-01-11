
import './App.css';
import { Navbar } from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
  <div>
    <Navbar />
    <div className='container'>
    <Shop />
    </div>
    </div>
  );
}

export default App;
