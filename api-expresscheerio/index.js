const PORT = 8000

const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')


const app = express()

app.get('/', function (res, req) => ({
  res.json('Hello')
})


/*

const articles = [];

const newspapers = [
  {
    name: 'thetimes',
    address: 'https://www.thetimes.co.uk/environment/climate-change',
    base: 'https://www.thetimes.co.uk/'
  },
  {
    name: 'guardian',
    address: 'https://www.theguardian.com/environment/climate-crisis',
    base: 'https://www.theguardian.com/'
  }
]

app.get('/news/:newspaperId', async (req, res) => {
  const newspaperId = req.params.newspaperId

  const newspaperAddress = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].address
  console.log('address', newspaperAddress)
  const newspaperBase = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].base
  console.log('base', newspaperBase)


  axios.get(newspaperAddress)
    .then(response => {
      const hml = response.data
      const $ = cheerio.load(html)
      const specificArticles = []

      $('a:contain("climate")', html).each(function () {
        const title = $(this).text()
        const url = $(this).attr('href')
        specificArticles.push({
          title,
          url,
          url: newspaperBase + url,
          source: newspaperId
        })
    })
    res.json(specificArticles)
  }).catch(err => console.log(err))
})
*/
app.listen(PORT, () => console.log(`sever running on port : ${PORT}`))
