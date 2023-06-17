const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        age: { type: Number},
        ethnicity: { type: String },
        occupation: { type: String },
        familyStatus: { type: String },
        Education: { type: String },
        Behaviour: { type: String },
        Blog: { type: String},
        NeedsandGoal: { type: String},
        UserStory: { type: String },

    },
    {
        versionKey: false,
        timestamps: true
    }
);

const User = mongoose.model("user", userSchema);

module.exports = { User };


