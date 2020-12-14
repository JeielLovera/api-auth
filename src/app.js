import express from 'express'; //asi se importa en es6, anterior a ello se usaba require
import morgan from 'morgan';
import pkg from '../package.json';
import productsRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';


const app = express();

app.set( 'pkg', pkg );

app.use( morgan( 'dev' ) ); // para trackear las peticiones
app.use( express.json() ); // para recibir objetos json

app.get( '/', ( req, res ) => res.json( {
    mensaje: "Bienvenidos al Himalaya!!",
    proyecto: {
        titulo: app.get( 'pkg' ).name,
        autor: app.get( 'pkg' ).author,
        descripcion: app.get( 'pkg' ).description,
        version: app.get( 'pkg' ).version
    }
} ) );

app.use( '/api/products', productsRoutes );
app.use( '/api/auth', authRoutes );

export default app;


// Este archivo es para configurar la aplicación