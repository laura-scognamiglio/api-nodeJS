
    const express = require("express");
    const router = express.Router();
    const users = require("../controllers/users.controller");
  
    // Create a new users
    // router.post("/", users.create);
  
    // Retrieve all users
    router.get("/test",   (req, res) => {
        // const AllUsers = users.getAll();
        res.send("heyyyyy user route du routeur?");
     
    
    });
    
    router.get("/users", (req,res) => {
        const allUsers = users.getAll();
        
        res.json(allUsers);
    })
    // Retrieve all published users
    // router.get("/users_groupes", users.findAllByGroupes);
  
    // // Retrieve a single users with id
    // router.get("/:id", users.findOne);
  
    // // Update a users with id
    // router.put("/:id", users.update);
  
    // // Delete a users with id
    // router.delete("/:id", users.delete);
  
    // // Delete all users
    // router.delete("/", users.deleteAll);
  
  
module.exports = router;