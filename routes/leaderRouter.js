const express = require('express');
const bodyParser = require('body-parser');

const leaderRoute = express.Router();

leaderRoute.use(bodyParser.json());
leaderRoute.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("will send all the Leaders to you!!");
    })
    .post((req, res, next) => {
        res.end(
        "will add the leader: " +
            req.body.name +
            " with details: " +
            req.body.description
        );
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /Leaders");
    })
    // danger zone
    .delete((req, res, next) => {
        res.end("Deleting all the Leaders in /Leaders!!");
    });

// leader ID
leaderRoute.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        next();
    })

    .get((req, res, next) =>{
        res.end("will send details of the specified leader: " + req.params.leaderId + " to you. ");
    })

    .post((req, res, next) => {
        res.end("POST operation is not supported on /Leaders/" + req.params.leaderId);
    })

    .put((req, res, next) => {
        res.write("Updating the leader: " + req.params.leaderId + "\n");
        res.end("will update the specified leader: " + req.body.name + "with these details: " + req.body.description);
    })

    .delete(function (req, res, next) {
        res.end('Deleting leader: ' + req.params.leaderId);
    })

module.exports = leaderRoute;