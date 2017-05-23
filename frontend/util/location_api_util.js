
export const fetchLocations = () => {
  return $.ajax({
    method: 'GET' ,
    url: 'https://data.sfgov.org/resource/wwmu-gmzc.json',
    error: (err) => console.log(err),
    success: (data) => console.log(data)
  })
}
