const knex = require("knex");
const config = require("./knexFile");
const prompt = require("prompt-sync")();
const { problem1 } = require("./server/1-noOfPlayedPerYear");
const { problem2 } = require("./server/2-noOfMatchesWonPerTeamPerYear");
const { problem3 } = require("./server/3-extraRunsConcededIn2016");
const { problem4 } = require("./server/4-top10EconomicalBowlerIn2015");
const { problem5 } = require("./server/5-teamsWonTossAsWellMatch");
const {
  problem8,
} = require("./server/8-highestTimesOnePlayerDismissedByOther");
const { problem7 } = require("./server/7-strikeRateOfABatsmanInEachSeason");
const { problem9 } = require("./server/9-bestEconomyInSuperOver");
const { problem6 } = require("./server/6-highestPlayerAwardInEachSeason");
const db = knex(config);

const batsmanX = prompt("Entre batsman name: ");

Promise.all([
  problem1(db),
  problem2(db),
  problem3(db),
  problem4(db),
  problem5(db),
  problem6(db),
  problem7(db, batsmanX),
  problem8(db),
  problem9(db),
])
  .then((data) => {
    data.forEach((res) => {
      console.log(res);
    });
  })
  .catch((err) => {
    console.log(err);
  }).finally(()=>{
    db.destroy();
  })
