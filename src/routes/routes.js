import { addNewProduct } from "../controllers/controllers";

const routes = (app) => {
  app
    .route("/products")
    // Post endpoint
    .post(addNewProduct);
};

export default routes;
