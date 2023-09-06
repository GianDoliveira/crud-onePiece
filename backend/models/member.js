const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    Affiliations: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    occupations: {
        type: [String],
        required: true,
    },
})
const MemberModel = mongoose.model('Member', memberSchema)

module.exports = MemberModel
