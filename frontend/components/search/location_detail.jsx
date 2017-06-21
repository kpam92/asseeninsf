import React from 'react';


class LocationDetail extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    const { movie } = this.props
    return(
      <div className='movie-detail col-sm-12 no-left'>
        <div className='col-sm-5 no-left'>
          <img src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}/>
        </div>
        <div className='col-sm-7'>
          <h6>{movie.overview}</h6>
        </div>
      </div>
    )
  }
}


export default LocationDetail;
