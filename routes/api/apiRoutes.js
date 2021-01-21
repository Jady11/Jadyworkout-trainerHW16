const router = require("express").Router;
const { Workout } = require("../../models")

router.post("/api/workout", ({ body }, res) => {
    workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workout/bulk", ({ body }, res) => {
    workout.insertMany(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workout", (req, res) => {
    workout.find({})
      // .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;