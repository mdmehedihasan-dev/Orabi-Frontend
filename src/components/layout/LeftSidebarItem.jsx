/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const LeftSidebarItem = (props) => {
  let [dropDownShow, setDropDownShow] = useState(props.subDropDown);
  let [show, setShow] = useState(false);
  return (
    <div>
      {dropDownShow ? (
        <div
          onClick={() => setShow(!show)}
          className=" cursor-pointer flex justify-between  items-center py-5 border-b border-solid border-textColor "
        >

          {
            props.color ?
            <div>
            <span
              className="mr-2 inline-block h-[11px] w-[11px] rounded-full "
              style={{ background: props.color }}
            ></span>
            <h3 className="cursor-pointer font-dm text-base text-textColor ">
              {props.title}
            </h3>
          </div>
          :
          <div>
          <h3 className="cursor-pointer font-dm text-base text-textColor ">
            {props.title}
          </h3>
        </div>
          }







        
          {show ? (
            <FaMinus className="text-textColor " />
          ) : (
            <FaPlus className="text-textColor " />
          )}
        </div>
      ) : (
        <div className="border-b border-solid border-textColor py-5 ">

{
            props.color ?
            <div className="flex items-center gap-x-2">
            <span
              className="inline-block h-[11px] w-[11px] rounded-full "
              style={{ background: props.color }}
            ></span>
            <h3 className="cursor-pointer font-dm text-base text-textColor ">
              {props.title}
            </h3>
          </div>
          :
          <div>
          <h3 className="cursor-pointer font-dm text-base text-textColor ">
            {props.title}
          </h3>
        </div>
          }
          {/* <div className="flex items-center  ">
            <span
              className="mr-2 inline-block h-[11px] w-[11px] rounded-full "
              style={{ background: props.color }}
            ></span>
            <h3 className="cursor-pointer font-dm text-base text-textColor  ">
              {props.title}
            </h3>
          </div> */}
        </div>
      )}

      {show && <div>{props.children}</div>}
    </div>
  );
};

export default LeftSidebarItem;
