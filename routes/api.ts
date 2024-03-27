import express, { Request, Response, NextFunction } from 'express';



let route = express.Router();



// Home page route.
route.get('/', function (req, res) {
    res.send('Wiki home page');
});
  
  // About page route.
  route.get('/about', function (req, res) {
    res.send('About this wiki');
  });



// Export the router
export  = route;

