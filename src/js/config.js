import firebase from 'firebase/app'

const config = {
	apiKey				: "AIzaSyBmefJeYWcAuiCKa-As-vKY9yr8VBHmg8I",
	authDomain			: "photo-portfolio-2c7ef.firebaseapp.com",
	databaseURL			: "https://photo-portfolio-2c7ef.firebaseio.com",
	projectId			: "photo-portfolio-2c7ef",
	storageBucket		: "photo-portfolio-2c7ef.appspot.com",
	messagingSenderId	: "576877525476",
	appId				: "1:576877525476:web:ef9a6626f08253233feff1",
	measurementId		: "G-NYZB3M0L5M"
}

const init = () => firebase.initializeApp(config)

init()
