import Rol from '../models/Rol';


export const createRoles = async () => {
    try {
        const count = await Rol.estimatedDocumentCount();
        if ( count > 0 ) return;
        const values = await Promise.all( [
            new Rol( { name: 'user' } ).save(),
            new Rol( { name: 'moderador' } ).save(),
            new Rol( { name: 'admin' } ).save()
        ] ); // ejecuta todas las instrucciones
        console.log( values );
    } catch ( error ) {
        console.log( error );
    }
};