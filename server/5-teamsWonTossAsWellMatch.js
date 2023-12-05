const problem5 = (db) => {
  return db(`Matches`)
    .select("winner")
    .count("* as times")
    .where("toss_winner", "=", db.raw("winner"))
    .groupBy("winner");
};

module.exports.problem5 = problem5;
