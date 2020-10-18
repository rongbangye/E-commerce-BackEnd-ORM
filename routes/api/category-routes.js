const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  console.log("===========Get All Categories===========");
  // be sure to include its associated Products
  Category.findAll({})
    .then((dbCategoriesData) => res.json(dbCategoriesData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  console.log("===========Get One Category by ID===========");
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoriesData) => {
      if (!dbCategoriesData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbCategoriesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new
  console.log("===========Create a new Category===========");
  Category.create({
    category_name: req.body.category_name,
  })
    .then((dbCategoriesData) => res.json(dbCategoriesData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  console.log("===========Update a Category by ID===========");
  Category.update({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoriesData) => {
      if (!dbCategoriesData[0]) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbCategoriesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  console.log("===========Delete a Category by ID===========");
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoriesData) => {
      if (!dbCategoriesData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbCategoriesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
