/*
Imagine there's a tournament taking place with multiple competitions.
There'll be two teams in each competition and there'll be exactly one winner.
Each team will compete with all other teams exactly one time (round robin).

Given two arrays as input, competitions array and results arrays, return the winner of the competition.
Sample:
competitions = [
      ["team A", "team B"], ["team B", "team C"], ["team C", "team A"]
]

results = [0, 0, 1]

In each competition, if the team at index 0 wins, it is denoted by "1" in the results array and if the team at index 1 wins, it is denoted by "0"
*/


// O(n) time and O(n) space
const HOME_TEAM_WON = 1;

function getWinner(competitions, results) {
      let bestTeam = "";
      let scores = {};
      scores[bestTeam] = 0;

      for (let [index, competition] of competitions.entries()) {
            let currentResult = results[index];
            const [homeTeam, awayTeam] = competition;

            let currentCompetitionWinner = currentResult === HOME_TEAM_WON ? homeTeam : awayTeam;

            if (scores.hasOwnProperty(currentCompetitionWinner)) {
                  scores[currentCompetitionWinner] += 3;
            } else {
                  scores[currentCompetitionWinner] = 3;
            }

            if (scores[currentCompetitionWinner] > scores[bestTeam]) {
                  bestTeam = currentCompetitionWinner;
            }
      }
      return bestTeam;
}

console.log(getWinner([["team A", "team B"], ["team B", "team C"], ["team C", "team A"]], [0, 0, 1]));