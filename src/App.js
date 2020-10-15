import React from 'react';
import './AppWrapper.css';
import TopNav from "./Components/TopNav/TopNav";
import MenuNav from "./Components/Menu/MenuNav";
import Content from "./Components/Content/Content";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="AppWrapper">
                <TopNav/>
                <MenuNav/>
                <Content ClubsData={props.AppState.ClubsData}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
