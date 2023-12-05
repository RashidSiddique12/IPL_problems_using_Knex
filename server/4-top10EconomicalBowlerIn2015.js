const problem4 = (db) => {
  db(`deliveries`)
    .join("Matches", "match_id", "=", "id")
    .select("bowler")
    .select(
      db.raw(
        `Round((sum(total_runs - legbye_runs - bye_runs)*6/count(case when wide_runs = 0 AND noball_runs = 0 then 1 else null end)), 2) as Economy`
      )
    )
    .groupBy("bowler")
    .where("season", "=", "2015")
    .orderBy("Economy", "asc")
    .limit("10")
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

module.exports.problem4 = problem4;
