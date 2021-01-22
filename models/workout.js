const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        type: {
            type: String,
            trim: true,
            // required: "Enter exercise type"
        },
        name: {
            type: String,
            trim: true,
            // required: "Enter exercise name"
        },
        duration: {
            type: Number,
            // required: "Enter exercise duration in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
    }
]
},
{
    toJSON: {
    
        virtuals: true
    }
});

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;