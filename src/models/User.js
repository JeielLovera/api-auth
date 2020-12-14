import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';


const userSchema = new Schema( {
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: 'Rol',
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
} );

// permite aplicar metodos sin instanciar el objeto
userSchema.statics.encryptPassword = async ( pass ) => {
    const salt = await bcrypt.genSalt( 10 ); // se aplica el agoritmo 10 veces, lo común, más no porque aumenta el consumo de recursos
    return await bcrypt.hash( pass, salt );
};

userSchema.statics.comparePassword = async ( entryPass, comparePass ) => {
    // entrypass -> contraseña ingresada, comparePass -> contraseña con la que se hara la comparación
    return await bcrypt.compare( entryPass, comparePass ); // return true o false
};

export default model( 'User', userSchema );


// Archivo de modelo de User para la DB y autenticación