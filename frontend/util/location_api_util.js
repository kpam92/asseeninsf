
export const retrieveAPILocations = () => {
  return $.ajax({
    method: 'GET' ,
    url: 'https://data.sfgov.org/resource/wwmu-gmzc.json',
    error: (err) => console.log(err)
  })
}

export const saveLocations = (locations) => {
  return $.ajax({
    method: 'POST' ,
    url: 'api/locations',
    error: (err) => console.log(err),
    data: { locations: locations }
  })
}

export const fetchLocations = () => {
  return $.ajax({
    method: 'GET' ,
    url: 'api/locations'
  })
}
