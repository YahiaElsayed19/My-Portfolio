import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
      </Routes>
    </>
  );
}

export default App;
