const express = require('express')
const cors = require('cors');
const fetch = require('cross-fetch');

const app = express();
app.use(cors());

// =======================================resto list

app.get('/api/get_restaurants', (req, res) => {
 
  const url = `https://www.eatsure.com/v1/api/get_restaurants?store_id=10157&city_id=5785&`;

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred');
    });
});



// ======================================== menulist

app.get(':endpoint([\\/\\w\\.-]*)', (req, res) => {
    // const { brand_id } = req.query;
    // console.log(req.query);
    const endpoint = `https://www.eatsure.com/v1/api${req.params.endpoint}`;
  
    fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('An error occurred');
      });
  });

  // ===========================================port number
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});