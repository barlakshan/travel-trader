import "./ViewPoint.css";
import { BiSolidCalendar } from "react-icons/bi";

import img1 from "../../assets/ella/ella2.jpg";
import img2 from "../../assets/galle/galle5.png";
import img3 from "../../assets/hambantota/bg-beach1.png";
import img4 from "../../assets/udawalawe/udawalawe.webp";
import img5 from "../../assets/ella/ella5.jpg"; // Ensure this path is correct
import { useState, useEffect } from "react";
import BookTour from "../../utils/BookTour";

const ViewPoint = () => {
  const [state, setState] = useState(2);
  const [imgVisible, setImgVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImgVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [state]);

  const handleSelected = (index) => {
    setState(index);
  };

  const handleImages = () => {
    switch (state) {
      case 0:
        return img1;
      case 1:
        return img2;
      case 2:
        return img3;
      case 3:
        return img4;
      default:
        return img3;
    }
  };

  const imgSrc = handleImages();

  return (
    <div className="mt-[-100px]" id="viewport">
      <div className="text-center">
        <h1 className="text-[#42a8bb] text-[76px] font-DancingScript">
          View Point
        </h1>
        <h2 className="text-[54px] text-white font-Montserrat font-[500] leading-[50px]">
          Discover our Tourist <br /> Viewpoint
        </h2>
      </div>

      <div className="flex justify-between items-center mt-[50px]">
        <div className="w-[40%] flex flex-col gap-2 pl-[100px]">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelected(index)}
              className={`${
                state === index ? "bg-[#00a18971]" : "border-white "
              }border-transparent border-[6px] ml-[-100px] pl-[100px] py-2 z-[99] relative`}
            >
              <div className="text-white flex gap-10">
                <p className="text-[25px] font-semiBold">2/07</p>
                <div>
                  <h3 className="text-[17px] font-[600]">Lorum ipsum</h3>
                  <p className="mt-2">
                    Lorum ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <div className="flex items-center gap-5">
                    {/* <img src={img5} alt="ella" width={130} /> */}
                    <button className="font-[600] hover:text-[#00A1B9]">
                      View Route
                    </button>
                  </div>
                </div>
              </div>
              {state === index && (
                <p className="absolute right-0 top-[10%] text-[25px] font-semibold text-white flex items-center gap-1 justify-center verticleText">
                  <BiSolidCalendar />
                  2/07
                </p>
              )}
            </div>
          ))}
          <BookTour className="justify-start mt-8" />
        </div>
        <div className="w-[60%]">
          <img
            src={imgSrc}
            alt=""
            className={`h-[650px] w-full ${imgVisible ? "" : "fade-out"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPoint;
