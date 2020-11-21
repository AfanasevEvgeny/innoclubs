import React from 'react';
import './AppWrapper.scss';
import TopNav from "./Components/TopNav/TopNav";
import MenuNav from "./Components/Menu/MenuNav";
import Content from "./Components/Content/Content";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect, BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";

import Login from "./Components/Login/Login";

const App = (props) => {
    return (
        <BrowserRouter>
            <Route exact path="/">
                {window.loggedIn ? <Redirect to="/login"/> : <Login/>}
            </Route>
            <Route exact path='/login' render={() => <Login/>}/>
            <Route path='/main/' render={() =>
                <div className="AppWrapper">
                    <TopNav/>
                    <MenuNav/>
                    <Content ClubsData={props.AppState.ClubsData} MyMemberClubsData={props.AppState.MyMemberClubsData}
                             MyLeaderClubsData={props.AppState.MyLeaderClubsData}
                             dispatch={props.dispatch}

                    />
                </div>}/>
        </BrowserRouter>
    );
}

export default App;
