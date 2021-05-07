const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const Workout = require('./models/Workout');

const PORT = process.env.PORT || 3000;

const db = mongoose.connection

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });



app.get('/exercise', function(req, res){
    res.sendFile(__dirname + '/public/exercise.html');
    });

app.post('/api/workouts/', function({ body }, res){
  Workout.find({}).sort({day: -1}).limit(1)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  }); 
});

app.put('/api/workouts/:id', function(req, res){
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

app.get('/stats', function(req, res){
    res.sendFile(__dirname + '/public/stats.html');
    });
    
app.get('/api/workouts/range', function(req, res){
    Workout.find({}).sort({day: -1}).limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    });

app.post("/exercise", (req, res) => {
 

    });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});