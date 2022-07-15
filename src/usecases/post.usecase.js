const post = require('../models/post.model')



const create = (postData) => { 
  const newPost = post.create(postData)
  return newPost
}

const getAll =() =>{ //
  return post.find({})
}

const getById = (id) =>{
  return post.findById(id)
}




module.exports = { create, getAll }
const remove = (id) =>{
  const resultPost =  post.findByIdAndDelete(id)
  return resultPost
}


module.exports = { create , getAll, getById, remove }
