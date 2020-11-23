let mysql = require('mysql');
const exec = require("child_process").exec;
const crypto = require('crypto');


const reviewRoutes = (app, fs) => {

    let HOST, USER, PASS, DB;

    exec("php config.php", function (error, stdout, stderr) {});

    app.post('/protect', (request, response) => {
        HOST = request.body.host;
        USER = request.body.user;
        PASS = request.body.password;
        DB = request.body.database;
    });


    function connectDB() {

        let connection = mysql.createConnection({
            host: decrypt(HOST),
            user: decrypt(USER),
            password: decrypt(PASS),
            database: decrypt(DB)
        });

        return connection;
    }


    // Get Reviews from DB
    app.get('/getReviews/:bookTitle', (request, response) => {

        let connection = connectDB();

        var bookTitle = request.params.bookTitle;

        connection.query("SELECT * FROM `Reviews` WHERE `isApproved` is true AND `book_name` = '" + bookTitle + "' ORDER BY date DESC;",

            function (error, results, fields) {
                if (error) {
                    console.log(error);
                    response.send(error);
                } else {
                    response.send(results);
                    response.end();
                }
            });

        connection.end();
    });



    // Save Reviews in DB
    app.post('/submitReview', (request, response) => {

        let connection = connectDB();


        let book = request.body.bookName;
        let cName = request.body.reviewName;
        let desc = request.body.reviewInfo;
        let rating = request.body.starRating;

        let tempDate = new Date();
        var d = tempDate.getDate();
        var m = tempDate.getMonth() + 1;
        var y = tempDate.getFullYear();

        var date = y + '-' + m + '-' + d;

        let isApproved = false;

        connection.query(
            'INSERT INTO Reviews (`book_name`, `reviewer_name`, `description`, `rating`, `date`, `isApproved`) VALUES (' + connection.escape(book) + `,` + connection.escape(cName) + `,` + connection.escape(desc) + `,` + connection.escape(rating) + `,` + connection.escape(date) + `,` + connection.escape(isApproved) + ');',
            function (error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(results);
                    console.log('query executed')
                }
            });

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

module.exports = reviewRoutes;
