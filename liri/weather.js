const inquirer = require('inquirer');
const weather = require('weather-js');

const WheatherQ = () => {
  inquirer
    .prompt([
      {
        message: 'Which city would you like to know the weather forecast for?',
        name: 'city',
        type: 'input',
      },
      {
        message: 'degreeType',
        name: 'degreeType',
        type: 'list',
        choices: ['F', 'C'],
      },
    ])
    .then((answers) => {
      weather.find(
        { search: answers.city, degreeType: answers.degreeType },
        function (err, result) {
          if (err) console.log(err);

          console.log(JSON.stringify(result, null, 2));
        },
      );
    });
};

module.exports={WheatherQ};