import Container from './Container'
import { TbNumber2 } from "react-icons/tb";
import { FaCaravan } from "react-icons/fa";
import { TbReload } from "react-icons/tb";


import Flex from './Flex';

const AdditionalInfo = () => {
  return (
    <div className='py-2 md:py-7 border-y border-borderColor mt-[-12px]'>
        <Container>
          <Flex className="flex justify-between">
          <div className='flex items-center gap-x-2 md:gap-x-4'>
            <TbNumber2 className='text-[10px] md:text-2xl' />
            <p className='font-dm text-[10px] lg:text-base text-additionalTextColor'>Two years warranty</p>
          </div>

          <div className='flex items-center gap-x-2 md:gap-x-4'>
            <FaCaravan className='text-[10px] md:text-2xl' />
            <p className='font-dm text-[10px] lg:text-base text-additionalTextColor'>Free shipping</p>
          </div>

          <div className='flex items-center gap-x-2 md:gap-x-4'>
            <TbReload className='text-[10px] md:text-2xl'/ >
            <p className='font-dm text-[10px] lg:text-base text-additionalTextColor'>Return policy in 30 days</p>
          </div>

          </Flex>


         

            
        </Container>
    </div>
  )
}

export default AdditionalInfo