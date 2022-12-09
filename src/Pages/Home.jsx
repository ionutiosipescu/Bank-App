import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/login">Log In Now</Link>
    </>
  );
}

export default Home;
