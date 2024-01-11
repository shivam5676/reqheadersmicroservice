const express = require('express');
const app = express();

app.get('/api/whoami', (req, res) => {
  const ipAddress = req.ip;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ipAddress,
    language: language,
    software: software
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
