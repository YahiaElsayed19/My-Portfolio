import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' />
        <Route path='/about' />
        <Route path='/gallery' />
        <Route path='/contact' />
      </Routes>
    </>
  );
}

export default App;
