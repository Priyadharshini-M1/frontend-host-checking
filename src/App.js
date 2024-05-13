import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import LoginForm from './LoginForm';
import Signup from './Signup';
import Home from './Home';
import Book from './Book';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/LoginForm' element={<LoginForm/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Book' element={<Book/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
