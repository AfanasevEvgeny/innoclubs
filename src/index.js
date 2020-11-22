import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/state'
import $ from 'jquery'
import firebase from 'firebase';

// import ReactDOM from "react-dom";
// import React from "react";
// import App from "./App";
// import state from "../../src/Redux/state";
console.log("hello from main.js");
// Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyAlj67iRYa59NAxQh_tcUR3cAJfY3etdvE",
    authDomain: "innoclubs.firebaseapp.com",
    databaseURL: "https://innoclubs.firebaseio.com",
    projectId: "innoclubs",
    storageBucket: "innoclubs.appspot.com",
    messagingSenderId: "319926951289",
    appId: "1:319926951289:web:602a3943fce36ea02ba3a8",
    measurementId: "G-0DGJZQQV04"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db_root = firebase.database().ref();
// db_root.child('clubs').child('sb club').child('description').set('new description');

// todo ...sign-in here...

// User creds
//window.USER_NAME = "UNDEFINED USER"; // hardcode / that's when we get the user_name
window.USER_NAME = "aladdinych";
update_my_clubs(); // get all the clubs (cuz it's a no-parameter call)
// update_my_clubs(window.USER_NAME, "member"); // get USER_NAME's clubs (member)
// update_my_clubs(window.USER_NAME, "leader"); // get USER_NAME's clubs (lead)
// update_my_clubs(window.USER_NAME); // get USER_NAME's clubs (lead)

/**
 * procedure that fetches Clubs data from Database and loads it into state
 * => straight to react
 *
 * @param user_name
 * if not undefined => returns list of all the clubs in the database
 * if there's user_name => returns list of all the clubs for this user
 *
 * @param role
 * if role = member => returns all the clubs for this user, where this user has member permissions
 * if role = leader => returns all the clubs for this user, where this user has leader permissions
 * if role = undef => returns all the clubs for this user, regardless of their role in these clubs
 */
update_my_clubs(window.USER_NAME, "member"); // get USER_NAME's clubs (member)
update_my_clubs(window.USER_NAME, "leader"); // get USER_NAME's clubs (lead)
update_my_clubs(window.USER_NAME);

function update_my_clubs(user_name, role) // role -> perm_mask in the future
{
    if (user_name !== undefined) {
        console.log('updating clubs for', user_name);
        let user_clubs;
        // Request user's clubs
        let fetch = _ => {
            // Traverse every of the user's clubs and request info from DB for each of them. Then show it to the user
            let clubs_to_show = []; // temp array of clubs that we'll show to the user
            for (let i = 0; i < user_clubs.length; i++)
            {
                // request to DB
                db_root.child('clubs').child(user_clubs[i]).on('value', function (club_info_snap)
                {
                    // requested data for the i-th club
                    let club = club_info_snap.val();
                    // console.log('info retrieved from db:', club);

                    if (club === null)
                    {
                        return;
                    }

                    if (role === "leader" && club.owner === user_name ||
                        role === "member" && club.owner !== user_name ||
                        role === undefined) // both member and leader - clubs
                    {
                        clubs_to_show.push({
                            id: i,
                            name: user_clubs[i],
                            brief: club.brief,
                            description: club.description,
                            logo_b64: club.logo_b64,
                            events: club.events,
                            member_list: club.member_list,
                        });
                    }

                    if (i === user_clubs.length - 1) {
                        if (role === undefined) {
                            store.state.MyClubsData = clubs_to_show;
                        } else if (role === "member") {
                            store.state.MyMemberClubsData = clubs_to_show;
                        } else if (role === "leader") {
                            store.state.MyLeaderClubsData = clubs_to_show;
                        }
                        window.can_render = true;
                    }
                });
            }
            if (role === undefined)
            {
                store.state.MyClubsData = clubs_to_show;
            }
            else if (role === "member")
            {
                store.state.MyMemberClubsData = clubs_to_show;
            }
            else if (role === "leader")
            {
                store.state.MyLeaderClubsData = clubs_to_show;
            }
            window.can_render = true;
        };
        db_root.child('users').child(user_name).child('clubs').on('value', function (uclubs_snap) {
            // Getting the list of all user's clubs from DB & parsing it into JS object
            // try {
            user_clubs = uclubs_snap.val();
            if (user_clubs === null) {
                return;
            }
            user_clubs = user_clubs.split(',');
            fetch();
            // }
            // catch(e) {console.log('ERROR!', e)};
        });
    } else {
        let all_clubs;
        // Request all the clubs
        db_root.child('clubs').on('value', function (clubs_snap) {
            all_clubs = clubs_snap.val();
            // console.log('all clubs:', all_clubs);

            let clubs_to_show = [];
            let i = 0;
            for (let club_name in all_clubs) {
                let club = all_clubs[club_name]; // current club
                clubs_to_show.push({
                    id: i++,
                    name: club_name,
                    brief: club.brief,
                    description: club.description,
                    logo_b64: club.logo_b64,
                    events: club.events,
                    member_list: club.member_list, // запрашиваем мембер лист -- лист всех мемберов/лидеров клуба
                });
            }

            store.state.ClubsData = clubs_to_show;
            // that's when you render React
            console.log('new club data', store.state.ClubsData);
        });
    }
}

// setInterval(_=>{
//     console.log(store.state);
// })

export function enter_club(club_name) {
    let user_clubs = store.state.MyClubsData.map(x => x.name);
    console.log('user-clubs from enter_club: ', user_clubs);

    if (user_clubs.length !== 0 && user_clubs.indexOf(club_name) === -1) {
        if (user_clubs.indexOf(club_name) === -1) {
            user_clubs.push(club_name);
            let temp = new Set(user_clubs);
            user_clubs = Array.from(temp);
            db_root
                .child('users')
                .child(window.USER_NAME)
                .child('clubs')
                .set(user_clubs.join(','));
        }

        let the_club = store.state.ClubsData.find(x => x.name === club_name);
        let member_list = [...the_club.member_list.split(','), window.USER_NAME];
        db_root
            .child('clubs')
            .child(club_name)
            .child('member_list')
            .set(member_list.join(','));

        // update_my_clubs(); // get all the clubs (cuz it's a no-parameter call)
        update_my_clubs(window.USER_NAME, "member"); // get USER_NAME's clubs (member)
        // update_my_clubs(USER_NAME, "leader"); // get USER_NAME's clubs (lead)
        // update_my_clubs(USER_NAME); // get USER_NAME's clubs (lead)
    }
    else
    {
        console.log('WE ARE ALREADY A MEMBER OF THIS CLUB');
        console.log('SO WE LEAVE IT AS IS');
    }
}


export function leave_club(club_name)
{
    let user_clubs = store.state.MyClubsData.map(x => x.name);

    if (user_clubs.length !== 0 && user_clubs.indexOf(club_name) === -1)
    {
        console.log('WE ALREADY LEFT THE CLUB');
        console.log('SO WE LEAVE IT AS IS');
    }
    else
    {
        let the_club_ind = user_clubs.indexOf(club_name);
        while (the_club_ind !== -1)
        {
            user_clubs.splice(the_club_ind, 1);
            the_club_ind = user_clubs.indexOf(club_name);
        }

        db_root
            .child('users')
            .child(window.USER_NAME)
            .child('clubs')
            .set(user_clubs.join(','));

        let the_club = store.state.ClubsData.find(x => x.name === club_name);
        let member_list = the_club.member_list.split(',');
        let the_user_ind = member_list.indexOf(window.USER_NAME);
        if (the_user_ind !== -1) {
            member_list.splice(the_user_ind, 1);
            db_root
                .child('clubs')
                .child(club_name)
                .child('member_list')
                .set(member_list.join(','));
        }

        // update_my_clubs(); // get all the clubs (cuz it's a no-parameter call)
        update_my_clubs(window.USER_NAME, "member"); // get USER_NAME's clubs (member)
        // update_my_clubs(USER_NAME, "leader"); // get USER_NAME's clubs (lead)
        // update_my_clubs(USER_NAME); // get USER_NAME's clubs (lead)
    }
}


let get_events = async function (club_name, return_type, cb)
{
    await db_root.child('events').child(club_name).on('value', clubs_snap =>
    {
        let all_events = clubs_snap.val();
        console.log('all events:', all_events);

        let res = [];
        if (return_type !== 0)
        {
            for (let e_id in all_events) {
                let e = all_events[e_id];
                if (e.type === 1 && return_type === 1) {
                    res.push(e);
                } else if (e.type === 2 && return_type === 2) {
                    res.push(e);
                }
            }
        } else {
            res = all_events;
        }


        cb(res);
        store.showEvents();

    });
    return true;
};


let auth = firebase.auth();


export function authenticate(E, P) {
    let email = E;
    let pass = P;
    auth.signInWithEmailAndPassword(email, pass)
        .catch(err => {
            console.log(err);
        });
    /*auth.createUserWithEmailAndPassword(email, pass)
        .catch(err => {
            console.log(err);
        });*/

    auth.onAuthStateChanged(fbUser => {
        console.log('somethign', email, pass);
        if (fbUser) {
            console.log('success login', {fbUser});
            window.loggedIn = true;
            // window.USER_NAME = fbUser.email.split('@')[0];
            console.log('window user name', window.USER_NAME);

            update_my_clubs();
            update_my_clubs(window.USER_NAME, "member");
            update_my_clubs(window.USER_NAME, "leader");
            update_my_clubs(window.USER_NAME);
        } else {
            console.log('not logged in');
            alert('Incorrect password :c    Try again!');
            // window.loggedIn = false;
        }
        // console.log({ userData });
    });
}


export function signout() {
    auth.signOut();
    store.state.ClubsData = [];
    store.state.MyClubsData = [];
    store.state.MyMemberClubsData = [];
    store.state.MyLeaderClubsData = [];
}


window.onload = function () {
    store.state.get_events = get_events;
    store.state.get_events("sb_club", 1, (e_list) => {
        console.log('HELLO FROM GET EVENTS', {e_list});
    });
};

let rerenderEntireTree = () => {
    ReactDOM.render( // сделай рабочую версию -- мне надо тестануть //блччч щас сотри лишнее
        <React.StrictMode>
            <App AppState={store.state} dispatch={store.dispatch}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

window.try_render = setInterval(function () {
    if (window.can_render) {
        console.log('YES I CAN RENDER NOW FINALLY!!!!!!!!');
        rerenderEntireTree(store.state)
        store.subscribe(rerenderEntireTree);
        clearInterval(window.try_render);
        window.try_render = undefined;
    }

}, 200);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
