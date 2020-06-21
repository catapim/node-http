const express = require("express");
const bodyParser = require("body-parser");
const promoRouter = express.Router();
const Promotions = require('../models/promotions');
promoRouter.use(bodyParser.json());

// PROMO
promoRouter.route("/")
  .get((req, res, next) => {
    Promotions.find({})
      .then((promotion) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Promotions.create(req.body)
    .then((promotion) => {
      console.log('promotion created', promotion);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promotion);
    }, (err) => next(err))
    .catch((err) => next(err));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /Promotions");
  })
  
  .delete((req, res, next) => {
    // res.end("Deleting all Promotions");
    Promotions.remove({})
    .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
  });

// PROMO ID
promoRouter.route("/:promoId")
.get((req, res, next) => {
  Promotions.findById(req.params.promoId)
  .then((promo) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(promo);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end("POST operation not supported on /Promotions/" + req.params);
})
.put((req, res, next) => {
  Promotions.findByIdAndUpdate(req.params.promoId, {
    $set: req.body
  }, {new: true})
  .then((promo) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(promo);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.delete((req, res, next) => {
  Promotions.findByIdAndRemove(req.params.promoId)
  .then((resp) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
});

module.exports = promoRouter;