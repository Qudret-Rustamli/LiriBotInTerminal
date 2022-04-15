const inquirer = require('inquirer');
const axios = require('axios');
/* const dotenv=require('dotenv');
const path = require('path');
dotenv.config();
console.log(process.env.OMDB_API_KEY); */

 const omdb = () => {
  inquirer
    .prompt([
      {
        message: 'Which cinema would you like to know details?',
        name: 'cinema',
        type: 'input',
      },
    ])
    .then((answers) => {
      axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${answers.cinema}`)
      .then((res) => console.log(res));
    });
};

module.exports={omdb};
