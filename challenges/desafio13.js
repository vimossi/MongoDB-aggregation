db.trips.aggregate([
  {
    $match: {
      startTime: {
        $gte: ISODate("2016-03-10"),
        $lt: ISODate("2016-03-11"),
      },
    },
  },
  // ref https://github.com/tryber/sd-013-c-mongodb-aggregations/blob/diegovilela-mongodb-aggregations/challenges/desafio13.js
  {
    $group: {
      _id: null,
      duracaoMediaEmMinutos: {
        $avg: {
          $subtract: ["$stopTime", "$startTime"],
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      duracaoMediaEmMinutos: {
        $ceil: {
          $divide: ["$duracaoMediaEmMinutos", 1000 * 60],
        },
      },
    },
  },
]);
