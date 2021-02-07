const mongoose = require('mongoose');
//const Air = mongoose.model('Air');

const index = (req, res) => {

    return res
    .status(200)
    .render('index', {
        title : 'Index'
    });
}

const create = (req, res) => {

    return res
    .status(200)
    .render('event-form', {
        title : 'Créer un Incident'
    });
}

const doCreate = (req, res) => {

    return res
    .status(200)
    .render('event-form', {
        title : 'Créer un Incident'
    });
}

module.exports = {
    index,
    create,
    doCreate
}