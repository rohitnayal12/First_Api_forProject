require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require('../models/user.model');
const SECRET_KEY = "rohitkisecretkey";


const authController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            if (email && password) {
                const user = await User.findOne({ email: email });
                if (user) {
                    const isPasswordValid = bcrypt.compareSync(password, user.password);
                    if (isPasswordValid) {
                        const token = jwt.sign({ id: user._id }, SECRET_KEY);
                        return res.status(200).send({ message: "Login successful", data: { token, user } });
                    } else {
                        return res.status(400).send({ message: "Invalid password" });
                    }
                }
                return res.status(401).send({ message: "User not registered" });
            }
            return res.status(403).send({ message: 'Invalid email or password' });
        } catch (error) {
            return res.status(404).send({ message: error.message });
        }
    },
    register: async (req, res) => {
        const { email, password } = req.body;
        try {
            if (email) {
                const userexists = await User.findOne({ email: email });
                if (userexists) {
                    return res.status(403).send({ message: 'User already exists' })
                }
            }
            const HashedPass = bcrypt.hashSync(password, 10);
            const newUser = await User.create({
                ...req.body,
                password: HashedPass
            })
            return res.status(201).send({ message: "User created successfully", data: newUser });

        } catch (error) {
            return res.status(404).send({ message: error.message });
        }
    },
    getusers: async (req, res) => {
        try {
            const data = await User.find();
            return res.status(200).send({ data })
        } catch (error) {
            return res.status(404).send({ message: error.message });
        }
    }
}
module.exports = { authController }

