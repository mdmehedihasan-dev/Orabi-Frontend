/* eslint-disable react/no-unknown-property */
import BreadCrumb from "../components/layout/BreadCrumb"
import Button from "../components/layout/Button"
import Container from "../components/layout/Container"
import InputBox from "../components/layout/InputBox"

const Contacts = () => {
  return (
    <Container>
        <BreadCrumb/>
        <div className="w-full lg:w-2/4">
            <h4 className="text-3xl font-bold mb-11 font-dm text-primaryColor">Fill up a Form</h4>
       
        <InputBox as="input" placeholder="Your name here" title="Name"/>
        <InputBox as="input" placeholder="Your email here" title="Email" />
        <InputBox as="textarea" placeholder="Your message here" title="Message" />
        <Button title="POST" />
        </div>

        <div className="w-full lg:h-[570px] mt-6 lg:mt-36">
        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.610966980887!2d89.37893439278967!3d24.853414061735226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54d8cd4f974b%3A0xb4f165fa618f89!2sNaruli%2C%20Bogura!5e0!3m2!1sen!2sbd!4v1709124783823!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>



    </Container>
  )
}

export default Contacts