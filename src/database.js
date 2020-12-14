import mongoose from 'mongoose';


mongoose.connect( "mongodb+srv://adminzuricata:teamzuricatas@willacumucluster.1tzxq.mongodb.net/auth_db?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    } )
    .then( db => console.log( 'Conexión realizada a la DB' ) )
    .catch( error => console.log( 'Fallo al conectarse a la DB' ) );


// Archivo para configurar la conexión a la base de datos