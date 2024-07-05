const express = require('express');
const app = express();
const geoip = require('geoip-lite');

app.get('/api/hello', (req, res) => {
  const visitorName = req.query.visitor_name;
  const ipAddress = req.ip;
  const geo = geoip.lookup(ipAddress);
  const location = geo? geo.city : 'Unknown';
  const temperature = 11; // Hardcoded for simplicity, but you can integrate with a weather API for real data
  const greeting = `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celcius in ${location}`;

  res.json({
    client_ip: ipAddress,
    location,
    greeting,
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
