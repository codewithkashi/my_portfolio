import React from "react";
import {
  Header,
  Navbar,
  About,
  Work,
  Skills,
  Footer,
  Contact,
} from "@components";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
