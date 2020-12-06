let mysql = require('mysql');
const exec = require("child_process").exec;
const crypto = require('crypto');

const lightboxRoutes = (app, fs, creds) => {

    function connectDB() {

        let connection = mysql.createConnection({
            host: decrypt(creds.host),
            user: decrypt(creds.user),
            password: decrypt(creds.pass),
            database: decrypt(creds.db)
        });

        return connection;
    }


    // Save Reviews in DB
    app.post('/submitSubscriber', (request, response) => {

        let connection = connectDB();

        let email = request.body.subscriber;

        let tempDate = new Date();
        var d = tempDate.getDate();
        var m = tempDate.getMonth() + 1;
        var y = tempDate.getFullYear();

        var date = y + '-' + m + '-' + d;

        if (email) {

            connection.query(
                'INSERT INTO Subscribers (`email`, `date`) VALUES (' + connection.escape(email) + `,` + connection.escape(date) + ');',
                function (error, results, fields) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(results);
                        console.log('query executed')
                    }
                });
        }

        connection.end();
    });
};


function decrypt(data) {

    let key = "7234753778214125432A462D4A614E64";
    let iv = '597133743677397A';

    let decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
    let dec = decipher.update(data, 'hex', 'utf8');
    dec += decipher.final('utf8');

    return dec;
}

module.exports = lightboxRoutes;
