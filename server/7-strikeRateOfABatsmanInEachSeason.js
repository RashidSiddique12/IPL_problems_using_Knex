const problem7 = (db, batsmanX) => {
  return db("Matches")
    .join("deliveries", "id", "=", "match_id")
    .select(
      "season",
      db.raw(
        `sum(batsman_runs) * 100 / count(case when wide_runs = 0 AND noball_runs = 0 then 1 else null end) as strikeRate`
      )
    )
    .where("batsman", "=", batsmanX)
    .groupBy("season")
    .orderBy("season", "asc");
};

module.exports.problem7 = problem7;
