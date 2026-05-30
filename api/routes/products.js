const express = require("express");
const products = express.Router();
const pool = require("../shared/pool");

products.get("/", (req, res) => {
  const mainCategoryId = req.query.maincategoryid;
  const subCategoryId = req.query.subcategoryid;

  let query = "select * from products";
  const params = [];

  if (mainCategoryId) {
    query = "select * from products join categories on products.category_id = categories.id where categories.parent_category_id = ?";
    params.push(mainCategoryId);
  }else if (subCategoryId) {
    query +=" where category_id = ?";
    params.push(subCategoryId);
  }
  pool.query(query, params, (error, products) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(products);
  });
});

products.get("/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from products where id = ?", [id], (error, products) => {
    if (error) res.status(500).send(error);
    else if (products.length === 0) res.status(404).send("Product not found");
    else res.status(200).send(products[0]);
  });
});

module.exports = products;
