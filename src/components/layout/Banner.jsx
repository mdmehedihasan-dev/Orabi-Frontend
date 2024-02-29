import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "./Image";
import BannerImg from "../../assets/banner.png";
import { useState } from "react";

const Banner = () => {
  let [dotActive, setDoActive] = useState(0);

  var settings = {
    dots: true,
    autoplay:true,
    infinite:true,
    beforeChange: (prev, next) => {
      setDoActive(next);
    },
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0",
              }
            : {
                width: "30px",
                borderRight: "3px white solid",
                padding: "10px 0",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 570,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "6%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      
                    }
                  : {
                      width: "30px",
                      borderRight: "3px white solid",
                      
                      color: "transparent",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
          
        }
      },

   
    ]
  };
  return (
    <Slider {...settings}>
      <Link>
        <div>
          <Image imgsrc={BannerImg} />
        </div>
      </Link>
      <Link>
        <div>
          <Image imgsrc={BannerImg} />
        </div>
      </Link>
      <Link>
        <div>
          <Image imgsrc={BannerImg} />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
