
export const retrieveLocations = () => {
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
    locations
  })
}
