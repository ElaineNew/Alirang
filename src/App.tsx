import './App.css';
import { Menu } from './layouts/Menu';
import { Order } from './layouts/Order/Order';
import { Contact } from './layouts/Contact';
import { Navbar } from './layouts/Navbar';
import './css/public.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './layouts/Homepage';
import { Footer } from './layouts/Footer';

export const App = () => {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Menu /> */}
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
