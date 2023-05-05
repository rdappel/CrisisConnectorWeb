const express = require('express');
const router = express.Router();
const root = 'Static' 

router.get('/', (request, response) => response.sendFile('Pages/HomePage.html', { root }));
router.get('/Hotlines', (request, response) => response.sendFile('Pages/HotlineList.html', { root }));
router.get('/Resources', (request, response) => response.sendFile('Pages/ResourceList.html', { root }));

// Here when a user types in /api/{name} and 
router.get('/api/:userParam', function (request, response) { // anything after the get is the localhost
    const {userParam} = request.params;
    if(userParam === "hotline") {
      const data = require('./Data/hotline.json');
      response.send(data);
    } else if(userParam === "resource") {
        const data = require('./Data/resources.json');
        response.send(data);
    }
    response.status(404).sendFile('Pages/error404.html', { root });
});

// Not completed
router.get('/Resources/:userParam', (req, res) => {
    const { title, description, details, link } = req.query;
    const response = {
      title: decodeURIComponent(title),
      description: decodeURIComponent(description),
      details: decodeURIComponent(details),
      link: decodeURIComponent(link)
    };
    res.json(response);
  });
    

module.exports = router;