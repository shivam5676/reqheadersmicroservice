const express = require("express");
const cors=require("cors")
const requestIp = require("request-ip");

// inside middleware handler

const app = express();
app.use(cors({origin:"*"}))


// Middleware to get client IP address
const ipMiddleware = function (req, res, next) {
  req.clientIp = requestIp.getClientIp(req);
  next();
};

// Add the IP middleware to the stack
app.use(ipMiddleware);

app.get("/api/whoami", (req, res) => {
  const language = req.headers["accept-language"];
  const ipaddress = req.clientIp;
  const software = req.get('User-Agent');

  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
