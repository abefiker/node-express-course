const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController')
router.route('/').get(taskController.getAllTasks).post(taskController.createTask)
router.route('/:id').get(taskController.getATask).patch(taskController.updateTask).delete(taskController.delteTask)

module.exports = router