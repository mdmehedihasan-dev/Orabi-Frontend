/* eslint-disable react/no-unescaped-entities */
import BreadCrumb from "../components/layout/BreadCrumb"
import Button from "../components/layout/Button"
import Container from "../components/layout/Container"
import InputBox from "../components/layout/InputBox"

const Login = () => {
  return (
     <Container>
        <BreadCrumb/>
        <div className="border-b border-solid border-additionalBorderColor">
            <p className="w-full pb-5 text-base lg:w-2/5 lg:pb-16 font-dm text-textColor ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>

        <div className="mt-5 border-b border-solid lg:mt-14 border-additionalBorderColor pb-[70px]">
            <h2 className="font-bold font-dm text-primaryColor text-xl lg:text-[39px] mb-5 lg:mb-10 ">Returning Customer</h2>
           <div className="lg:space-x-10 lg:flex">
           <div className="w-full lg:w-1/4">
                <InputBox as="input" title="Email address" placeholder="company@domain.com" />
            </div>
            <div className="w-full lg:w-1/4">
                <InputBox as="input"  title="Password"    placeholder="********"       />
            </div>
           </div>
          <button className="px-10 py-2 font-bold border-2 border-solid lg:px-20 lg:py-4 border-primaryColor font-dm mt-7" >Login</button>
        </div>

        <div className="mt-5 lg:mt-14">
            
            <h2 className="font-bold font-dm text-primaryColor text-xl lg:text-[39px] mb-5 lg:mb-10 ">New Customer</h2>
            <p className="w-full pb-5 text-base lg:w-2/5 lg:pb-16 font-dm text-textColor ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <Button title="Continue" />
        </div>
     </Container>
  )
}

export default Login