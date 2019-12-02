var firebaseConfig = {
    apiKey: "AIzaSyAn2xlzFeh22QDxleoKbvsAkDP_W9LE2WA",
    authDomain: "hjernescience.firebaseapp.com",
    databaseURL: "https://hjernescience.firebaseio.com",
    projectId: "hjernescience",
    storageBucket: "hjernescience.appspot.com",
    messagingSenderId: "4123538102",
    appId: "1:4123538102:web:771096f470eef078bd6c17",
    measurementId: "G-ZFEZT2CKKQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const body = document.body;
const button = document.getElementById('button');
const txt = document.getElementById('txt');


let i = 0;
let delay = 200;
let count = 100;

/* const max = 150;
const min = 100; */

// Get data from database
db.collection('science').doc('testDoc').onSnapshot(function (doc) {
    const data = doc.data()
    delay = data.delay;
    count = data.count;
});

// Reset userCount
db.collection('science').doc('testDoc').update({
    userCount: 0
})

// Generate random number between max and min
/* if (data.randomCount) {
    count = Math.floor(Math.random() * (max - min + 1)) + min;
} */


// Method to flash screen
function flashScreen() {
    // Increment userCount
    db.collection('science').doc('testDoc').update({
        userCount: firebase.firestore.FieldValue.increment(1)
    })
console.log(count);

    if (i == count) {
        // No delay
        setBackg()
        //txt.style.display = 'block';
        //button.style.display = 'none';
        // i = 0
    } else if (i < count) {
        // Include delay
        setTimeout(function () { setBackg(); }, delay);
        i++
    }
}

// Method to set bckg color
function setBackg() {
    body.style.backgroundColor = 'white'
    //button.style.color = 'black'
    setTimeout(function () {
        //  button.style.color = 'white'
        body.style.backgroundColor = 'black';
    }, delay)
}