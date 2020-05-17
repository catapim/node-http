const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());
promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("I will send all the promos to you!!");
    })
    .post((req, res, next) => {
        res.end(
        "will add the promo: " +
            req.body.name +
            " with details: " +
            req.body.description
        );
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /promo");
    })
    // danger zone
    .delete((req, res, next) => {
        res.end("Deleting all the promos in /promo!!");
    });

// promo ID
promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        next();
    })

    .get((req, res, next) =>{
        res.end("I will send details of the specified promo: " + req.params.promoId + " to you. ");
    })

    .post((req, res, next) => {
        res.end("POST operation is not supported on /promo/" + req.params.promoId);
    })

    .put((req, res, next) => {
        res.write("Updating the promo: " + req.params.promoId + "\n");
        res.end("I will update the specified promo: " + req.body.name + "with these details: " + req.body.description);
    })

    .delete(function (req, res, next) {
        res.end('Deleting promo: ' + req.params.promoId);
    })

module.exports = promoRouter;