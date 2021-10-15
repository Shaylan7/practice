import express from "express";

import fetch from 'node-fetch';

const distanceRouter = express.Router();


distanceRouter.get("/", async (request, response) => {
    let distance; 
    const origins = request.query.origins;
    const destinations = request.query.destinations;
    const travelMode = request.query.travelMode;
    fetch("https://maps.googleapis.com/maps/api/distancematrix/json?origins=47.6062%2C-122.3321&destinations=45.5152%2C-122.6784&mode='DRIVING'&key=AIzaSyBntKhFZyZmcgzjdCsQ-oCSQlc-6msIe6w")
        .then((res) => res.json())
        .then(response.json(distance))
        console.log("hello", distance)
});

distanceRouter.use(express.json());

export default distanceRouter;