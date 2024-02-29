import Image from "./Image"
import AdeImg from '../../assets/Ads_2.png'
import Container from "./Container"
import { Link } from "react-router-dom"

const MiddleAdvertisement = () => {
  return (
    <div className="mt-5 lg:mt-32 md:max-xl:mt-5">
        <Container>
        <Link>
        <Image imgsrc={AdeImg} />
        </Link>
    </Container>
    </div>
  )
}

export default MiddleAdvertisement