const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Cardio = require('./models/Cardio');

const PORT = process.env.PORT || 3000;

const db = mongoose.connection

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// db.Library.create({ name: "Campus Library" })
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

app.get('/exercise', function(req, res){
    res.sendFile(__dirname + '/public/exercise.html');
    });

app.post('/api/workouts', function(req, res){
   const running = new mongoose.cardioSchema({
       miles: req.body.miles 
   })
   post.save(function (err, running) {
    if (err) { return next(err) }
    res.json(201, running)
  })
})


app.get('/stats', function(req, res){
    res.sendFile(__dirname + '/public/stats.html');
    });
    
app.get('/api/workouts/range', function(req, res){
   
    });

app.post("/exercise", (req, res) => {
 

    });


// app.get("/books", (req, res) => {
//   db.Book.find({})
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/library", (req, res) => {
//   db.Library.find({})
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//     .populate("books")
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});