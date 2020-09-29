var inquirer = require("inquirer");

inquirer.prompt([
    {
        name:"username",
        message:"what is your name?",
        type:"input"
    }
]).then(function(response){
    console.log(response);
})