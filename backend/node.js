var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)


// const admin = require('firebase-admin');

// var serviceAccount = require('./heatmap-f5281-firebase-adminsdk-9x5q9-6c93800f1b.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// var db = admin.firestore();


// var ourDataset = [];
// var tempData = {};

// db.collection('features').get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.id, '=>', doc.data());
//       tempData = doc.data();
//       ourDataset.push(tempData);
//       console.log(JSON.stringify(ourDataset));
//     });
//   })
//   .catch((err) => {
//     console.log('Error getting documents', err);
//   });



var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'TxvRueOcLImIGVfJxzOhZ2Fkz',
    consumer_secret: '83aJJCLBjsqJUP9Lm38lMyVtIMXJvLAgBdqQmZ8MPyMeUUwgMD',
    access_token_key: '3297378398-0KjoFhlOmDCZ65Qp9XeJY1SXS4WLIMevEFnXNuO',
    access_token_secret: '62LvJZDLk7u7ONiNE0hxU8BNccDVdMRoDfwp4MKs9xciK'
});


var twitterParams = {screen_name: 'PolizeitickerLE', count: 5, tweet_mode:'extended'};

client.get('statuses/user_timeline', twitterParams, function(error, tweets, response) {

    if(error){
        console.log(error);
            return;
        }
    tweets.forEach(tweet => {
        if(tweet.retweeted_status) {tweet = tweet.retweeted_status;}
            console.log(tweet.full_text);            
        });
 });

