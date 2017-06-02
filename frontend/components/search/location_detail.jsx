import React from 'react';

const LocationDetail = ({ movie }) => (
  <div className="user-pane">
    <h1>hi</h1>
    <h1>{movie.overview}</h1>
    <img src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}/>
  </div>
);

export default LocationDetail;
