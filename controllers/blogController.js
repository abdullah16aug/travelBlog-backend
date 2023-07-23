const Blog =require('../model/blogModel.js') ;

exports.fetchAllBlog=async(req,res)=>{
    try {
        const blogs= await Blog.find({})
        if (blogs.length === 0) {
            return res.status(404).json({ message: 'No blogs found.' });
          }
        res.status(200).json(blogs)
        
    } catch (error) {
      res.status(500).json({message:error.message})                 
    }
}
exports.createBlog=async(req,res)=>{
    try {
        const blog= new Blog(req.body)
        const newBlog= await blog.save()
        res.status(201).json(newBlog)
    } catch (error) {
        res.status(500).json({message:error.message})                 
    }
}
exports.deleteBlog=async(req,res)=>{
    const {id}=req.params
    try {
        const blog= await Blog.findByIdAndDelete(id)

        res.status(201).json(blog)
    } catch (error) {
        res.status(500).json({message:error.message})                 
    }
}
exports.fetchBlogById=async(req,res)=>{
const {id}=req.params
try {
    const card = await Blog.findById(id)
    res.status(201).json(card)
    
} catch (error) {
    res.status(500).json({message:error.message})
}
}
exports.updateBlog=async(req,res)=>{
    const {id} = req.params
    
    try {
      const product=await Product.findByIdAndUpdate(id,req.body)
      res.status(201).json(product)
    } catch (error) {
      res.status(400).json(error)
    }
  }