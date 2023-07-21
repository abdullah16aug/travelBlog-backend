const mongoose = require('mongoose');

// Create a schema for the travel blog
const travelBlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
 
  author: {
    type: String,
    required: true,
  },
  // You can add more fields here if needed, such as images, locations, etc.
},{
    timestamps: true,
  });

// Create the travel blog model using the schema
const Blog = mongoose.model('Blog', travelBlogSchema);

// Export the model to be used in other parts of the application
module.exports = Blog;
