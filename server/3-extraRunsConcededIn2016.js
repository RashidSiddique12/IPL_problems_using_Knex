const problem3 = (db) => {
  return db("deliveries")
    .join("Matches", "match_id", "=", "id")
    .select("bowling_team as Team")
    .sum("extra_runs as Extra_runs")
    .where("season", "=", "2016")
    .groupBy("bowling_team")
    .then((rows) => {
      console.log(rows);
    });
};

module.exports.problem3 = problem3;
