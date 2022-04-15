var Twit = require('twit');
const path=require('path');
require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});

/* console.log(process.env.consumer_key); */
const inquirer = require('inquirer');

function Twitter() {
  var T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
  });

  inquirer
    .prompt([
      {
        message: 'Axtarmaq istediyiniz stausu yazın!',
        name: 'status',
        type: 'input',
      },
    ])
    .then((answers) => {
      var stream = T.stream('statuses/filter', { track: `#${answers.status}`, language: 'en' });

      stream.on('tweet', function (tweet) {
        console.log(tweet);
      });
    });
}

module.exports={Twitter}