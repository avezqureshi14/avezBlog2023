// controllers/blogController.js
const Blog = require('../models/Blog');

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  const { title,imageUrl, description } = req.body;
  try {
    const blog = new Blog({ title,imageUrl, description });
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Failed to create blog' });
  }
};

// Update a blog by ID
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update blog' });
  }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
