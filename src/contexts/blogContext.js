import { createContext, useEffect } from "react";

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
export const BlogContext = createContext(null);

const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={blogInfo}>{children}</BlogContext.Provider>
  );
};
export default BlogProvider;
