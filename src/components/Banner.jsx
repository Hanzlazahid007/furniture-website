import React from "react";
import { banners } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineChair } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <GrFormPrevious />,
    nextArrow: <MdOutlineNavigateNext />,
  };
  return (
    <div>
      <div className="w-10/12  mt-10 m-auto ">
        <div className="text-5xl font-bold ">
          <Link className="flex mb-10 items-center">
            <div className="text-4xl bg-yellow-500 mr-4 common-hover rounded-3xl w-16 h-12 grid place-content-center text-black">
              <MdOutlineChair />
            </div>
            Elevate YOur LifeStyle
          </Link>
          <p className="mb-10"> With Our Furniture </p>
          Creations
          <Link className="ml-6 text-4xl mb-6  bg-yellow-400 w-28 text-white   rounded-full px-7   h-12  text-blacks">
            Shop Now
          </Link>
        </div>

        <div>
          <Slider className="mt-10 mb-10" {...settings}>
            {banners.map((item, key) => {
              return (
                <div key={key}>
                  <img src={item.banner} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
