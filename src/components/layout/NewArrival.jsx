/* eslint-disable react/prop-types */
import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";
import ProductImg from "../../assets/p1.png";
import ProductImg2 from "../../assets/p2.png";
import ProductImg3 from "../../assets/p3.png";
import ProductImg4 from "../../assets/p4.png";
import Slider from "react-slick";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";


// next arrow 
function SampleNextArrow(props) {
  const {  style, onClick } = props;
  return (
    <span
      className="!flex w-16 h-16 rounded-full justify-center items-center text-white text-4xl bg-[rgba(0,0,0,.20)] absolute top-[40%] right-0"
      style={{ ...style,
       }}
      onClick={onClick}
    > <HiArrowSmRight/> </span>
  );
}
// Prev Arrow 

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <span
      className="!flex w-16 h-16 rounded-full justify-center items-center text-white text-4xl bg-[rgba(0,0,0,.20)] absolute left-0 top-[40%] z-50 "
      style={{ ...style, }}
      onClick={onClick}
    > <HiArrowSmLeft />
    </span>
  );
}


const NewArrival = () => {
  const settings = {
    nextArrow:<SampleNextArrow/>,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mt-5 md:mt-32 ">
      <Container>
        <Heading title="New Arrivals" />

        {/* <div className="sm:flex sm:max-md:flex-wrap sm:max-md:justify-between md:gap-x-10"> */}

        <Slider {...settings}>
          <div className="   max-w-[370px]">
            <Product src={ProductImg} badge={true} badgeTitle="10%" />
          </div>
          <div className=" max-w-[370px]">
            <Product src={ProductImg2} badge={true} badgeTitle="New" />
          </div>
          <div className=" max-w-[370px]">
            <Product src={ProductImg3} badge={true} badgeTitle="New" />
          </div>
          <div className=" max-w-[370px]">
            <Product src={ProductImg4} badge={true} badgeTitle="New" />
          </div>
          </Slider>
        {/* </div> */}
      </Container>

    </div>
  );
};

export default NewArrival;
