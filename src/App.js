import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Register from './components/Register';

function App() {
  return (
    <>
    <Header />
    <Routes>
     <Route path="/" element={<Form />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;
