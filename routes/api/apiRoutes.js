const router = require("express").Router;
const { Workout } = require("../../models")

router.post("/api/workout", ({ body }, res) => {
    workout.create(body)
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workout/bulk", ({ body }, res) => {
    workout.insertMany(body)
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workout", (req, res) => {
    workout.find({})
      .sort({ date: -1 })
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;