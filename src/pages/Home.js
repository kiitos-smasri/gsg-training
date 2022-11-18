import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Header />
      <Link to="/about">About</Link>
    </div>
  );
}
