const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Task = require('./../models/tasks.model');

// handle GET Rquests 
router.get("/", (req, res, next) => {
    Task.find()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post("/", (req, res, next) => {
    const task = new Task({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        complete: req.body.complete
    });
    task.save().then(result => { // save to mongoose
        console.log(result);
        res.status(200).json({
            message: 'create tasks /POST',
            createdTask: task
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get("/:taskId", (req, res, next) => {
    let id = req.params.taskId;
    Task.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({
                message: 'response not found' 
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(
            {
                error: err
            });
    });
});

router.patch("/:taskId", (req, res, next) => {
    const id = req.params.taskId;
    // itterate paylod
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Task.update({ _id: id}, { $set: updateOps })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete("/:taskId", (req, res, next) => {
    const id = req.params.taskId;
    Task.remove({ _id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;