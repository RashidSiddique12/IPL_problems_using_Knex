// -- Number of matches won per team per year in IPL.

const problem2 = (db) => {
  db("Matches")
    .select("season", "winner")
    .count(`* as times`)
    .where("winner", "!=", "")
    .groupBy("season", "winner")
    .then((rows) => {
      console.log(rows);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      db.destroy();
    });
};

module.exports.problem2 = problem2;
