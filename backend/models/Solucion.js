const mongoose = require('mongoose');

// Propiedades de Solución
const solucionSchema = new mongoose.Schema(

    {        
        votes: {
            type: Number,
            required: true
        },

        solution: {
            type: String,
            required: true
        },

        idpost: {
            type: String,
            required: true
        },
    
        //userData: {
        //    id: String
        //    },
        //required: true,    
        //},
    },
        {timestamps: true},
);

module.exports = mongoose.model("Solucion", solucionSchema);
