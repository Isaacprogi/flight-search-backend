const express = require('express');
const axios = require('axios');
const cors = require('cors')

const app = express();
const port =  process.env.PORT || 4000;

const RAPIDAPI_KEY = '8676c8243bmsh36e42dc27cadbe5p126718jsna35379721a90';

app.use(cors())

app.use(express.json());


//get flights data
app.get('/flights', async (req, res) => {
  const { query } = req.query;

  const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/search',
    params: {
      query: query,
      limit: '25'
    },
    headers: {
      'X-RapidAPI-Key': '8676c8243bmsh36e42dc27cadbe5p126718jsna35379721a90',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json(error)
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});