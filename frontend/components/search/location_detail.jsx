import React from 'react';


class LocationDetail extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    const { movie } = this.props
    return(
      <div className='movie-detail'>
        <h1>hi</h1>
        <h6>{movie.overview}</h6>
        <img src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}/>
      </div>
    )
  }
}


export default LocationDetail;
