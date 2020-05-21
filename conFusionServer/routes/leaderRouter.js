const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

// LEADERS
leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end("will send all the Leaders to you!!");
    })
    .put((req, res, next) => {
        res.end(
            "will update the leader: " +
                req.body.name +
                " with details: " +
                req.body.description
            );
    })
    .post((req, res, next) => {
        res.end(
        "will add the leader: " +
            req.body.name +
            " with details: " +
            req.body.description
        );
    })
    // danger zone
    .delete((req, res, next) => {
        res.end("Deleting all the Leaders in /leaders!!");
    });

// LEADER ID
leaderRouter.route("/:leaderId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end(
      "I will send details of the specified leader: " +
        req.params.leaderId +
        " to you. "
    );
  })

  .put((req, res, next) => {
    res.write("Updating the leader: " + req.params.leaderId + "\n");
    res.end(
      "I will update the specified leader: " +
        req.body.name +
        ", with these details: " +
        req.body.description +
        ", with id: " +
        req.body.leaderId
    );
  })

  .post((req, res, next) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        ", with details: " +
        req.body.description +
        ", with id: " +
        req.body.leaderId
    );
  })

  .delete(function (req, res, next) {
    res.end("Deleting leader: " + req.params.leaderId);
  });

module.exports = leaderRouter;