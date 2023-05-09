import { useScrollIntoView } from "@/Hooks/useScrollIntoView";
import Image from "next/image";
import locationIcon from "public/assets/svg/IoLocationOutlinelocateus.svg";
import mailIcon from "public/assets/svg/IoMailOutlineemail.svg";
import phoneIcon from "public/assets/svg/phone-modern_svgrepo.comcallus.svg";
import { Form } from "./Form";
const ContactUs = () => {
  const { CScrollIntoView } = useScrollIntoView("/#contact-us");
  return (
    <CScrollIntoView>
      <section
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/do5yybhwe/image/upload/v1683353434/Rectangle_228bgcontactus_xje3wp.jpg)",
        }}
        className="py-[70px] bg-cover"
      >
        <h2 className="text-center text-fontWhite uppercase text-3xl font-bold mb-12">
          LET’S WORK TOGETHER
        </h2>
        <div className="mx-8 md:mx-20 mb-14 divide-none md:divide-x md:divide-x-1 md:divide-solid divide-fontWhite flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-0">
          <div className="flex flex-col items-center gap-3">
            <Image width={70} height={70} src={phoneIcon} alt="icon" />
            <p className="text-blue-100 font-semibold uppercase ">Call us</p>
            <div className="flex flex-col">
              <a className="text-fontWhite" href="tel:+1 (512) 456 7890">
                +1 (512) 456 7890
              </a>
              <a className="text-fontWhite" href="tel:+1 (512) 456 7890">
                +1 (512) 456 7890
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center px-2 gap-3">
            <Image width={70} height={70} src={mailIcon} alt="icon" />
            <p className="text-blue-100 font-semibold uppercase">Mail us</p>
            <div className="flex flex-col">
              <a
                className="text-fontWhite break-all"
                href="mailto:villalobosbusiness@gmail.com"
              >
                villalobosbusiness@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image src={locationIcon} alt="icon" />
            <p className="text-blue-100 font-semibold uppercase">Locate us</p>
            <div className="flex flex-col items-center">
              <p className="text-fontWhite">123 Main St</p>
              <p className="text-fontWhite">Austin, TX 78701</p>
            </div>
          </div>
        </div>
        <div className="mx-8 md:mx-[190px]">
          <h3 className="text-fontWhite text-center uppercase font-semibold text-2xl mb-10">
            Get in touch
          </h3>
          <Form />
        </div>
      </section>
    </CScrollIntoView>
  );
};

export { ContactUs };
