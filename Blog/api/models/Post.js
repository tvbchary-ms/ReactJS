const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        required: false
    },
    photo: {
        type: String,
        required: false,
      },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    categories:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: false
    },
},
{timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema);