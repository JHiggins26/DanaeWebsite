const productRoutes = require('./productRoutes');
const reviewRoutes = require('./reviewRoutes');
const lightboxRoutes = require('./lightboxRoutes');
const exec = require("child_process").exec;


const appRouter = (app, fs) => {

    var HOST, USER, PASS, DB;

    exec("php config.php", function (error, stdout, stderr) {});

    app.post('/protect', (request, response) => {

        HOST = request.body.host;
        USER = request.body.user;
        PASS = request.body.password;
        DB = request.body.database;

        var creds = {
            host: HOST,
            user: USER,
            pass: PASS,
            db: DB,
        }

        lightboxRoutes(app, fs, creds);
        reviewRoutes(app, fs, creds);
        productRoutes(app, fs, creds);
    });

};

module.exports = appRouter;
