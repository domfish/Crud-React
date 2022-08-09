import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateProduct from './Pages/CreateProduct';
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UpDateProduct from './Pages/UpDateProduct';
import Dashboard from './Pages/ListProduct';
import Login from './Pages/login';
import Register from './Pages/register';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/add' element={<CreateProduct />} />
        <Route path='/upDate' element={<UpDateProduct />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
