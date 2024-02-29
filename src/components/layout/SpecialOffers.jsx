import Container from "./Container"
import Heading from "./Heading"
import Product from "./Product"
import ProductImg9 from "../../assets/p9.png"
import ProductImg10 from "../../assets/p10.png"
import ProductImg11 from "../../assets/p11.png"
import ProductImg12 from "../../assets/p12.png"



const SpecialOffers = () => {
  
  return (
    <div className="mt-5 md:mt-32 ">
        <Container>
            <Heading title="Special Offers" />

            <div className="sm:flex sm:max-md:flex-wrap sm:max-md:justify-between md:gap-x-10">
            <div className="   max-w-[370px]">
                <Product src={ProductImg9} badge={true} badgeTitle="10%"/>
              </div>
              <div className=" max-w-[370px]">
              <Product src={ProductImg10} badge={true} badgeTitle="New"/>
              </div>
              <div className=" max-w-[370px]">
              <Product src={ProductImg11} badge={true} badgeTitle="New"/>
              </div>
              <div className=" max-w-[370px]">
              <Product src={ProductImg12} badge={true} badgeTitle="New"/>
              </div> 
   
   
            

              
            </div>





        </Container>
    </div>
  )
}

export default SpecialOffers