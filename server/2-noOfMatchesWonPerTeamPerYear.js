// -- Number of matches won per team per year in IPL.

const problem2 = (db) => {
  return db("Matches")
    .select("season", "winner")
    .count(`* as times`)
    .where("winner", "!=", "")
    .groupBy("season", "winner");
};

module.exports.problem2 = problem2;
