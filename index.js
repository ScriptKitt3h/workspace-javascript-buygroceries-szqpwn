// Import stylesheets
import './style.css';

// Import javascript files
import './js/add-element.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: 'AIzaSyBRTPEm0pj0sBtns4u9DcLGpbBuIoDlWe4',
  authDomain: 'csci-225-fall21.firebaseapp.com',
  projectId: 'csci-225-fall21',
  storageBucket: 'csci-225-fall21.appspot.com',
  messagingSenderId: '164480810963',
  appId: '1:164480810963:web:c91f857d7c9bb718fff926',
  measurementId: 'G-GJQQ8R5FY0',
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$('#save').click(function () {
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content

  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('mygrocerylist').add({
      item: value, //?
    });
  });
});
