// Handle certain routes
const express = require("express");
const router = express.Router();
const blogs = [
  {
    id: 1,
    title: "Task 1",
    description: "Task 1 descripction",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2 descripction",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Task 3 descripction",
  },
  {
    id: 4,
    title: "Task 4",
    description: "Task 4 descripction",
  },
];

// Whenever we want get resources from database
router.get("/", (req, res) => {
  // Send data to frontend or any client
  return res.status(200).json({
    message: "Data succesfully fetched",
    data: blogs,
  });
});

// Whenever we want create a new resource in database
router.post("/", (req, res) => {
  const body = req.body;
  blogs.push(body);
  return res.status(200).json({
    message: "Data succesfully Created",
    data: blogs,
  });
});

// // Whenever we want to create or update a resource in database
router.put("/:id", (req, res) => {
  const paramId = req.params.id;
  const body = req.body;
  let updatedBlogs = blogs.map((blog) => {
    if (blog.id === +paramId) {
      blog = body;
    }
    return blog;
  });

  return res.status(200).json({
    message: "Data succesfully updated",
    data: updatedBlogs,
  });
});

// // Whenever we want to delete a resource in database
router.delete("/:id", (req, res) => {
  const paramId = req.params.id;
  const findIndex = blogs.findIndex(({ id }) => id === +paramId);

  if (findIndex !== -1) {
    blogs.splice(findIndex, 1);
  }

  return res.status(200).json({
    message: "Data succesfully deleted",
    data: blogs,
  });
});

//Find a particular blog baased on their ID
router.get('/:id', (req, res) => {
    const paramId = req.params.id;
    const finditem = blogs.find(({ id }) => id === +paramId);

    return res.status(200).json({
        message: "Data succesfully fetched",
        data: finditem ? finditem : [], 
      });
})

// This is the traditional way to export any file in node.js
module.exports = router;


// We created a TODO application, now you have to created the backend for it
// 1. Fetch all the todos from backend
// 2. Delete selected todos from backend
// 3. Updated Todo from backend
// 4. Create a todo from backend