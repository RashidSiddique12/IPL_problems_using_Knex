const problem6 = (db) => {
  return db
    .select("season", "player", "number")
    .from(function () {
      this.select(`season`, `player_of_match as player`)
        .count("* as number")
        .from(`Matches`)
        .denseRank(
          "ranking",
          db.raw(`PARTITION BY season order by count(*) desc`)
        )
        .groupBy(`season`, `player_of_match`)
        .as("temp");
    })
    .where("ranking", "=", "1");
};

module.exports.problem6 = problem6;
