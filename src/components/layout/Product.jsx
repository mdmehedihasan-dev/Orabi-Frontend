/* eslint-disable react/prop-types */
import Badge from "./Badge";
import Image from "./Image";
import { FaHeart } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ src, badge, badgeTitle }) => {
  return (
    <div>
      <div className="relative overflow-x-hidden group">
        <Image className="w-full" imgsrc={src} />
        {badge && <Badge title={badgeTitle} />}

        <div className="absolute bottom-[-45%] md:max-xl:bottom-[-92%] ease-in duration-300 group-hover:bottom-0 left-0 w-full h-36 bg-white py-6 px-8">
          <div className="flex items-center justify-end md:max-xl:gap-x-2 gap-x-4">
            <p className="font-dm text-base md:max-xl:text-sm  text-textColor">
              Add to Wish List
            </p>
            <FaHeart className=" md:max-xl:text-base text-2xl" />
          </div>
          <div className="flex items-center justify-end gap-x-2 md:gap-x-4 py-5 md:max-xl:py-1">
            <p className="font-dm text-base md:max-xl:text-sm  text-textColor">Compare</p>
            <HiRefresh className="md:max-xl:text-base text-2xl" />
          </div>
          <div className="flex items-center justify-end gap-x-2 md:gap-x-4">
            <p className="font-dm text-base md:max-xl:text-sm font-bold  text-primaryColor">
              Add to Cart
            </p>
            <FaShoppingCart className="md:max-xl:text-base text-2xl" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center md:mt-6">
          <h2 className="font-bold text-xl md:max-xl:text-xs font-dm text-primaryColor">
            Basic Crew Neck Tee
          </h2>
          <p className="text-base md:max-xl:text-xs font-dm text-textColor">$44.00</p>
        </div>
        <p className="text-base md:max-xl:text-xs font-dm text-textColor md:max-xl:mt-2 mb-5">Black</p>
      </div>
    </div>
  );
};

export default Product;
