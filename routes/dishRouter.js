const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("will send all the dishes to you!!");
    })
    .post((req, res, next) => {
        res.end(
        "will add the dish: " +
            req.body.name +
            " with details: " +
            req.body.description
        );
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /dishes");
    })
    // danger zone
    .delete((req, res, next) => {
        res.end("Deleting all the dishes in /dishes!!");
    });

// DISH ID
dishRouter.route('/dishes/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        next();
    })

    .get((req, res, next) =>{
        res.end("will send details of the specified dish: " + req.params.dishId + " to you. ");
    })

    .post((req, res, next) => {
        res.end("POST operation is not supported on /dishes/" + req.params.dishId);
    })

    .put((req, res, next) => {descri
        res.write("Updating the dish: " + req.params.dishId + "\n");
        res.end("will update the specified dish: " + req.body.name + "with these details: " + req.body.description);
    })

    .delete(function (req, res, next) {
        res.end('Deleting dish: ' + req.params.dishId);
    })

module.exports = dishRouter;