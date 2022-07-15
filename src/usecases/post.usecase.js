const post = require('../models/post.model')



const create = (postData) => { 
  const newPost = post.create(postData)
  return newPost
}

const remove = (id) =>{
  const post = post.findByIdAndDelete(id)
  return post
}


module.exports = { create , remove }
