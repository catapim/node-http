const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

// PROMO
promoRouter.route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("I will send all the promotions to you!!");
  })
  .put((req, res, next) => {
    res.write("Updating the promotion: " + req.params.promoId + "\n");
    res.end(
      "Will update the promotion: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .post((req, res, next) => {
    res.end(
      "will add the promotions: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting all the promotion in /promotions");
  });

// PROMO ID
promoRouter.route("/:promoId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end(
      "I will send details of the specified promotion: " +
        req.params.promoId +
        " to you. "
    );
  })

  .put((req, res, next) => {
    res.write("Updating the promo: " + req.params.promoId + "\n");
    res.end(
      "I will update the specified promotion: " +
        req.body.name +
        ", with these details: " +
        req.body.description +
        ", with id: " +
        req.body.promoId
    );
  })

  .post((req, res, next) => {
    res.end(
      "Will add the promo: " +
        req.body.name +
        ", with details: " +
        req.body.description +
        ", with id: " +
        req.body.promoId
    );
  })

  .delete(function (req, res, next) {
    res.end("Deleting promotion: " + req.params.promoId);
  });

module.exports = promoRouter;