import BreadCrumb from "../components/layout/BreadCrumb";
import Container from "../components/layout/Container";

const MyAccount = () => {
  return (
    <Container>
      <BreadCrumb />
      <div className="flex gap-x-10">
        <div className="w-1/5">
          <div className="py-5 border-b border-solid border-additionalBorderColor text-textColor hover:text-primaryColor">
            <p className="text-base font-bold font-dm lg:mb-5">
              Dashboard
            </p>
          </div>

          <div className="py-5 border-b border-solid border-additionalBorderColor text-textColor hover:text-primaryColor">
            <p className="text-base font-bold font-dm lg:mb-5">
              Others
            </p>
          </div>
          <div className="py-5 border-b border-solid border-additionalBorderColor text-textColor hover:text-primaryColor">
            <p className="text-base font-bold font-dm lg:mb-5">
              Downloads
            </p>
          </div>
          <div className="py-5 border-b border-solid border-additionalBorderColor text-textColor hover:text-primaryColor">
            <p className="text-base font-bold font-dm lg:mb-5">
              Addersses
            </p>
          </div>
          <div className="py-5 border-b border-solid border-additionalBorderColor text-textColor hover:text-primaryColor">
            <p className="text-base font-bold font-dm lg:mb-5">
              Account Details
            </p>
          </div>
          <div className="py-5 border-b border-solid border-additionalBorderColor text-textColor hover:text-primaryColor">
            <p className="text-base font-bold font-dm lg:mb-5">
            Logout
            </p>
          </div>
          
          
        </div>
        <div className="w-4/5 mt-5">
          <p className="font-dm text-textColor font-base">
          Hello <span className="font-semibold text-black">admin</span> (not  <span className="font-semibold text-black">admin</span>? <span className="font-semibold text-black">Log out</span> )
          </p>

          <p className="font-dm text-textColor font-base max-w-[917px] mt-10">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and <span className="font-semibold text-black">edit your password and account details.</span> </p>
        
        </div>
      </div>
    </Container>
  );
};

export default MyAccount;
