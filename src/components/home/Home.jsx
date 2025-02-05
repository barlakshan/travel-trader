import "./Home.css";
import React, { useContext } from "react";
import { SliderContext } from "../../context/AppContext";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import MostAttractive from "../mostattractive/MostAttractive";
import ViewPoint from "../viewpoint/ViewPoint";
import Footer from "../footer/Footer";

const Home = () => {
  const { activeSlideIndex } = useContext(SliderContext);

  const handleClass = (activeSlideIndex) => {
    switch (activeSlideIndex) {
      case 0:
        return "bgContainer1";
      case 1:
        return "bgContainer2";
      default:
        return "bgContainer3";
    }
  };

  const classChange = handleClass(activeSlideIndex);

  return (
    <div className={`min-h-screen overflow-y-auto ${classChange}`} id="home">
      <Navbar />
      <Header />
      <MostAttractive />
      <ViewPoint />
      <Footer />
    </div>
  );
};

export default Home;
