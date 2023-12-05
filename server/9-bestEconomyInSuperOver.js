const problem9 = (db) => {
  return db("deliveries")
    .select("bowler")
    .select(
      db.raw(
        `sum(total_runs - legbye_runs - bye_runs)*6/ count(case when wide_runs = 0 AND noball_runs = 0 then 1 else null end) as Economy`
      )
    )
    .where("is_super_over", "!=", "")
    .groupBy("bowler")
    .orderBy("Economy", "asc")
    .limit("1");
};

module.exports.problem9 = problem9;
