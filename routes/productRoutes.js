const productRoutes = (app, fs) => {

    const dataPath = './routes/products.json';

    app.get('/products', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));

        });
    });
};


module.exports = productRoutes;
