import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";
import Logo from '../../assets/OREBI.png'
import { FaFacebookF ,FaLinkedinIn,FaInstagram} from "react-icons/fa";



const Footer = () => {
  return (
    <div className="mt-10 lg:mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <div className="flex flex-wrap justify-start gap-10 md:flex-nowrap sm:justify-between">
          <div className="lg:w-[10%]">
            <h4 className="mb-4 text-base font-bold font-dm">MENU</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Home"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="About"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Contact"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className="lg:w-[10%]">
            <h4 className="mb-4 text-base font-bold font-dm">SHOP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 1"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 2"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 3"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 4"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="lg:w-[10%]">
            <h4 className="mb-4 text-base font-bold font-dm">HELP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Privacy Policy"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Terms & Conditions"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Special E-shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Shipping"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="lg:flex lg:w-[30%] justify-center">
            <div>
              <h4 className="mb-4 text-base font-bold font-dm">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <Image imgsrc={Logo} />
          </div>
        </div>


        <div className="flex flex-wrap items-center justify-between gap-10 mt-10">
          <div className="flex items-center gap-x-5">
            <FaFacebookF/>
            <FaLinkedinIn/>
            <FaInstagram/>
            
          </div>
          <p className="text-textColor font-dm ">2024 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>




      </Container>
    </div>
  );
};

export default Footer;