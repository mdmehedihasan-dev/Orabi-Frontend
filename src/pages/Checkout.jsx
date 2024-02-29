import Container from "../components/layout/Container";
import BreadCrumb from "../components/layout/BreadCrumb";
import InputBox from "../components/layout/InputBox";

const Checkout = () => {
  return (
    <Container>
      <BreadCrumb />
      <div>
        <p className=" font-dm text-textColor">
          Have a coupon?{" "}
          <span className="font-bold text-primaryColor">
            Click here to enter your code
          </span>
        </p>

        <div className="w-full lg:w-3/4">
          <div className="mt-5 border-b border-solid lg:mt-14 border-additionalBorderColor pb-[70px]">
            <h2 className="font-bold font-dm text-primaryColor text-xl lg:text-[39px] mb-5 lg:mb-10 ">
              Billing Details
            </h2>

            <div className="lg:space-x-10 lg:flex">
              <div className="w-full lg:w-1/4">
                <InputBox
                  as="input"
                  title="First Name*"
                  placeholder="Your First Name"
                />
              </div>
              <div className="w-full lg:w-1/4">
                <InputBox
                  as="input"
                  title="Last Name*"
                  placeholder="Your Last Name"
                />
              </div>
            </div>

            <div className="w-full">
              <InputBox
                as="input"
                title="Companye Name (optional)"
                placeholder=" Company Name"
              />

              <InputBox
                as="input"
                title="Country*"
                placeholder="Country Name"
              />

              <InputBox
                as="input"
                title="Street Address *"
                placeholder="Street Address "
              />
              <InputBox
                as="input"
             
                placeholder="Street Address 2"
              />
              <InputBox
                as="input"
                title="Town/City *"
                placeholder="Town/City"
              />
              <InputBox
                as="input"
                title="County (optional)"
                placeholder="County"
              />
              <InputBox
                as="input"
                title="Post Code *"
                placeholder="Post Code *"
              />
              <InputBox
                as="input"
                title="Phone"
                placeholder="Your Phone Number"
              />
                <InputBox
                as="input"
                title="Email Address"
                placeholder="Your Email Address"
              />
            </div>
            <h2 className="font-bold lg:mt-32 font-dm text-primaryColor text-xl lg:text-[39px] mb-5 lg:mb-10 ">
            Additional Information
            </h2>
            <p className="font-bold font-dm text-primaryColor">Other Notes (optional)</p>
            <span className="font-dm text-textColor">Notes about your order, e.g. special notes for delivery.</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
