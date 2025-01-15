import React from 'react'
import Heading from "../Heading";
import SubHeading from '../SubHeading';

function Resume() {

    const education = [
        {
          title: "Texas Tech University",
          duration: "2012 - May 2016",
          description: "",
          badge: "BSC in Petroleum Engineering ",
        },
        // {
        //   title: "Product School",
        //   duration: "2012 - May 2016",
        //   description: "",
        //   badge: "Global leader in Product training ",
        // },
      ];
    
      const experience = [
        {
          title: "Splunk",
          duration: "jul 2024 - Current",
          description: "",
          badge: "Site Reliability engineer",
        },
        {
          title: "CAPE Analytics",
          duration: "Apr 2021 - May 2024",
          description: "As a DevSecOps Engineer, I am responsible for creating and managing shared libraries for building CI/CD Pipelines in Jenkins and onboarding new micro-services. I am also responsible for supporting and mentoring developers day-to-day and for coordinating cybersecurity SOC2 Engineering Audits using tools such as Vanta.",
          badge: "DevOps Engineer II",
        },
        {
          title: "Pumpco Assets",
          duration: "May 2019 - Apr 2021",
          description: "",
          badge:  "DevOps Engineer",
        },
        {
          title: "Halliburton",
          duration: "Feb 2017 - Apr 2019",
          description: "",
          badge:  "Azure Cloud Engineer",
        },
        {
          title: "RPC Software",
          duration: "Nov 2016 - Feb 2017",
          description: "",
          badge:  "Frontend Developer",
        },
      ];


      const skillsWithLevels = [
        { name: "Web Site Design", level: "Intermediate", percentage: 70 },
        { name: "Leadership",level: "Intermediate", percentage: 70 },
        { name: "User Interviews", level: "Intermediate", percentage: 70 },
        { name: "Cloud Computing",level: "Intermediate", percentage: 70},
        { name: "CI/CD",level: "Intermediate", percentage: 70 },
        { name: "Infrastructure as Code",level: "Intermediate", percentage: 70 },
        { name: "Docker",level: "Intermediate", percentage: 70},
        { name: "Kubernetes", level: "Intermediate", percentage: 70 },
        { name: "Monitoring & Logging", level: "Intermediate", percentage: 70 },
        { name: "Agile Methodologies", level: "Intermediate", percentage: 70 },
        { name: "Strategic Planning", level: "Intermediate", percentage: 70 },
        { name: "Project Management", level: "Intermediate", percentage: 70},
        { name: "Business Analysis",level: "Intermediate", percentage: 70 },
        { name: "Stakeholder Communication",nlevel: "Intermediate", percentage: 70 },
      ];
  return (
    <div> 
     <Heading title={"Resume"} />
     <div
    id="experience"
      className=""
    >
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-0">
          {/* Education Section */}
          <div
          >
            <h2 className="text-sm md:text-2xl font-semibold text-primaryLight hover:text-main mb-4">Education</h2>
            <ul className="relative">
              {education.map((item, index) => (
                             <Timeline item={item} index={index} key={item?.name} len={education} />
              ))}
            </ul>
          </div>

          {/* Experience Section */}
          <div
          >
            <h2 className="text-sm md:text-2xl font-semibold text-primaryLight hover:text-main mb-4">Experience</h2>
            <ul className="relative">
              {experience.map((item, index) => (
                <Timeline item={item} index={index} key={item?.name}  len={experience} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <SubHeading title={'Skills'}/>
    <div className='border border-line rounded-2xl p-4'>
    <div className="space-y-4">
        {skillsWithLevels.map((skill, index) => (
          <div key={index} className="w-full">
            {/* Progress Bar */}
            <div className="relative w-full h-6 bg-secondary rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-main rounded-full flex flex-row items-center justify-between text-white text-xs p-2 "
                style={{ width: `${skill.percentage}%` }}
              >
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
     </div>
  )
}

const Timeline = ({index,item, len, }) => {
    return (
      <li
      key={index}
      className={`relative pl-6 ${index !== len.length - 1 ? 'pb-14' : 'pb-14'}`}
    >
      {/* Vertical Line */}
      {index !== len.length - 1 && (
        <div
          className="absolute left-[7px] top-0 w-px h-[100%] bg-line"
        ></div>
      )}
      {/* Circle */}
      <div className="absolute left-0 -top-1 w-4 h-4 flex flex-col items-center justify-center bg-main/35 rounded-full z-10">
        <div className="bg-main w-2 h-2 rounded-full ">

        </div>
      </div>
      {/* Content */}
      <h4 className="text-sm md:text-[16px] font-semibold text-primaryLight ">
        {item?.title} - {item?.badge}
      </h4>
      <span className="text-date text-sm">({item?.duration})</span>
      <p className="text-sm mt-2 max-w-2xl">{item?.description}</p>
    </li>
    );
  }
export default Resume