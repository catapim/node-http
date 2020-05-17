const express = require("express");
const http = require("http");

const bodyParser = require("body-parser");

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');


const morgan = require("morgan");

const hostname = "localhost";
const port = "3000";
const app = express();
// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

app.use('/dishes', dishRouter)

app.use('/leaders', leaderRouter)
app.use('/promo', promoRouter)

// app.use((req, res, next) => {
//   // console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<html><body><h1>express server running!!!</h1></body></html>");
// });  


const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
