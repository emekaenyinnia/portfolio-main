import React from "react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialGithub,
} from "react-icons/sl";
import { FiCompass, FiDownload } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaDownload,FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { HiDevicePhoneMobile } from "react-icons/hi2";

function Header() {
  const socials = [
    {
      name: "facebook",
      icon: <SlSocialFacebook />,
      link: "https://www.facebook.com/oluwafunkeijabiken/",
    },
    {
      name: "instagram",
      icon: <SlSocialInstagram />,
      link: "https://www.instagram.com/oluwafunkeijabiken/",
    },
    {
      name: "linkedIn",
      icon: <SlSocialLinkedin />,
      link: "https://www.linkedin.com/in/oluwafunkeijabiken/",
    },
    {
      name: "Github",
      icon: <SlSocialGithub />,
      link: "https://www.github.com/oluwafunkeijabiken/",
    },
  ];

  const information = [

    {
      name:'Email',
      icon : <MdMailOutline/>,
      detail:'rijabiken@riteplacement.com'
    },
    {
      name:'Location',
      icon : <FaMapMarkerAlt/>,
      detail:'Houston, Tx'
    },
    {
      name:'Birth',
      icon : <FaCalendarAlt/>,
      detail:'08 DEC '
    },



  ]
  return (
    <section className="pt-20 sticky top-0">
      <main className="bg-secondaryLight rounded-2xl lg:py-9  px-8 mt-4 py-1">
        <div className="flex  flex-col  gap-y-0 lg:gap-y-0">
          <div className="flex flex-col  justify-center   w-full  relative ">
            <div className="flex flex-col items-center ">
              <div className="bg-secondary border-[6px] border-secondaryLight rounded-[38px] w-40 h-40  flex flex-col items-center justify-center shadow-xl p-3 relative -mt-16 mb-4   ">
                <img
                  src="./assets/img/user.jpg"
                  alt=""
                  className="w-32 h-32 object-cover rounded-full "
                />
              </div>

              <div className="text-center  space-y-1 ">
                <h6 className=" text-2xl text-primaryLight capitalize">
                  <span className="font-bold ">oluwafunke</span> ijabiken
                </h6>
                <p className="text-sm ">DevSecOps | SRE | Cloud Engineering </p>
                <div className="flex flex-row items-center justify-center  gap-4 px-1">
                  {socials?.map((i) => (
                    <a
                      href={i?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={i?.name}
                      className="text-sm hover:text-white hover:bg-main mt-2 p-4 bg-secondary rounded-lg "
                    >
                      {i?.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
{/* 
                  <div className="after:content-[''] after:absolute after:bg-line after:h-[1px] after:w-[100%]  py-8  ">
                  </div> */}
          </div>
          <section className="bg-secondary  rounded-2xl p-4 md:p-8 mt-7 ">
                {information?.map((i) => (
        <div className="border-b border-b-main py-2 flex flex-row items-center justify-start gap-4 my-2" key={i?.name}>
        <div className="bg-secondaryLight rounded-md p-3 text-xl">
            {i?.icon}
        </div>
        <div>
        <div>
            <h4 className="text-xs md:text-sm lg:text-xs uppercase"> {i?.name}</h4>
                <h5 className="text-xs md:text-base lg:text-xs text-primaryLight hover:text-main mt-1 ">
                {i?.name === 'Email' ?
                       <a href={`mailto:${i?.detail}`} className="flex flex-row items-center gap-2">{i?.detail} </a>
                : 
                        <a  className="flex flex-row items-center gap-2">{i?.detail} </a>
                }
            
                </h5>
            </div>
        </div>
    </div>
                ))}
          </section>
              <div className="mb-4 md:mb-0">
              <a className="max-w-56 text-sm md:text-lg mx-auto text-white bg-main rounded-full flex flex-row items-center justify-center font-semibold mt-5 p-4 cursor-pointer gap-2">
          <FaDownload/>  Download CV
          </a>
              </div>


        </div>
      </main>
    </section>
  );
}


const Info = () => {

}
export default Header;
