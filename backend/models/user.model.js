const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    exercises: { type: String, ref: "Exercise" },
    exercisesList: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;