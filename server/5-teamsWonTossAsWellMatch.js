const problem5 = (db) => {
  db(`Matches`)
    .select("winner")
    .count("* as times")
    .where("toss_winner", "=", db.raw("winner"))
    .groupBy("winner")
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

module.exports.problem5 = problem5;
