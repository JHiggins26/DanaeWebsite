const express = require('express');
let mysql = require('mysql');
const bodyParser = require("body-parser");
const exec = require("child_process").exec;
const crypto = require('crypto');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
const fs = require('fs');


const app = express();

// serving HTML
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));


// app.use(function(req, res, next) {
//       res.header("Access-Control-Allow-Origin", '*');
//       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//       next();
// });
    
app.use(function(req, res, next) {
    // if ((req.get('X-Forwarded-Proto') !== 'https')) {

    if (!req.secure) {
        console.log('Request isSecure: ' +  req.secure);
        console.log('Request HOST: ' +  req.get('Host'));
        console.log('Request URL Path: ' +  req.url);
        console.log(1);

      return res.redirect('https://' + req.get('Host') + req.url);

    } else
    
    console.log('Request isSecure: ' +  req.secure);
    console.log('Request HOST: ' +  req.get('Host'));
    console.log('Request URL Path: ' +  req.url);
    console.log(2);

      next();  
  });

const routes = require('./routes/routes.js')(app, fs);


app.listen(3000, () => {
    console.log('Server running...');
});
