import React from 'react';
import logo from './logo.svg';
import './AppWrapper.css';
import Content from "./Components/Content/Content";
import NavBarLeft from "./Components/NavBarLeft/NavBarLeft";
import TopNav from "./Components/TopNav/TopNav";
import Footer from "./Components/Footer/Footer";

const App =()=>{
  return (
      <div className="AppWrapper">
          <TopNav/>
          <NavBarLeft/>
          <Content/>
          <Footer/>
      </div>
  );
}

export default App;
