const mongoose = require('mongoose')
const { Schema } = mongoose

let today = new Date();

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: today
    },
    img: { data: Buffer, contentType: String }
})

module.exports = mongoose.model('Post', PostSchema)