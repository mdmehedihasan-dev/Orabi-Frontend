/* eslint-disable react/no-unescaped-entities */
import BreadCrumb from "../components/layout/BreadCrumb";
import Button from "../components/layout/Button";
import Container from "../components/layout/Container";
import InputBox from "../components/layout/InputBox";

const Singup = () => {
  return (
    <Container>
      <BreadCrumb />
      <div className="border-b border-solid border-additionalBorderColor">
        <p className="w-full pb-5 text-base lg:w-2/5 lg:pb-16 font-dm text-textColor ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
      </div>
        {/* personal address  */}
      <div className="mt-5 border-b border-solid lg:mt-14 border-additionalBorderColor pb-[70px]">
        <h2 className="font-bold font-dm text-primaryColor text-xl lg:text-[39px] mb-5 lg:mb-10 ">
          Your Personal Details
        </h2>
        <div>
          <div className="lg:space-x-10 lg:flex">
            <div className="w-full lg:w-1/4">
              <InputBox
                as="input"
                title="First Name"
                placeholder="Your First Name"
              />
            </div>
            <div className="w-full lg:w-1/4">
              <InputBox as="input" title="Last Name" placeholder="Your Last Name" />
            </div>
          </div>
          <div className="lg:space-x-10 lg:flex">
            <div className="w-full lg:w-1/4">
              <InputBox
                as="input"
                title="Email address"
                placeholder="company@domain.com"
              />
            </div>
            <div className="w-full lg:w-1/4">
              <InputBox as="input" title="Tele Phone" placeholder="Your Phone Number" />
            </div>
          </div>
        </div>
      </div>

      {/* new coustomer  */}
      <div className="mt-5 border-b border-solid lg:mt-14 border-additionalBorderColor pb-[70px]">
        <h2 className="font-bold font-dm text-primaryColor text-xl lg:text-[39px] mb-5 lg:mb-10 ">
         New Coustomer
        </h2>
        <div>
        <div className="lg:space-x-10 lg:flex">
            <div className="w-full lg:w-1/4">
              <InputBox
                as="input"
                title="Address1"
                placeholder="4279 Zboncak Port Suite 6212"
              />
            </div>
            <div className="w-full lg:w-1/4">
              <InputBox as="input" title="Address2" placeholder="--" />
            </div>
          </div>
          <div className="lg:space-x-10 lg:flex">
            <div className="w-full lg:w-1/4">
              <InputBox
                as="input"
                title="City"
                placeholder="Your City"
              />
            </div>
            <div className="w-full lg:w-1/4">
              <InputBox as="input" title="Post Code" placeholder="5800" />
            </div>
          </div>
          <div className="lg:space-x-10 lg:flex">
            <div className="w-full lg:w-1/4">
              <InputBox
                as="input"
                title="Division"
                placeholder="Your Division"
              />
            </div>
            <div className="w-full lg:w-1/4">
              <InputBox as="input" title="District" placeholder="Your District" />
            </div>
          </div>
        </div>
      </div>

      {/* user password  */}
      <div className="mt-5 border-b border-solid lg:mt-14 border-additionalBorderColor pb-[70px]">
        <h2 className="font-bold font-dm text-primaryColor text-xl lg:text-[39px] mb-5 lg:mb-10 ">
          Your Password
        </h2>
        <div>
         
          <div className="lg:space-x-10 lg:flex">
            <div className="w-full lg:w-1/4">
              <InputBox
                as="input"
                title="Password"
                placeholder="Your Password"
              />
            </div>
            <div className="w-full lg:w-1/4">
              <InputBox as="input" title="Repeat Password" placeholder="Repeat Your Password" />
            </div>
          </div>
        </div>
      </div>
       {/* checkbox  */}
    <div className="mt-10 lg:mt-16">
    <div className="flex gap-x-1">
       <input type="checkbox" />
         <p className="text-sm font-dm text-textColor">  I have read and agree to the Privacy Policy</p>
      </div>
      <div className="flex mt-6 mb-7 gap-x-4">
         <p className="text-sm font-dm text-textColor">  Subscribe Newsletter</p>
      <div className="flex items-center gap-x-4">
     <div className="flex items-center gap-x-3">
     <input type="checkbox" />
       <label className="font-dm text-textColor"> Yes</label>
     </div>
     <div  className="flex items-center gap-x-3">
     <input type="checkbox" />
       <label className="font-dm text-textColor"> No</label>
     </div>
      </div>
     
      </div>

      <Button title={"Login"} />
    </div>

     
    </Container>
  );
};

export default Singup;
