const post = require('../models/post.model')



const create = (postData) => { 
  const newPost = post.create(postData)
  return newPost
}

const remove = (id) =>{
  const resultPost =  post.findByIdAndDelete(id)
  return resultPost
}


module.exports = { create , remove }
