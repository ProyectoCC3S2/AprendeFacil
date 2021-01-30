const mongoose = require('mongoose');

// Propiedades de Solución
const solucionSchema = new mongoose.Schema(

    {        
        votes: {
        type: Number,
        required: true
        },

        title: {
        type: String,
        required: true
        },

        description: {
        type: String,
        required: true
        },

        //userData: {
        //    photo : {
        //        type: String,
        //        required: false
        //    },
        //    name : {
        //        type: String,
        //        required: false
        //    },
        //type: JSON,
        //required: false,    
        //},
    },
        {timestamps: true},
);

module.exports = mongoose.model("Solucion", solucionSchema)