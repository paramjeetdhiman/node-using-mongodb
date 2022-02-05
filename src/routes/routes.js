import {
  addnewProduct,
  getProducts,
  getProductWithID,
} from "../controllers/controllers";

const routes = (app) => {
  // Post endpoint - get multiple products
  app.route('/products').get(getProducts).post(addnewProduct);

  //   get a specific product with an id
  app.route('/products/:ProductID').get(getProductWithID);
};

export default routes;
