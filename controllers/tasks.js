const Task = require("../models/Task");

const getAllTasks = async(req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createTask = async(req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getTask = async(req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });

        //check condition
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        }

        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteTask = async(req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });

        //check condition
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        }

        res.status(200).json({ task });
        // res.status(200).send()
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateTask = async(req, res) => {
    try {
        const { id: taskID } = req.params;

        //req/body are new data will update the old dataset
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        });

        //check condition
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        }

        res.status(200).json({ task });
        res.status(200).send("updated successfully");
        // res.status(200).json({ id: taskID, data: req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};