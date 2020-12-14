import Product from '../models/Product';


export const getProducts = async ( req, res ) => {
    const products = await Product.find();
    res.status( 200 ).json( products );
};

export const getProductById = async ( req, res ) => {
    const foundProduct = await Product.findById( req.params.productId );
    res.status( 200 ).json( foundProduct );
};

export const createProduct = async ( req, res ) => {
    const { name, category, price, imgUrl } = req.body; // deconstructing object
    const entryProduct = new Product( { name, category, price, imgUrl } );
    const savedProduct = await entryProduct.save();
    res.status( 201 ).json( savedProduct ); // poner codigos de estados http
};

export const updateProductById = async ( req, res ) => {
    const updatedProduct = await Product.findByIdAndUpdate( req.params.productId, req.body, { new: true } );
    res.status( 200 ).json( updatedProduct );
    // hace la de path tmb, oversisisismo mongoose
    // por eso manda el req.body, chapa de ahi lo que solo va a actualizar
    //  super chetado el mongoose
};

export const deleteProductById = async ( req, res ) => {
    await Product.findByIdAndDelete( req.params.productId );
    res.status( 204 ).json();
};


// Archivo para CRUD  de products