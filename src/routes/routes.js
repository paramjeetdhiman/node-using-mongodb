import {
  addnewProduct,
  getProducts,
  getProductWithID,
  deleteProduct,
  updateProduct,
} from "../controllers/controllers";

const routes = (app) => {
  // Post endpoint - get multiple products
  app.route("/products").get(getProducts).post(addnewProduct);

  //   get a specific product with an id  also  update single item
  //   delete product
  app
    .route("/products/:ProductID")
    .get(getProductWithID)
    .put(updateProduct)
    .delete(deleteProduct);
};

export default routes;
