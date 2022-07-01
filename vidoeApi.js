
const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Basic QVE1UFhvMUFEak5WQzJKeDlGREZidmVTdkpTMkhFQjFLVG1HQnpyb3k1OTo='
    }
  };
  
  fetch('https://ws.api.video/videos?currentPage=1&pageSize=25', options)
    .then(response => response.json())
    .then(response => console.log(response.data[1].assets))
    .catch(err => console.error(err));