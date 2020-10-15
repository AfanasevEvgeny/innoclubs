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

// User creds
let user_name = "aladdinych"; // hardcode
let user_inno_mail;
let user_clubs; // club identificators of all the clubs of the user
db_root.child('users').child('aladdinych').child('clubs').on('value', function (uclubs_snap)
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

            clubs_to_show.push({
                id: i,
                name: user_clubs[i],
                brief_description: club.brief
            });

            if (i === user_clubs.length - 1)
            {
                state.ClubsData = clubs_to_show;
                console.log("new state clubs data", state.ClubsData);
            }
        });
    }

    // change visual: state.ClubsData = ...
    console.log(state.ClubsData);
});