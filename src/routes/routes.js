import { addnewProduct } from "../controllers/controllers";

const routes = (app) => {
  app.route('/products').post(addnewProduct);
  // Post endpoint
};

export default routes;
