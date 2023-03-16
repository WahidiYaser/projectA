import React from 'react';
import './App.css';
import Page404 from './views/page404';
import HOME from './views/home';
import Layout from './components/Layout';
import DogInfo from './components/DogInfo';
import { Route, Routes } from 'react-router-dom';
import { DogContext } from './contexts/DogContexts';

function App() {
  return (
    // <DogContext.Provider value={{breedsArray, setBreedsArray}}> //then from every route i can get the statew's if i write const {breedsArray, setBreedsArray} = useContext(DogContext);
    <Routes>
      <Route path='*' element={<Page404 />} />
      <Route path='/' element={<Layout />}>
        <Route path='/' index element={<HOME />} />
        <Route path='/dog/:name' element={<DogInfo />}></Route>
      </Route>
    </Routes>
    /* </DogContext.Provider> */
  );
}

export default App;