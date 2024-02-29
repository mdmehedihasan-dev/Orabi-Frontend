import { useEffect, useState } from 'react';
import Logo from '../../assets/OREBI.png'
import { FaBars } from "react-icons/fa";
import Flex from './Flex';
import ListItem from './ListItem';
import List from './List';
import Image from './Image';
import Container from './Container';
import { Link } from 'react-router-dom';
const Navbar = () => {
    let [show , setShow] = useState(true)

  useEffect(()=>{
    function scrollWidth(){
      if(window.innerWidth < 1004){
        setShow(false)
      }else{
        setShow(true)
      }
    } 
    scrollWidth()
    window.addEventListener('resize',scrollWidth)
  },[])
  return (
    <nav className='py-8' >

      <Container>
      <div>
    <Flex className="items-center lg:flex">
      <div className='w-3/12'>
        <Link to={"/"}>
        <Image className="cursor-pointer" imgsrc={Logo} altName="Orabi Logo"  />

        </Link>
      </div>
      <div className='lg:w-9/12'>
        <FaBars onClick={()=>setShow(!show)} className='block lg:hidden ml-auto cursor-pointer absolute top-10 right-2.5 ' />
       {
        show &&
        <List className="mt-5 lg:flex lg:gap-x-10 lg:justify-end lg:mt-0 ">
        <ListItem className="font-dm cursor-pointer font-bold text-base hover:font-bold my-2.5 lg:my-0" itemName="Home" />
        <ListItem className="font-dm cursor-pointer font-medium text-base hover:font-bold my-2.5 lg:my-0" itemName="Shop" href={"/shop"} />
        <ListItem className="font-dm cursor-pointer font-medium text-base hover:font-bold my-2.5 lg:my-0" itemName="About" href={"/about"} />
        <ListItem className="font-dm cursor-pointer font-medium text-base hover:font-bold my-2.5 lg:my-0" href={"/contacts"} itemName="Contact" />
        <ListItem className="font-dm cursor-pointer font-medium text-base hover:font-bold my-2.5 lg:my-0" itemName="Journal"/>
      

      </List>

       }
      </div>
    </Flex>
    </div>

      </Container>



   
  



  </nav>
  )
}

export default Navbar