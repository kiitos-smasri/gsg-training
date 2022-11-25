// This component is written to demonstrate the useContext Hook.
import React, { useContext, createContext } from "react";

const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Adhithi Ravichandran",
  },
  GraphQL: {
    post: "Learn GraphQL Mutations",
    author: "Adhithi Ravichandran",
  },
};

const BlogContext = createContext(null);

function ParentComponent() {
  return (
    <BlogContext.Provider value={blogInfo}>
      <h2>Use Context Example Component</h2>
      <BlogDetailComponent />
      <MyOtherBlogInfoComponent />
    </BlogContext.Provider>
  );
}

function BlogDetailComponent() {
  const blogDetails = useContext(BlogContext);
  return (
    <div>
      <h3>React Blog Details</h3>
      <p>Topic: {blogDetails.React.post}</p>
      <p>Author: {blogDetails.React.author}</p>
    </div>
  );
}

function MyOtherBlogInfoComponent() {
  const blogDetails = useContext(BlogContext);
  return (
    <div>
      <h3>GraphQL Blog Details</h3>
      <p>Topic: {blogDetails.GraphQL.post}</p>
      <p>Author: {blogDetails.GraphQL.author}</p>
    </div>
  );
}

export default ParentComponent;
