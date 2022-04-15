const { omdb } = require('./omdb.js');
const { WheatherQ } = require('./weather.js');
const {Twitter} = require('./twitter.js');

const inquirer = require('inquirer');

//sade variant
inquirer.prompt([
  {
    message: 'Hansı platformadan istifadə etmək istəyirsiniz?',
    name: 'platform',
    type: 'list',
    choices: ['OMDB', 'Weather','Twitter'],
    },
])
.then((answers) => {
  if (answers.platform === 'OMDB') {
    omdb()
  } else if (answers.platform === 'Weather') {
    WheatherQ()
  }else if (answers.platform === 'Twitter') {
    Twitter()
  }
});



//async varianti
/* async function liri() {
  const result =await inquirer.prompt([
    {
      message: 'Hansı platformadan istifadə etmək istəyirsiniz?',
      name: 'platform',
      type: 'list',
      choices: ['OMDB', 'Weather','Twitter'],
      },
  ])
  .then((answers) => {
    if (answers.platform === 'OMDB') {
      omdb()
    } else if (answers.platform === 'Weather') {
      WheatherQ()
    }else if (answers.platform === 'Twitter') {
      Twitter()
    }
  });
  liri()
}
liri() */


