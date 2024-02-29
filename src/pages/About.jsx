import BreadCrumb from "../components/layout/BreadCrumb"
import Container from "../components/layout/Container"
import Img from '../assets/about.png'
import Img2 from '../assets/about (2).png'
import Image from "../components/layout/Image"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <Container>
        <BreadCrumb/>
        <div className="flex gap-x-5 md:gap-x-10">
            <div className="w-2/4">

          <Link> <Image imgsrc={Img} /></Link>
            </div>
            <div className="w-2/4">

          <Link> <Image imgsrc={Img2} /></Link>
            </div>
            

        </div>

        <div className="md:pt-32 pb-10 pt-10 md:pb-[118px] w-full">
            <h4 className="font-dm md:leading-[52px] text-lg md:text-[39px] text-primaryColor ">
            Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
            </h4>
        </div>

        <div className="lg:flex gap-x-10">
            <div className=" w-full lg:w-[32%]">
                <h4 className="mt-4 mb-3 text-xl font-bold md:mt-0 md:text-2xl text-primaryColor font-dm">
                Our Vision
                </h4>
                <p className="text-base text-textColor font-dm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className=" w-full lg:w-[32%]">
                <h4 className="mt-4 mb-3 text-xl font-bold md:mt-0 md:text-2xl text-primaryColor font-dm">
                Our Vision
                </h4>
                <p className="text-base text-textColor font-dm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className=" w-full lg:w-[32%]">
                <h4 className="mt-4 mb-3 text-xl font-bold md:mt-0 md:text-2xl text-primaryColor font-dm">
                Our Vision
                </h4>
                <p className="text-base text-textColor font-dm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          
            
        </div>
    </Container>
  )
}

export default About
