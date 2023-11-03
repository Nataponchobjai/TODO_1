let express = require("express");

let router = express.Router();

let controllore = require("./controller");
// add item
router.post("/item", controllore.addItem);
//get all item ( summary)
router.get("/items", controllore.listItem);
//get an item (details)
router.get("/Item/:id", controllore.getItem);
// delete an item
router.delete("/item/:id", controllore.deleteItem);
// update an item
router.put("/item/:id", controllore.updateItem);

// export the router object that has all the routes attached to it 
module.exports = router;


/**
 * POST - add an item
 * DELETE -  remove an item
 * PUT - update an item
 * GET - list the items (summary)
 * GET - get item (detail)
 */