const express = require('express');
const app = express();
let mysql = require('mysql');
const bodyParser = require("body-parser");
const exec = require("child_process").exec;
const crypto = require('crypto');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));


let connection;
let subscriberEmail;
let HOST, USER, PASS, DB;


// Calls config
exec("php config.php", function (error, stdout, stderr) {});


// Receives input from Config
app.post('/submit', (request, response) => {

    HOST = request.body.host;
    USER = request.body.user;
    PASS = request.body.password;
    DB = request.body.database;
});


// Waits on subscribe button to be pressed
app.post('/', (request, response) => {

    connection = mysql.createConnection({
        host: decrypt(HOST), // localhost - (Internal)  \  107.180.58.64 - (External)
        user: decrypt(USER),
        password: decrypt(PASS),
        database: decrypt(DB)
    });

    connection.connect(function (error) {
        if (error) console.log(error);
        else console.log('DB Connected!!');
    });


    subscriberEmail = request.body.subscriber;

    // (TRUNCATE TABLE Customers) resets the db row ids
    connection.query('INSERT INTO Customers (`email`) VALUES (' + connection.escape(subscriberEmail) + ');', function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(results);
            console.log('query executed')
        }
    });
    connection.end();
});


function decrypt(data) {

    let key = "7234753778214125432A462D4A614E64";
    let iv = '597133743677397A';

    let decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
    let dec = decipher.update(data,'hex','utf8');
    dec += decipher.final('utf8');

    return dec;
}

app.listen(3000, () => {
    console.log('Server-side code running');
});