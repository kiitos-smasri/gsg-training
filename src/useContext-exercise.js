// This component is written to demonstrate the useContext Hook.
import React, { useContext } from "react";

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

function ParentComponent() {
  return (
    <>
      <h2>Use Context Example Component</h2>
      <BlogDetailComponent blogDetails={blogInfo} />
      <MyOtherBlogInfoComponent blogDetails={blogInfo} />
    </>
  );
}

function BlogDetailComponent({ blogDetails }) {
  return (
    <div>
      <h3>React Blog Details</h3>
      <p>Topic: {blogDetails.React.post}</p>
      <p>Author: {blogDetails.React.author}</p>
    </div>
  );
}

function MyOtherBlogInfoComponent({ blogDetails }) {
  return (
    <div>
      <h3>GraphQL Blog Details</h3>
      <p>Topic: {blogDetails.GraphQL.post}</p>
      <p>Author: {blogDetails.GraphQL.author}</p>
    </div>
  );
}

export default ParentComponent;
