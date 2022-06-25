import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyAJVH4dQMUZVdwNq7osXAldI9jc7n1NdlA",
        authDomain: "adsf-95b53.firebaseapp.com",
        databaseURL: "https://adsf-95b53-default-rtdb.firebaseio.com",
        projectId: "adsf-95b53",
        storageBucket: "adsf-95b53.appspot.com",
        messagingSenderId: "739066255282",
        appId: "1:739066255282:web:eefce7a1c1c90ee5aaf6ab"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();