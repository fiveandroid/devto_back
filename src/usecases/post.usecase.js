const post = require('../models/post.model')



const create = (postData) => { 
  const newPost = post.create(postData)
  return newPost
}

const getAll =() =>{ //
  return post.find({})
}




module.exports = { create, getAll }
const remove = (id) =>{
  const resultPost =  post.findByIdAndDelete(id)
  return resultPost
}


module.exports = { create , getAll, remove }
