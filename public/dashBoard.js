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

db.collection('science').doc('testDoc').onSnapshot(function (doc) {
    const data = doc.data()
    $('#countTxt').text(data.count);
    $('#delayTxt').text(data.delay);
    $('#userCountTxt').text(data.userCount);
});

$('body').on('click', '[data-editable]', function () {

    var $el = $(this);
    const id = $el[0].id

    var $input = $('<input/>').val($el.text());
    $el.replaceWith($input);

    var save = function () {
        var $p = $(`<p data-editable id="${id}"/>`).text($input.val());
        $input.replaceWith($p);

        db.collection('science').doc('testDoc').update({
            count: $('#countTxt').text(),
            delay: $('#delayTxt').text()
        })
    };

    $input.one('blur', save).focus();

});

$('#button').on('click', function () {

    // Reset userCount
    db.collection('science').doc('testDoc').update({
        userCount: 0
    })

});