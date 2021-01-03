const { Schema, model } = require('mongoose');

const courseSchema = new Schema ({
    name: {type: String, required: true},
    duration: {type: Number, required: true},
    dateStart: {type: Date, required: false},
    dateFinal: {type: Date, required: false},
    campus: {type: String, required: true},
    workingShift: {type: String, required: false},
    description: {type: String, required: true},
    Image: {type: String, required: false},
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Courses', courseSchema)