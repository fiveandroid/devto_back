const { create, remove } = require("../usecases/post.usecase");
const express = require("express");

const router = express.Router();

router.post("/crear/", async (request, response) => {
  const { body } = request;
  console.log(body);
  const post = await create(body);
  response.status(201);
  response.json({
    success: true,
    data: {
      post,
    },
  });
});

router.delete("/:id", async (request, response) => {
  const {id} = request.params  
   try {
     const post = await remove(id)
     response.json({
       success:true,
       message:"post was deleted"
     })
   }catch(error) {
     response.status(error.status || 400)
      response.json({
     success: false,
       message: "could'nt delete post"
      })
   }
 })
 
module.exports = router;
