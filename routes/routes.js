const productRoutes = require('./productRoutes');
const reviewRoutes = require('./reviewRoutes');


const appRouter = (app, fs) => {

    //Add routes
    productRoutes(app, fs);
    reviewRoutes(app, fs);

};

module.exports = appRouter;
