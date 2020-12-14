import { Schema, model } from 'mongoose';


const productSchema = new Schema( {
    name: String,
    category: String,
    price: Number,
    imgUrl: String,

}, {
    timestamps: true, // para cada que se cree o actualice un doc vaya con su fecha de creación y ultiam fecha de modificación
    versionKey: false // para evitar el _v al crear un doc nuevo
} );

export default model( 'Product', productSchema );

// Archivo de modelo de Product para la DB