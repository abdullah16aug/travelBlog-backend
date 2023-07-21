const express =require ('express')
const router = express.Router()
const  {fetchAllBlog,createBlog}= require('../controllers/blogController.js')



router.get('/',fetchAllBlog)
router.post('/',createBlog)

module.exports=router