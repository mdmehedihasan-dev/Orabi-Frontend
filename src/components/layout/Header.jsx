/* eslint-disable no-unused-vars */
import Container from "./Container";
import DropDown from "./DropDown";
import Flex from "./Flex";
import { FaBarsStaggered, FaUser } from "react-icons/fa6";
import List from "./List";
import ListItem from "./ListItem";
import { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RxTriangleDown } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import Image from "../layout/Image";
import Cart from "../../assets/cartimg.png";
import { Link } from "react-router-dom";

const Header = () => {
  let [categoryShow, setCategoryShow] = useState(false);
  let [userDropDownShow, setUserDropDownShow] = useState(false);
  let [cartDropDownShow, setCartDropDownShow] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();


  useEffect(() => {
    document.body.addEventListener("click", (e) => {

      // for shop category👍
      if (categoryRef.current.contains(e.target)) {
        setCategoryShow(true);
      } else {
        setCategoryShow(false);
      }

      // for user dropdown🧑‍🦱
      if (userRef.current.contains(e.target)) {
        setUserDropDownShow(true);
      } else {
        setUserDropDownShow(false);
      }

      // for cart drop down👇
      if (cartRef.current.contains(e.target)) {
        setCartDropDownShow(true);
      } else {
        setCartDropDownShow(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#F5F5F3] py-6 ">
      <Container>
        <Flex className="flex justify-between gap-x-2">
          {/* Shop by Category  */}
          <div className="flex items-center">
            {/* category DropDown  */}
            <DropDown
              className="relative cursor-pointer "
              dropRef={categoryRef}
            >
              <p className="flex items-center font-dm text-lg gap-x-2.5 font-semibold">
                <FaBarsStaggered />
                <span className="hidden text-base font-dm lg:block">
                  Shop by Category
                </span>
              </p>
              {categoryShow && (
                <List className="absolute top-14 lg:top-9 w-[263px]  bg-primaryColor text-[#767676] z-50 ">
                  <ListItem
                    href="#"
                    className="px-5 py-4 duration-300 ease-in-out border border-solid hover:px-7 hover:font-semibold hover:text-white border-borderColor"
                    itemName="Accesories"
                  />
                  <ListItem
                    href="#"
                    className="px-5 py-4 duration-300 ease-in-out border border-solid hover:px-7 hover:font-semibold hover:text-white border-borderColor"
                    itemName="Furniture"
                  />
                  <ListItem
                    href="#"
                    className="px-5 py-4 duration-300 ease-in-out border border-solid hover:px-7 hover:font-semibold hover:text-white border-borderColor"
                    itemName="Electronics"
                  />
                  <ListItem
                    href="#"
                    className="px-5 py-4 duration-300 ease-in-out border border-solid hover:px-7 hover:font-semibold hover:text-white border-borderColor"
                    itemName="Clothes"
                  />
                  <ListItem
                    href="#"
                    className="px-5 py-4 duration-300 ease-in-out border border-solid hover:px-7 hover:font-semibold hover:text-white border-borderColor"
                    itemName="Bags"
                  />
                  <ListItem
                    href="#"
                    className="px-5 py-4 duration-300 ease-in-out border border-solid border-borderColor hover:px-7 hover:font-semibold hover:text-white "
                    itemName="Home appliances"
                  />
                </List>
              )}
            </DropDown>
          </div>

          {/* input searchbar here  */}
          <div className="w-[600px] relative ">
            <Search
              placeholder="Search Products"
              className="w-full px-5 py-4 font-dm "
            />
            <FaSearch className="absolute top-5 right-4" />
          </div>

          {/* User and cart here  */}
          <Flex className="flex items-center gap-x-4 lg:gap-x-10">
            {/* user DropDown  */}
            <DropDown className="relative cursor-pointer " dropRef={userRef}>
              <div className="flex items-center">
                <FaUser />
                <RxTriangleDown />
              </div>

              {userDropDownShow && (
                <List className="absolute top-14 lg:top-9 right-0 w-[200px] text-center bg-white text-[#767676] z-50">
                  <ListItem
                    href="/myaccount"
                    className="px-5 py-4 font-bold ease-in-out duration-300 hover:bg-primaryColor text-sm font-dm hover:text-white border-b border-solid border-[#F0F0F0]"
                    itemName="My Account"
                  />
                   <ListItem
                    href="/login"
                    className="px-5 py-4  text-sm font-dm font-bold ease-in-out duration-300 hover:bg-primaryColor hover:text-white  border-b border-solid border-[#F0F0F0]"
                    itemName="Log in"
                  />
                   <ListItem
                    href="#"
                    className="px-5 py-4  text-sm font-dm font-bold ease-in-out duration-300 hover:bg-primaryColor hover:text-white  border-b border-solid border-[#F0F0F0]"
                    itemName="Log Out"
                  />
                  <ListItem
                    href="/singup"
                    className="px-5 py-4  text-sm font-dm font-bold ease-in-out duration-300 hover:bg-primaryColor hover:text-white  border-b border-solid border-[#F0F0F0]"
                    itemName="Sing up"
                  />
                </List>
              )}
            </DropDown>

            {/* cart Drop Down  */}

            <div>
              <DropDown className="relative cursor-pointer" dropRef={cartRef}>
                <div className="flex items-center">
                  <HiShoppingCart className="text-xl" />
                </div>

                {cartDropDownShow && (
                  <div className="absolute top-14 lg:top-9 right-0 w-[358px] z-50 ">
                    {/* Upper Part  */}
                    <Flex className="bg-[#F5F5F3] p-5 flex justify-between items-center">
                      <div>
                        <Image imgsrc={Cart} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold font-dm">
                          Black Smart Watch
                        </h3>
                        <p className="mt-3 text-sm font-bold font-dm">$44.00</p>
                      </div>
                      <div>
                        <ImCross />
                      </div>
                    </Flex>
                    {/* Lower Part  */}
                    <div className="p-5 bg-white">
                      <p className="font-dm text-base text-[#767676]">
                        Subtotal:{" "}
                        <span className="font-bold text-primaryColor">
                          $44.00
                        </span>
                      </p>
                      <div className="mt-3">
                        <Link
                          to="/cart"
                          className="inline-block px-10 py-4 text-sm font-bold border border-solid border-primaryColor font-dm"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="/checkout"
                          className="inline-block px-10 py-4 ml-5 text-sm font-bold text-white border border-solid bg-primaryColor font-dm "
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </DropDown>
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
