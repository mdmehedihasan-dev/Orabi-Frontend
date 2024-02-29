import Container from "./Container"
import AdvertiseImg from '../../assets/Ad_1.png'
import AdvertiseImg2 from '../../assets/Ad_2.png'
import AdvertiseImg3 from '../../assets/Ad_3.png'
import Image from "./Image"
import { Link } from "react-router-dom"

const Advertise = () => {
  return (

    <div className=" mt-5 lg:mt-36">
         <Container>
        <div className="flex gap-x-5 lg:gap-x-10">
            <div className="max-w-2/4">
              <Link to="#">
              <Image imgsrc={AdvertiseImg} />
              </Link>
            </div>
            <div className="max-w-2/4">
                <div>
                <Link to="#">
                <Image imgsrc={AdvertiseImg2}/>
                </Link>
                </div>
                <div className=" mt-1 lg:mt-10">
                <Link to="#" >
                <Image imgsrc={AdvertiseImg3}/>
                </Link>
                </div>

            </div>
        </div>
      </Container>
    </div>

     
  )
}

export default Advertise