const express = require("express");

const requestIp = require("request-ip");

// inside middleware handler

const app = express();
var ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    next();
   };
   //As Connect Middleware
   app.use(requestIp.mw())
app.get("/api/whoami", (req, res) => {
//   const ipAddress = req.clientIp;
//   const language = req.headers["accept-language"];
//   const software = req.headers["user-agent"];
//   console.log(req.headers);
//   res.json({
//     ipaddress: ipAddress,
//     language: language,
//     software: software,
//   });

    var ipadress = req.clientIp;
    var language = req.acceptsLanguages();
    var software=req.get('User-Agent');
     res.json({
     ipadress: ipadress,
     language:language[0],
     software:software
     });
    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
