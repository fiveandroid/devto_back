const { create, getAll, getById, remove } = require("../usecases/post.usecase");
const express = require("express");
const { request } = require("express");

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

router.get("/", async (request, response) => {
  try {
    const post = await getAll();
    response.json({
      sucess: true,
      data: {
        post
      }
    })

  } catch (error) {
    response.status(error.status || 500)
    response.json({
      sucess: false,
      message: error.message
    })
  }
})

router.get("/:id", async (request, response)=>{
  const {id} = request.params

  try{
    const post = await getById(id)
    response.json({
      sucess: true,
      data:{
        post
      }
    })
  } catch(error){
    response.status(error.status || 500)
    response.json({
      sucess: false,
      message: error.message
    })
  }
})

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
