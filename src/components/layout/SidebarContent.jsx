/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ dropDown, dropTitle, data }) => {
  // eslint-disable-next-line no-unused-vars
  let [dropDownShow, setDropDownShow] = useState(dropDown);
  let [show, setShow] = useState(false);
  return (
    <div className="mb-10">
      {dropDownShow ? (
        <div
          onClick={() => setShow(!show)}
          className=" mb-9 cursor-pointer flex justify-between items-center "
        >
          <h3 className=" cursor-pointer font-dm text-xl font-bold text-primaryColor">
            {dropTitle}
          </h3>
          <IoMdArrowDropdown />
        </div>
      ) : (
        <h3 className="mb-9 cursor-pointer font-dm text-xl font-bold text-primaryColor">
          {dropTitle}
        </h3>
      )}

      {show && (
        <>
          {data.map((item, i) => (
            <LeftSidebarItem key={i} subDropDown={true} title={item.name}>

              {
                item.subcategory.map((sitem,idx)=>(
                  <h1 key={idx} className="cursor-pointer font-dm text-base text-textColor border-b border-solid border-textColor py-5 ">
                  {sitem.name}
                 </h1>
                ))
              }
              
               
             
            </LeftSidebarItem>
          ))}
          </>
      )}

      {!dropDownShow && (
        <>
          {data.map((item, i) => (
            <LeftSidebarItem key={i} subDropDown={true} title={item.name}>
              
              {
                item.subcategory.map((sitem,idx)=>(
                  <h1 key={idx} className="cursor-pointer font-dm text-base text-textColor border-b border-solid border-textColor py-5 ">
                  {sitem.name}
                 </h1>
                ))
              }
            
            </LeftSidebarItem>
          ))}

       
        </>
      )}
    </div>
  );
};

export default SidebarContent;
