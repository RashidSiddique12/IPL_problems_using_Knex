const problem1 = (db) => {
  db("Matches")
    .select("season")
    .count("* as times")
    .groupBy("season")
    .then((rows) => {
      console.log(rows);
    })
    .catch((err)=>{
      console.log(err);
    })
    .finally(() => {
      db.destroy();
    });
};

module.exports.problem1 = problem1;
