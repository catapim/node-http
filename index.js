const express = require("express");
const http = require("http");

const bodyParser = require("body-parser");

const dishRouter = require('./routes/dishRouter');


const morgan = require("morgan");

const hostname = "localhost";
const port = "3000";
const app = express();
// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
// looks for local files in that directory
app.use(express.static(__dirname + "/public"));

app.use('/dishes', dishRouter)


// dishId
// app.get("/dishes/:dishId", (req, res, next) => {
//   res.end("will send details of the specified dish: " + req.params.dishId) +
//     " to you. ";
// });

// app.post("/dishes/:dishId", (req, res, next) => {
//   res.end("POST operation is not supported on /dishes/" + req.params.dishId);
// });

// app.put("/dishes/:dishId", (req, res, next) => {
//   res.write("Updating the dish: " + req.params.dishId + "\n");
//   res.end(
//     "will update the specified dish: " +
//       req.body.name +
//       "with these details: " +
//       req.body.description
//   );
// });

// danger zone
app.delete("/dishes/:dishId", (req, res, next) => {
  res.end("Deleting dish: " + req.params.dishId);
});

app.use((req, res, next) => {
  // console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>express server running!!!</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
