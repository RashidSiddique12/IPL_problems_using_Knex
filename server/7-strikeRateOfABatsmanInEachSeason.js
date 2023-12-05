const problem7 = (db, batsmanX) => {
  db("Matches")
    .join("deliveries", "id", "=", "match_id")
    .select(
      "season",
      db.raw(
        `sum(batsman_runs) * 100 / count(case when wide_runs = 0 AND noball_runs = 0 then 1 else null end) as strikeRate`
      )
    )
    .where("batsman", "=", batsmanX)
    .groupBy("season")
    .orderBy("season", "asc")
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

module.exports.problem7 = problem7;
