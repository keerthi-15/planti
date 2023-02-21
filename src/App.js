import Navbar from './components/Navbar';
import './App.scss';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className='leftnavigation'> 
      <Navbar />
      <WelcomePage />
    </div>
  );
}

export default App;
