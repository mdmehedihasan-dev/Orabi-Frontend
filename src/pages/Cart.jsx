import Container from "../components/layout/Container";
import BreadCrumb from "../components/layout/BreadCrumb";
import { IoClose } from "react-icons/io5";
import Img from "../assets/Image.png";
import Image from "../components/layout/Image";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useState } from "react";
import Button from "../components/layout/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  let [qty, setQty] = useState(1);

  return (
    <Container>
      <BreadCrumb />
      <div>
        <div className="flex gap-x-5 sm:gap-x-20 md:gap-x-36 lg:gap-x-[250px] xl:gap-x-[340px] bg-[#F5F5F3] py-8 px-5">
          <span className="text-base font-bold font-dm text-primaryColor">
            Product
          </span>
          <span className="text-base font-bold font-dm text-primaryColor">
            Price
          </span>
          <span className="text-base font-bold font-dm text-primaryColor">
            Quantity
          </span>
          <span className="text-base font-bold font-dm text-primaryColor">
            Total
          </span>
        </div>
        <div className="py-8 px-2 md:px-5 flex items-center sm:gap-x-14 lg:gap-x-32 border-2 border-solid border-[#FOFOFO]">
          <div className="flex items-center lg:gap-x-5">
            <IoClose className="hidden md:block" />
            <Image imgsrc={Img} />
            <span className="hidden text-base font-bold font-dm md:block text-primaryColor">
              Product Name
            </span>
          </div>
          <div>
            <span className="text-base font-bold font-dm text-primaryColor ">
              $44
            </span>
          </div>
          <div className="border-2 border-solid border-[#FOFOFO] ml-8 lg:ml-48 flex items-center  gap-x-2  lg:gap-x-9 py-1 px-4">
            <FiMinus onClick={() => setQty(qty--)} className="cursor-pointer" />
            <p>{qty}</p>
            <FiPlus onClick={() => setQty(qty++)} className="cursor-pointer" />
          </div>
          <div className="ml-2 sm:ml-12 lg:ml-30 xl:ml-44">
            <span className="text-base font-bold font-dm text-primaryColor">
              ${44 * qty}
            </span>
          </div>
        </div>

        <div className="py-8 px-2 md:px-5 flex items-center justify-between sm:gap-x-14 lg:gap-x-32 border-2 border-solid border-[#FOFOFO]">
          <div className="flex items-center gap-x-5">
            <select className="border-2 border-solid border-[#FOFOFO] py-2 px-5">
              <option value="">SIZE</option>
              <option value="saab">lg</option>
              <option value="vw">xl</option>
              <option value="vw">xxl</option>
            </select>
            <label className="text-base font-bold font-dm text-primaryColor">
              Apply coupon
            </label>
          </div>
          <div>
            <span className="text-base font-bold font-dm text-primaryColor">
              Update Cart
            </span>
          </div>
        </div>

      <div className="flex justify-end"  >
      <div className="text-end mt-14">
        <span className="text-base font-bold font-dm text-primaryColor">Cart totals</span>
      <div className="flex my-6">
          <div>
            <p className="border-2 w-40  lg:w-80 py-3 px-5 border-solid border-[#FOFOFO] text-base font-bold font-dm text-primaryColor">
              Subtotal
            </p>
            <p className="border-2 w-40  lg:w-80 py-3 px-5 border-solid border-[#FOFOFO] text-base font-bold font-dm text-primaryColor">
              Total
            </p>
          </div>
          <div>
            <p className="border-2  w-40 lg:w-80 py-3 px-5 border-solid border-[#FOFOFO] text-base font-bold font-dm text-textColor">
              {44 * qty}$
            </p>
            <p className="border-2  w-40  lg:w-80 py-3 px-5 border-solid border-[#FOFOFO] text-base font-bold font-dm text-primaryColor">
              {44 * qty}$
            </p>
          </div>
        </div>
       <Link to={'/checkout'}>
       <Button title={'Proceed to Checkout'}/>
       </Link>
      </div>
      </div>
      </div>
    </Container>
  );
};

export default Cart;
