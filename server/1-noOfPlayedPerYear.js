const problem1 = (db) => {
  return db("Matches").select("season").count("* as times").groupBy("season");
};

module.exports.problem1 = problem1;
