import React, { useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { SliderContext } from "../../context/AppContext";

// Import required Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import images directly
import img1 from "../../assets/hambantota/yala.webp";
import img2 from "../../assets/ella/ella.webp";
import img3 from "../../assets/udawalawe/udawalawe.webp";

const PosterSlider = () => {
  const swiperRef = useRef(null);
  const { activeSlideIndex, setActiveSlideIndex } = useContext(SliderContext);

  const places = [
    {
      name: "Yala",
      img: img1,
      description: "Experience wildlife in its natural habitat"
    },
    {
      name: "Ella",
      img: img2,
      description: "Scenic mountain views and tea plantations"
    },
    {
      name: "Galle",
      img: img3,
      description: "Historic fort and colonial architecture"
    }
  ];

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.on("slideChange", () => handleSlideChange(swiper));
    }
  }, [swiperRef]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Swiper
        ref={swiperRef}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={activeSlideIndex}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="w-80 py-8"
      >
        {places.map((place, index) => (
          <SwiperSlide key={index} className="w-10">
            <div className="relative group transition-all duration-300 hover:scale-105">
              <div className="aspect-[2/3] overflow-hidden rounded-lg shadow-xl">
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{place.name}</h3>
                    <p className="text-xs">{place.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PosterSlider;