const NumbersController = require('./controllers/NumbersController');

module.exports = (app) => {
    app.get('/api/numbers', NumbersController.index); 
}