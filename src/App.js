import React from 'react';
import logo from './logo.svg';
import './AppWrapper.css';
import TopNav from "./Components/TopNav/TopNav";
import MenuNav from "./Components/Menu/MenuNav";
import Content from "./Components/Content/Content";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="AppWrapper">

            <TopNav/>
            <MenuNav/>
            <Content/>
      </div>
  );
}

export default App;
