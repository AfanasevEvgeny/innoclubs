// import ReactDOM from "react-dom";
// import React from "react";
// import App from "./App";
// import state from "../../src/Redux/state";
console.log("hello from main.js");

// Firebase configuration
var firebaseConfig = {
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
const db_root = firebase.database().ref();
// db_root.child('clubs').child('sb club').child('description').set('new description');

// todo ...sign-in here...

// User creds
let USER_NAME = "aladdinych"; // hardcode / that's when we get the user_name
$("#your_name_holder").html("You are: " + USER_NAME + "\n");

update_my_clubs(); // get all the clubs (cuz it's a no-parameter call)
update_my_clubs(USER_NAME, "member"); // get USER_NAME's clubs (member)
update_my_clubs(USER_NAME, "leader"); // get USER_NAME's clubs (lead)
update_my_clubs(USER_NAME); // get USER_NAME's clubs (lead)

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

function update_my_clubs(user_name, role) // role -> perm_mask in the future
{
    if (user_name)
    {
        let user_clubs;
        // Request user's clubs
        db_root.child('users').child(user_name).child('clubs').on('value', function (uclubs_snap)
        {
            // Getting the list of all user's clubs from DB & parsing it into JS object
            user_clubs = uclubs_snap.val();
            user_clubs = user_clubs.split(', ');
            console.log('user clubs', user_clubs);

            // Traverse every of the user's clubs and request info from DB for each of them. Then show it to the user
            let clubs_to_show = []; // temp array of clubs that we'll show to the user
            for (let i = 0; i < user_clubs.length; i++)
            {
                // request to DB
                db_root.child('clubs').child(user_clubs[i]).on('value', function (club_info_snap)
                {
                    // requested data for the i-th club
                    let club = club_info_snap.val();
                    console.log('info retrieved from db:', club);

                    if (role === "leader" && club.owner === user_name ||
                        role === "member" && club.owner !== user_name ||
                        role === undefined) // both member and leader - clubs
                    {
                        clubs_to_show.push({
                            id: i,
                            name: user_clubs[i],
                            brief: club.brief,
                            description: club.description,
                            logo_b64: club.logo_b64
                        });
                    }

                    if (i === user_clubs.length - 1)
                    {
                        if (role === undefined)
                        {
                            state.MyClubsData = clubs_to_show;
                        }
                        else if (role === "member")
                        {
                            state.MyMemberClubsData = clubs_to_show;
                        }
                        else if (role === "leader")
                        {
                            state.MyLeaderClubsData = clubs_to_show;
                        }
                        window.can_render = true;
                    }
                });
            }
            if (role === undefined)
            {
                state.MyClubsData = clubs_to_show;
            }
            else if (role === "member")
            {
                state.MyMemberClubsData = clubs_to_show;
            }
            else if (role === "leader")
            {
                state.MyLeaderClubsData = clubs_to_show;
            }
            window.can_render = true;
        });
    }
    else
    {
        let all_clubs;
        // Request all the clubs
        db_root.child('clubs').on('value', function (clubs_snap)
        {
            all_clubs = clubs_snap.val();
            console.log('all clubs:', all_clubs);

            let clubs_to_show = [];
            let i = 0;
            for (let club_name in all_clubs)
            {
                let club = all_clubs[club_name]; // current club
                clubs_to_show.push({
                    id: i++,
                    name: club_name,
                    brief: club.brief,
                    description: club.description,
                    logo_b64: club.logo_b64
                });
            }

            state.ClubsData = clubs_to_show;
            // that's when you render React
            console.log('new club data', state.ClubsData);
        });
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
            for (let e_id in all_events)
            {
                let e = all_events[e_id];
                if (e.type === 1 && return_type === 1)
                {
                    res.push(e);
                }
                else if (e.type === 2 && return_type === 2)
                {
                    res.push(e);
                }
            }
        }
        else
        {
            res = all_events;
        }

        cb(res);
    });
    return true;
};

window.onload = function ()
{

    state.get_events = get_events;

    state.get_events("sb_club", 1, (e_list) =>
    {
        console.log('HELLO FROM GET EVENTS', {e_list});
    });
}