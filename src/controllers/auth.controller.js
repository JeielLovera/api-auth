import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';


export const signUp = async ( req, res ) => {
    const { username, email, password, roles } = req.body;
    const entryUser = new User( { username, email, password: await User.encryptPassword( password ) } );
    const savedUser = await entryUser.save();
    const token = jwt.sign( { id: savedUser._id }, config.SECRET, { expiresIn: 300 } ); // 300 seg -> 5min

    res.status( 200 ).json( { token } );
};

export const signIn = async ( req, res ) => {
    res.json( 'signin' );
};


// Archivo para autenticación de usuarios


