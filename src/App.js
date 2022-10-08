import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' />
        <Route path='/gallery' />
        <Route path='/contact' />
      </Routes>
    </>
  );
}

export default App;
