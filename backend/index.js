//libraries
const express = require('express')
const morgan = require('morgan') // Permite registra o ver por consola las peticiones que llegan desde el navegador
const cors = require('cors') 
const bodyparser = require('body-parser')
const mongoose = require('mongoose') // Permite conectarnos a la base de datos y al mismo tiempo definir como luciran los datos dentro de la base de datos


// methods libs
const app = express()
require('dotenv').config();


// middlewares
app.use(morgan('dev'));
app.use(bodyparser.json());
//app.use(express.json());
app.use(cors())

// database setup
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}) .then(() => {console.log('Nueva Base de datos conectada')})
    .catch(error=>console.log(error))

//routes setup
app.use('/api/auth', require('./routes/auth'))
app.use('/api/publicacion', require('./routes/publicacion'))
//app.use('/api/solucion', require('./routes/solucion'))
//app.use('/api/notificacion', require('./routes/notificacion'))

//listen port
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Servidor APPFACIL corriendo en el puerto ${port}`);
})