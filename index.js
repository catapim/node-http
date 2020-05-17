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

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

app.use('/dishes', dishRouter)
app.use('/leaders', leaderRouter)
app.use('/promotions', promoRouter)


const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
