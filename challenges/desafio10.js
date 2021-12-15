db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      duration: {
        $avg: { $divide: [{ $subtract: ["$stopTime", "$startTime"] }, (60 * 60 * 1000)] },
      },
    },
  },
  {
    $project: {
      _id: false,
      tipo: "$_id",
      duracaoMedia: { $round: ["$duration", 2] },
    },
  },
  {
    $sort: {
      duracaoMedia: 1,
    },
  },
]);
