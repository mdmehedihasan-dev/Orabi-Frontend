/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import Container from "../components/layout/Container";
import Pagination from "../components/layout/Pagination";
import LeftSidebar from "../components/layout/LeftSidebar";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import DropDown from "../components/layout/DropDown";

const Shop = () => {
  let [showItem, setShowItem] = useState(12);
  let [show, setShow] = useState(true);
  let showRef = useRef();

  let handleChange = (e) => {
    setShowItem(+e.target.value);
  };

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (showRef.current.contains(e.target)) {
        setShow(show);
      } else {
        setShow(!show);
      }
    });

    // =================================
    function scrollWidth() {
      if (window.innerWidth < 1004) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <div>
      <DropDown   dropRef={showRef} >
      <Container>
        <BreadCrumb />

        <div className="relative flex gap-x-10">
        
            
          {show && (
            <div className="w-full sm:w-[25%] z-50 bg-white sm:bg-transparent absolute sm:static">
              <IoIosCloseCircle
                className="block cursor-pointer sm:hidden"
                onClick={() => setShow(!show)}
              />
              <LeftSidebar />
            </div>
          )}


         



          <div className=" w-full md:w-[75%] relative ">
            <div className="flex  items-center gap-x-10 mb-[60px]">
              <div className="flex pt-5 pl-4 text-xl sm:hidden">
                <IoFilterSharp
                  className="cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              </div>

              {/* Sort by Select bar 👋 */}
              <div className="md:flex items-center gap-x-3.5">
                <span className="text-base text-textColor font-dm">
                  Sort by:
                </span>
                <select
                  id="countries"
                  className=" md:w-60 border font-dm border-gray-300 text-textColor text-base   focus:border-black block  p-2.5 rounded-lg   dark:border-gray-600  dark:text-white dark:focus:border-black"
                >
                  <option selected>Features</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              {/* Number Select bar 🔢  */}
              <div className="md:flex items-center   gap-x-3.5">
                <span className="text-base text-textColor font-dm">Show:</span>
                <select
                  onChange={handleChange}
                  id="countries"
                  className=" md:w-[139px] border font-dm border-gray-300 text-textColor text-base   focus:border-black block  p-2.5 rounded-lg   dark:border-gray-600  dark:text-white dark:focus:border-black"
                >
                  <option selected>12</option>
                  <option value="24">24</option>
                  <option value="36">36</option>
                  <option value="48">48</option>
                  <option value="60">60</option>
                </select>
              </div>
            </div>
            <Pagination itemsPerPage={showItem} />,
          </div>

         
        </div>
      </Container>
      </DropDown>
    </div>
  );
};

export default Shop;
