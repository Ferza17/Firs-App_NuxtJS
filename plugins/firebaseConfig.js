import * as firebase from 'firebase/app';
//import firestore from 'firestore';
// /import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyANwEpYIH1EMXiy8k2UXDhOPzq-QHLtTTw' || process.env.fbAPIKey,
    databaseURL: 'https://nuxt-blog-291a4.firebaseio.com',
    projectId: 'nuxt-blog-291a4',
}

const app = firebase.app.length
    ?  firebase.app()
    : firebase.initializeApp(firebaseConfig);

export const db = app.database();