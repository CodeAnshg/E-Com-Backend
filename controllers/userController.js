const mongoose = require("mongoose");
const users = require("../models/userSchema");

const getAllUsers = (req, res) => {
    users.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

const createUser = async (req, res) => {
    try {
        const user = new users({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            userName: req.body.userName,
            passWord: req.body.passWord,
        });
        const result = await user.save();
        res.status(201).json(result);
        console.log("User created successfully");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllUsers, createUser };
