import Container from "./Container"
import Heading from "./Heading"
import Product from "./Product"
import ProductImg5 from "../../assets/p5.png"
import ProductImg6 from "../../assets/p6.png"
import ProductImg7 from "../../assets/p7.png"
import ProductImg8 from "../../assets/p8.png"



const BestSeller = () => {
  
  return (
    <div className=" mt-5 md:mt-32 ">
        <Container>
            <Heading title="Our Best Sellers" />

            <div className="sm:flex sm:max-md:flex-wrap sm:max-md:justify-between md:gap-x-10">


         
            <div className="   max-w-[370px]">
                <Product src={ProductImg5} badge={true} badgeTitle="New"/>
              </div>
              <div className=" max-w-[370px]">
              <Product src={ProductImg6} badge={true} badgeTitle="New"/>
              </div>
              <div className=" max-w-[370px]">
              <Product src={ProductImg7} badge={true} badgeTitle="New"/>
              </div>
              <div className=" max-w-[370px]">
              <Product src={ProductImg8} badge={true} badgeTitle="New"/>
              </div> 
   
   
            

              
            </div>





        </Container>
    </div>
  )
}

export default BestSeller