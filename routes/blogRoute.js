const express =require ('express')
const router = express.Router()
const  {fetchAllBlog,createBlog, deleteBlog, fetchBlogById}= require('../controllers/blogController.js')



router.get('/',fetchAllBlog)
router.post('/',createBlog)
router.delete('/:id',deleteBlog)
router.get('/:id',fetchBlogById)
module.exports=router