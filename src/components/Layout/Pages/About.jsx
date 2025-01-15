import React from "react";
import Heading from "../Heading";
import { FiServer, FiSettings } from "react-icons/fi";
import { FaRegClipboard } from "react-icons/fa";
import { AiOutlineCompass } from "react-icons/ai";
import SubHeading from "../SubHeading";
function About() {
  const skillsWithIcons = [
    // DevOps skills
    {
      name: "Cloud Computing",
      icon: <FiServer />,
      description:
        "Expertise in deploying, managing, and scaling applications on cloud platforms such as AWS, Azure, and Google Cloud.",
      projectsCompleted: 15,
    },
    {
      name: "CI/CD",
      icon: <FiSettings />,
      description:
        "Proficient in implementing continuous integration and continuous delivery pipelines using tools like Jenkins, GitHub Actions, and CircleCI.",
      projectsCompleted: 10,
    },

    // Business strategy skills
    {
      name: "Strategic Planning",
      icon: <AiOutlineCompass />,
      description:
        "Skilled in formulating and executing long-term strategies to achieve business objectives and drive growth.",
      projectsCompleted: 8,
    },
    {
      name: "Project Management",
      icon: <FaRegClipboard />,
      description:
        "Experienced in managing projects from initiation to completion, ensuring timely delivery within scope and budget.",
      projectsCompleted: 12,
    },
  ];
  return (
    <div>
      <Heading title={"About Me"} />

      <article className="text-sm leading-6 flex flex-col gap-4 mb-8">
        <p>
        With a rich tapestry of 9 years in Site Reliability, Cloud Engineering, and DevSecOps, I have honed a unique skill set that blends technical expertise with a strategic mindset. My proficiency in ensuring the reliability, scalability, and security of cloud-based systems has been instrumental in optimizing operational efficiency and minimizing downtime for various projects. Leveraging my in-depth knowledge of cloud technologies and best practices, I have successfully implemented robust infrastructure solutions that align with business objectives while prioritizing security through a DevSecOps approach.

        </p>
        <p>
        My professional journey is a testament to my commitment to excellence in the dynamic field of Site Reliability Engineering. Through my hands-on experience and continuous learning, I have developed a deep understanding of cloud platforms, automation tools, and security protocols, enabling me to design and maintain resilient systems that exceed performance expectations. With a proactive approach to problem-solving and a focus on continuous improvement, I am dedicated to driving innovation and fostering a culture of reliability and security in every project I undertake.
        </p>
      </article>

      <SubHeading title={"What I'm Doing"}/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-4 md:gap-8 md:gap-y-8 mb-8">
            {skillsWithIcons?.map((i, index) => (
                <div className=" border border-line rounded-2xl flex flex-col items-center text-center space-y-4 p-8"  key={i?.name}>
                    <div className="text-main text-xl lg:text-4xl ">
                        {i?.icon}
                    </div>
                    <h3 className="text-primaryLight text-sm lg:text-xl">
                        {i?.name}
                    </h3>

                    <p className="text-xs lg:text-sm">{i?.description}</p>
                </div>  
            ))}
        </div>

        <SubHeading title={"Clients"}/>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 ">
                <div className="">
                    <img src="../assets/img/Clients/client1.png" alt="" className="w-[150px] object-cover" />
                </div>
                <div>
                    <img src="../assets/img/Clients/client2.png" alt="" className="w-[150px] object-cover" />
                </div>
        </div>
    </div>
  );
}

export default About;
