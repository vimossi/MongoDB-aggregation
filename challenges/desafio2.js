db.movies.aggregate([
  { $match: { "imdb.rating": { $gte: 7 },
    rated: { $in: ["PG", "G"] },
    languages: { $all: ["English", "Spanish"] },
    genres: { $nin: ["Crime", "Horror"] } } },

  { $project: { _id: 0, titulo: "$title", avaliado: "$rated", notaIMDB: "$imdb.rating", votosIMDB: "$imdb.votes", ano: "$year" } },

]);
