const Task = require('../model/taskModel')
exports.getAllTasks = async (req,res) =>{
    try {
        const tasks = await Task.find()
        res.status(200).json(
            tasks 
        )
    } catch (err) {
        res.status(404).json(
            msg = err.message,
        )
    }
}
exports.getATask =async  (req,res) =>{
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json(
            task
        )
    } catch (err) {
        res.status(404).json(
            msg = err.message,
        )
    }
}
exports.updateTask =async  (req,res) =>{
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id, 
            { new: true, runValidators: true } 
        );
        
        res.status(200).json(
            task ,
        )
    } catch (err) {
        res.status(404).json(
            msg = err.message,
        )
    }
}
exports.delteTask = async (req,res) =>{
    try {
         await Task.deleteMany()
        res.status(200).json(
            msg = 'success',
        )
    } catch (err) {
        res.status(404).json(
            msg = err.message,
            status = 'fail',
        )
    }
}
exports.createTask = async  (req,res) =>{
    try {
        const tasks = await Task.create(req.body)
        res.status(200).json(
            tasks ,
            msg = 'success',
        )
    } catch (err) {
        res.status(404).json(
            msg = err.message,
        )
    }
}