//https://www.theguardian.com/commentisfree/2022/mar/08/all-out-economic-warfare-best-way-stop-putin
//"dcr-1x7coqc"
const port = 3050

const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')
//require('dotenv').config();
//const fs = require('fs');
//const writeStream = fs.createWriteStream('devBlog.csv');
const app = express()

//writeStream.write(`BlogTitle, bloglink, readtime \n`);

axios.get("https://www.theguardian.com/commentisfree/2022/mar/08/all-out-economic-warfare-best-way-stop-putin")
  .then(res => {
    const $ = cheerio.load(res.data)
    $('.dcr-1x7coqc').each((index, element) => {
      const blogTitle = $(element).find('.dcr-7qvram').text()

      const blogLink = $(element).find('a').attr('href');
      const readTime = $(element).find('.dcr-b5hbax').text()
      //const dev = 'https://www.theguardian.com/commentisfree/2022/mar/08/all-out-economic-warfare-best-way-stop-putin'
      const joinedBlogLink = `${blogLink}`;
      console.log(joinedBlogLink)
    })
  }).catch(err => console.error(err))

app.listen(port, () => {
  console.log(`Server Established and  running on Port ${port}`)
})
//<h1 class="dcr-b5hbax">All-out economic warfare is the best way to stop Putin</h1>
