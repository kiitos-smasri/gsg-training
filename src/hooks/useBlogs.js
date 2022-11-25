import { BlogContext } from "../contexts/blogContext";
import { useContext } from "react";

const useBlog = () => useContext(BlogContext);

export default useBlog;
