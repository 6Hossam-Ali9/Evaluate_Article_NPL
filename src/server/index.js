var path = require('path')
const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

const bodyParser = require('body-parser')

const app = express()


dotenv.config();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/api', async function(req, res) {
    const input = req.body.url;
    const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.KEY}&txt=${input}&lang=en`//our url link

    const response = await fetch(apiURL)//fetching the data
    const data = await response.json() //turning it to json so we can take data from it
    console.log(data)
    res.send(data)//we send back the datat on port 3000 in /api
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('App listening on port 3000!')
})