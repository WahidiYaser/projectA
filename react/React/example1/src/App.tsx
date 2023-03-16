import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Page404 from './views/page404';
import HOME from './views/home';
import ABOUT from './views/About';
import Layout from './components/Layout';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Page404 />} />
      <Route path='/' element={<Layout />}>
            <Route path='/' index element={<HOME />} />
            <Route path='/about' index element={<ABOUT />} />
      </Route>
    </Routes>
  );
}

export default App;