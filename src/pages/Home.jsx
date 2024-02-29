import AdditionalInfo from "../components/layout/AdditionalInfo"
import Advertise from "../components/layout/Advertise"
import Banner from "../components/layout/Banner"
import BestSeller from "../components/layout/BestSeller"
import MiddleAdvertisement from "../components/layout/MiddleAdvertisement"
import Newwarrival from "../components/layout/NewArrival"
import SpecialOffers from "../components/layout/SpecialOffers"

const Home = () => {
  return (
    <div>
        <Banner/>
        <AdditionalInfo/>
        <Advertise/>
        <Newwarrival/>
        <BestSeller/>
        <MiddleAdvertisement/>
        <SpecialOffers/>
        
    </div>
  )
}

export default Home