const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema(
/*
{
    "data": {
        "tags": [
            "todo",
            "bien?"
        ],
        "_id": "5fecec795aa7651a8496932e",
        "votes": 10,
        "title": "NuevoModel",
        "comment": "NuevoModel",
        "userData": {
            "photo": "ejemplo@hotmail",
            "name": "ryuza"
        },
        "createdAt": "2020-12-30T21:09:13.506Z",
        "updatedAt": "2020-12-30T21:09:13.506Z",
        "__v": 0
    }
}
*/
    {        
        coins: {
        type: Number,
        required: false
        },

        title: {
        type: String,
        required: true
        },

        comment: {
        type: String,
        required: true
        },

        tags: {
        type: Array,
        required: false,
        },

        userData: {
            photo : {
                type: String,
                required: false
            },
            name : {
                type: String,
                required: false
            },
        type: JSON,
        required: false,
        },
    },
        {timestamps: true},
);

module.exports = mongoose.model("Publicacion", publicacionSchema)