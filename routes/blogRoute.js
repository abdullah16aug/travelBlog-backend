const express =require ('express')
const router = express.Router()
const  {fetchAllBlog,createBlog, deleteBlog, fetchBlogById, updateBlog}= require('../controllers/blogController.js')



router.get('/',fetchAllBlog)
router.post('/',createBlog)
router.delete('/:id',deleteBlog)
router.get('/:id',fetchBlogById)
router.patch('/:id',updateBlog)
module.exports=router