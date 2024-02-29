import SidebarContent from "./SidebarContent"
import { category,prices,colors,brands } from "../../data/data"
import SidebarColorContent from "./SidebarColorContent"
import SidebarPriceContent from "./SidebarPriceContent"
import SidebarBrandContent from "./SidebarBrandContent"

const LeftSidebar = () => {
  return (
    <>
    <SidebarContent dropDown={false} dropTitle="Shop by Category" data={category}  />
    <SidebarColorContent dropDown={true} dropTitle="Shop by Color" data={colors}/>
    <SidebarBrandContent dropDown={true} dropTitle="Shop by Brand" data={brands}/>
    <SidebarPriceContent dropDown={true} dropTitle="Shop by Price" data={prices}  />
    </>
  )
}

export default LeftSidebar