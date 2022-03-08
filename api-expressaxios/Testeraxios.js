const PORT = 5555;
const myUrl = 'https://www.theguardian.com/uk';

const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();



axios.get(myUrl).then(response => {
    // accept the html response
    const html = response.data;

    // load the html into cheerio 
    const $ = cheerio.load(html);

    // get the most viewed 10 articles
    const mostViewedList = [];

    // for each list get the title and link
    $('.fc-container__inner', html).each(function () {

        const title = $(this).find('.u-faux-block-link__overlay.js-headline-text').text();
        const url = $(this).find('.u-faux-block-link__overlay.js-headline-text').attr('href');
        console.log('url for me', url)

        mostViewedList.push({
            title,
            url
        });
    });
    console.log(mostViewedList);
}).catch(error => console.log(error));


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});