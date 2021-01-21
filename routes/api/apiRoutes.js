const router = require("express").Router();
const { Workout } = require("../../models")

// router.post("/api/workout", ({ body }, res) => {
//     workout.create(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
//   router.post("/api/workout/bulk", ({ body }, res) => {
//     workout.insertMany(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
  router.get("/workouts", (req, res) => {
    Workout.find({})
      // .sort({ date: -1 })
      .then(dbWorkout => {
        console.log("data", dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
router.put("/workouts/:id", (req, res) => {
  const id = req.params.id; 
  const body = req.body;

  Workout.findOneAndUpdate({_id:id}, {$push:{exercises:body}})
      .then(dbWorkout => {
      res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

router.post("/workouts", (req, res) => {
  Workout.create({})
  .then(dbWorkout => {
    res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

router.get("/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

  module.exports = router;