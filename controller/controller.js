let model = require('../model/model');

const insertCat = (req,res) => {
    let cat = req.body;
    model.insertCat(cat, (err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Cat Successfully Added'});
        }
    });
}

const getAllCats = (req, res) => {
    model.getAllCats((err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Successful'});
        }
    });
}

module.exports = {insertCat, getAllCats}