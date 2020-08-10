import { fifaData } from './fifa.js';
console.log(fifaData);

// console.log('its working');
console.log("");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log ("*******   TASK 1 ANSWERS   *********")
let team = fifaData.filter(element => element.Year === 2014);
for (let i = 0; i< team.length; i++){
    if (team[i]["Stage"] === "Final"){
        console.log("The Task 1a answer is " + team[i]["Home Team Name"]);
    }
    if (team[i]["Stage"] === "Final") {
        console.log("The Task 1b answer is " + team[i]["Away Team Name"]);
    }
    if (team[i]["Stage"] === "Final"){
        console.log("The Task 1c answer is " + team[i]["Home Team Goals"]);
    }
    if (team[i]["Stage"] === "Final"){
        console.log("The Task 1d answer is " + team[i]["Away Team Goals"]);
    }
    if (team[i]["Stage"] === "Final"){
        console.log("The Task 1e answer is " + team[i]["Win conditions"]);
    }
}
console.log("");




/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finals = data.filter(final => final["Stage"] == "Final")   
    return (finals);
};
console.log("The answer to task 2 is " , getFinals(fifaData));
console.log("");

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callBack) {
    let years = [];
    callBack.forEach((item) => {
        years.push(item.Year);
    })
   return years;
};

console.log("The answer to task 3 is " , getYears(getFinals(fifaData)));
console.log("");

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callBack) {
    const winners = [];
    callBack.map ((item) => {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            winners.push(item["Home Team Name"]);
        }else{
            winners.push(item["Away Team Name"]);
        }
    })
    return winners;
};

console.log("The asnwer to task 4 is " , getWinners(getFinals(fifaData)));
console.log("");

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
    const winners = cb1(getFinals(fifaData));
    const years = cb2(getFinals(fifaData));

    const winningString= winners.forEach((item, index) =>{
        console.log("The answer to task 5 is: " + `"In ${years[index]}, ${item} won the World Cup!"`);
});
}
(getWinnersByYear(getWinners, getYears));
console.log("");

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const match = data.length

    let aveHomeGoals = Math.round(data.reduce((accum, index) => accum + index["Home Team Goals"], 0)/ match);

    let aveAwayGoals = Math.round(data.reduce((accum, index) => accum + index["Away Team Goals"], 0) / match);

    const returnInfo =  `"Average Home Goals ${aveHomeGoals} - Average Away Goals  ${aveAwayGoals}"`;
    return returnInfo;
}


console.log("The answer to Task 6 is " + getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
