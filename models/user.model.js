const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        age: { type: Number, required: true },
        ethnicity: { type: String, required: true },
        occupation: { type: String, required: true },
        familyStatus: { type: String, required: true },
        Education: { type: String, required: true },
        Behaviour: { type: String, required: true },
        Blog: { type: String, required: true },
        NeedsandGoal: { type: String, required: true },
        UserStory: { type: String, required: true },

    },
    {
        versionKey: false,
        timestamps: true
    }
);

const User = mongoose.model("user", userSchema);

module.exports = { User };


