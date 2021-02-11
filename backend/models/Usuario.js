const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema(
    {        
        first_name: {
        type: String,
        required: false
        },

        last_name: {
        type: String,
        required: false
        },

        email: {
        type: String,
        required: false
        },

        nickname: {
        type: String,
        required: true
        },

        phone: {
        type: Number,
        required: false
        },

        password: { 
        type: String,
        required: true,
        },

        remember: { 
          type: Boolean,
          required: false,
        },

        photo:{
          type: String,
          required: false,
          default: "https://image.flaticon.com/icons/png/512/47/47774.png"
        },

        coins: {
          type: Number,
          required: false, 
          default: 40
        },

        },
        {timestamps: true}
);

module.exports = mongoose.model("Usuario", usuarioSchema)