import "./MostAttractive.css";
import img1 from "../../assets/hambantota/yala.webp";
import img13 from "../../assets/hambantota/himg1.jpg";
import img7 from "../../assets/hambantota/himg2.jpg";
import img4 from "../../assets/hambantota/himg3.jpg";
import img10 from "../../assets/hambantota/hibg5.jpg";

import img2 from "../../assets/ella/ellabg.jpg";
import img8 from "../../assets/ella/ella5.jpg";
import img14 from "../../assets/ella/ellaimg3.jpg";
import img5 from "../../assets/ella/ellaimg4.jpg";
import img11 from "../../assets/ella/ella2.jpg";

import img9 from "../../assets/galle/galle2.webp";
import img6 from "../../assets/galle/galle3.png";
import img12 from "../../assets/galle/galle5.png";
import img15 from "../../assets/galle/bg2.png";
import img3 from "../../assets/galle/galle.png";

import bgleft from "../../assets/bg/bgleft.png";
import bgright from "../../assets/bg/bgright.png";

import { BsHexagonFill } from "react-icons/bs";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { SliderContext } from "../../context/AppContext";
import Aos from "aos";

const MostAttractive = () => {
  const { activeSlideIndex } = useContext(SliderContext);

  useEffect(() => {
    Aos.init();
  }, []);

  const datas = [
    {
      name: "Hambantota",
      leftImg1: img1,
      leftImg2: img7,
      leftImg3: img13,
      rightImg1: img4,
      rightImg2: img10,
    },
    {
      name: "Ella",
      leftImg1: img2,
      leftImg2: img8,
      leftImg3: img14,
      rightImg1: img5,
      rightImg2: img11,
    },
    {
      name: "Galle",
      leftImg1: img3,
      leftImg2: img9,
      leftImg3: img12,
      rightImg1: img6,
      rightImg2: img15,
    },
  ];

  const infos = datas[activeSlideIndex] || datas[0];

  return (
    <section
      className="bg-[#001E23] pt-[120px] pb-[250px] w-full overflow-hidden"
      id="most"
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2
          className="text-[#42a8bb] text-[76px] font-DancingScript"
          data-aos="fade-up"
        >
          Why you visit?
        </h2>
        <h2
          className="text-center text-[54px] text-white font-Montserrat font-[500] leading-[50px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Most Attractive Place <br /> in {infos.name}
        </h2>
      </div>

      <section className="flex justify-center mt-10 relative">
        <div className="bg-white w-[1px] h-[750px] flex flex-col justify-around items-center">
          <div className="relative flex items-center">
            <BsHexagonFill className="text-[#2FA8B9] text-[30px] rotate-[90deg]" />
            <p className="absolute w-[400px] left-[70px] text-white">
              lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
              lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
            </p>
          </div>

          <div className="relative flex items-center">
            <BsHexagonFill className="text-[#2FA8B9] text-[30px] rotate-[90deg]" />
            <p className="absolute w-[400px] left-[70px] text-white">
              lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
              lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
            </p>
          </div>

          <img
            src={infos.leftImg1}
            alt="leftImg1"
            className="hexagon-image absolute top-[-180px] left-[-70px] w-[500px] h-[500px]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />

          <img
            src={infos.leftImg2}
            alt="leftImg2"
            className="hexagon-image absolute top-[10%] left-[20%] w-[250px] h-[250px]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1500"
          />

          <div className="relative flex items-center">
            <BsHexagonFill className="text-[#2FA8B9] text-[30px] rotate-[90deg]" />
            <p className="absolute w-[400px] right-[70px] text-white text-right">
              lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
              lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
            </p>
          </div>

          <div className="relative flex items-center">
            <BsHexagonFill className="text-[#2FA8B9] text-[30px] rotate-[90deg]" />
            <p className="absolute w-[400px] right-[70px] text-white text-right">
              lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
              lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
            </p>
          </div>

          <img
            src={infos.rightImg1}
            alt="rightImg1"
            className="hexagon-image absolute top-[200px] right-[-50px] w-[500px] h-[500px]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />

          <img
            src={infos.rightImg2}
            alt="rightImg2"
            className="hexagon-image absolute top-[43%] right-[25%] w-[250px] h-[250px]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1500"
          />

          <div className="relative flex items-center">
            <BsHexagonFill className="text-[#2FA8B9] text-[30px] rotate-[90deg]" />
            <p className="absolute w-[400px] left-[70px] text-white">
              lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
              lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
            </p>
          </div>

          <img
            src={infos.leftImg3}
            alt="leftImg3"
            className="hexagon-image absolute top-[78%] right-[55%] w-[190px] h-[190px]"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1000"
          />

          <img
            src={bgleft}
            alt="leftImg3"
            className="absolute top-[78%] left-[-120px] w-[430px] h-[430px]"
          />
          <img
            src={bgright}
            alt="leftImg3"
            className="absolute top-[105%] right-[-100px] w-[360px] h-[430px]"
          />
        </div>
      </section>
    </section>
  );
};

export default MostAttractive;
