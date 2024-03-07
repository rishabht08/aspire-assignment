import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import HomePage from './Views/Home';
import Cards from './Views/Cards/Cards';
import Payments from './Views/Payments';
import Credit from './Views/Credit';
import Settings from './Views/Settings';
import "./_style.scss"
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div className='pilot'>
      <Sidebar/>

      <div className='contents'>
          <Routes>
            <Route path="/aspire-assignment" element = {<HomePage/>}/>
            <Route path="/cards" element = {<Cards/>}/>
            <Route path="/payments" element = {<Payments/>}/>
            <Route path="/credit" element = {<Credit/>}/>
            <Route path="/settings" element = {<Settings/>}/>
          </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
