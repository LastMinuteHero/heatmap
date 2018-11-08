# heatmap
Heatmap Webapplication for the visualization of criminal activity and location based alerts

Python/Node Backend
JS Webapplication
Firebase Realtime Database
Twitter API, Presseportal API
 (so far planned)

### Connecting to Firebase & Twitter
Connecting to Firebase (from firebase-console):
* go to Settings (next to "project overview")
* go to "service accounts"
* generate private-key
* insert json file to /backend folder

Connecting to Twitter (from twitter dev-portal):
* go to the application
* go to keys and tokens
* insert tokens into:
```javascript
var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});
```


 ### License

ElaAdmin (Frontend Template) is licensed under The MIT License (MIT). Which means that you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the final products. But you always need to state that Colorlib is the original author of this template.
