const express = require('express');
const bodyParser = require('body-parser');
// router interface
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
// app is deleted
dishRouter.route('/')
// rest api endpoint
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

module.exports = dishRouter;