import { Router } from 'express';
import * as productsController from '../controllers/products.controller';


const router = Router();

router.get( '/', productsController.getProducts );
router.get( '/:productId', productsController.getProductById );
router.post( '/', productsController.createProduct );
router.put( '/:productId', productsController.updateProductById );
router.delete( '/:productId', productsController.deleteProductById );

export default router;


// Archivo para el manejor de las rutas de products.routes