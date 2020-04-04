import * as firebase from 'firebase'

const config = {

        apiKey: "AIzaSyB4I5FhrP_kSKM93JXhSQ6zbc1zqmi4Ewk",
        authDomain: "react-blog-bca69.firebaseapp.com",
        databaseURL: "https://react-blog-bca69.firebaseio.com",
        projectId: "react-blog-bca69",
        storageBucket: "react-blog-bca69.appspot.com",
        messagingSenderId: "569152336299",
        appId: "1:569152336299:web:f92db092345b687b8ee2ee",
        measurementId: "G-E1CF5ZFFVC"
}

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export const database = firebase.database().ref('/posts')

