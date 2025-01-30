import React, { useMemo } from "react";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Slider from "../../utils/slider/Slider";
import "./Header.css";

const Header = ({
  connectData = [
    { tour: "Yala", title: "Explore Yala National Park" },
    { tour: "Ella", title: "Explore Ella" },
    { tour: "Udawalawe", title: "Explore Udawalawe National Park" },
  ],
  selectedTour = "Ella",
}) => {
  const tourContent = useMemo(() => {
    const tourData = connectData.find((item) => item.tour === selectedTour);

    if (!tourData) return null;

    return (
      <div>
        <h1 className="text-[144px] text-white font-Montserrat font-[800] leading-[140px]">
          Explore <br />
          <span className={`tour ${selectedTour}`} data-tour={selectedTour}>
            {selectedTour}
          </span>
        </h1>
        <p className="text-white mt-[-70px] p-2 w-[95%] font-semibold">
          Experience the beauty and wildlife of {tourData.title}. Immerse
          yourself in breathtaking landscapes and unique natural environments.
        </p>
      </div>
    );
  }, [connectData, selectedTour]);

  return (
    <div className="flex items-center mt-[40px] flex-col md:flex-row">
      <div className="w-full md:w-1/2 px-4 md:px-[140px]">
        {tourContent}
        <div className="mt-[100px] flex gap-12 flex-wrap justify-center md:justify-start">
          <button
            className="border-2 border-[#00A189] text-[20px] px-6 py-2 font-semibold text-white hover:text-[#00A189]"
            aria-label="Book this tour"
          >
            Book Now
          </button>
          <button
            className="flex items-center gap-2"
            aria-label="Watch videos on YouTube"
          >
            <FaYoutube className="text-red-700 text-[30px]" />
            <span className="text-white">Watch videos like this</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col items-end justify-end relative mt-6 md:mt-0">
        <Slider />
        <div className="flex gap-4 text-xl text-white absolute bottom-[-60px] right-[100px]">
          <FaYoutube aria-label="YouTube" />
          <FiInstagram aria-label="Instagram" />
          <FaWhatsapp aria-label="WhatsApp" />
          <FaFacebook aria-label="Facebook" />
        </div>
      </div>
    </div>
  );
};

export default Header;
