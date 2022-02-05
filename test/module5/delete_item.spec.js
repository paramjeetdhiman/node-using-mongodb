const fs = require("fs");
const expect = require("expect.js");

describe("Deleting a product", () => {
  it("Add a controler to remove a product @controller-remove", (done) => {
    try {
      expect(
        fs.readFileSync("src/controllers/controllers.js").toString()
      ).to.contain(
        "Product.deleteOne({ _id: req.params.ProductID}, (err, Product) => {"
      );
      expect(
        fs.readFileSync("src/controllers/controllers.js").toString()
      ).to.contain("res.json({ message: 'successfully deleted product' });");
      done();
    } catch (error) {
      done(new Error("No controllers for DELETE endpoint detected"));
    }
  });

  it("Add a route to remove a product @route-remove", (done) => {
    try {
      expect(fs.readFileSync("src/routes/routes.js").toString()).to.contain(
        ".delete(deleteProduct);"
      );
      done();
    } catch (error) {
      done(new Error("No routes for DELETE endpoint detected"));
    }
  });
});
