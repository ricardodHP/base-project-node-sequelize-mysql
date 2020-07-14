const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// create and save a new tutorial
exports.create = (req, res) => {

}

// Retrieve all tutorials from the database
exports.findAll = (req, res) => {

}

// Find a single tutorial with an id
exports.findOne = (req, res) => {

}

// Update a tutorial by the id in the request
exports.update = (req, res) => {

}

// Delete a tutorial with the specified id in the request
exports.delete = (req, res) => {

}

// Delete all published tutorials
exports.deleteAll = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty"
        });
    }

    // Create a tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    // Save tutorial in the database
    Tutorial.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the tutorial"
            })
        })
}

