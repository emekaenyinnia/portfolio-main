import React, { useState } from "react";
import Heading from "../Heading";

function Portfolio() {
    const achievements = [
        {
          category: "Certifications",
          items: [
            {
              logo: "../assets/img/portfolio/splunk.jpg",
              title: "Splunk Cloud Administration",
              issuer: "Splunk",
              description: "Comprehensive understanding and management of Splunk Cloud environments, including data ingestion, indexing, and reporting.",
              tags: ["certificate"],
              category: "Certifications",
            },
            {
              logo: "../assets/img/portfolio/splunk.jpg",
              title: "Splunk Enterprise Certified Admin",
              issuer: "Splunk",
              description: "Expertise in managing Splunk Enterprise, configuring data inputs, and managing user roles and permissions.",
              tags: ["certificate"],
              category: "Certifications",
            },
            {
              logo: "../assets/img/portfolio/splunk.jpg",
              title: "Splunk Core Certified Power User",
              issuer: "Splunk",
              description: "Advanced skills in searching, reporting, and dashboard creation using Splunk's core features.",
              tags: ["certificate"],
              category: "Certifications",
            },
            {
              logo: "../assets/img/portfolio/hashicorp.png",
              title: "HashiCorp Certified: Terraform Associate (002)",
              issuer: "HashiCorp",
              description: "Proficiency in infrastructure as code (IaC) using Terraform, including resource creation, maintenance, and best practices.",
              tags: ["certificate"],
              category: "Certifications",
            },
            {
              logo: "../assets/img/portfolio/aws.jpg",
              title: "Amazon Web Services Cloud Practitioner",
              issuer: "Amazon Web Services (AWS)",
              description: "Foundational knowledge of AWS cloud concepts, security, and architectural principles.",
              tags: ["certificate"],
              category: "Certifications",
            },
            {
              logo: "../assets/img/portfolio/aws.jpg",
              title: "Amazon Web Services Security Specialty",
              issuer: "Amazon Web Services (AWS)",
              description: "Expert knowledge in AWS security best practices, including identity management, compliance, and encryption.",
              tags: ["certificate"],
              category: "Certifications",
            },
            {
              logo: "../assets/img/portfolio/aws.jpg",
              title: "Amazon Web Services Solutions Architect Associate",
              issuer: "Amazon Web Services (AWS)",
              description: "Ability to design scalable, reliable, and secure cloud solutions using AWS services.",
              tags: ["certificate"],
              category: "Certifications",
            },
          ],
        },
        {
          category: "Projects",
          items: [
            {
              logo: "../assets/img/portfolio/project/high-a.png",
              title: "High - Availability Network Design",
              issuer: "",
              description: "Designed a fault-tolerant network to ensure continuous availability and reliability for critical systems.",
              tags: ["Networking"],
              category: "Projects",
            },
    
          ],
        },
        {
          category: "Badges",
          items: [
            {
              logo: "../assets/img/portfolio/badge/ccna.png",
              title: "CCNA Introduction to Networks",
              issuer: "",
              description: "Gained foundational networking knowledge, including IP addressing, routing, and basic configurations.",
              tags: ["Verify"],
              category: "Badges",
            },

          ],
        },
      ];
      

  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? achievements.flatMap((category) => category.items)
      : achievements.find((category) => category.category === activeTab)?.items || [];

  return (
    <div>
      <Heading title={"Portfolio"} />

      {/* Tab Navigation */}
      <div className="flex flex-row items-center gap-6 mb-8">
        <div className="relative">
          <button className={`text-base cursor-pointer ${
              activeTab === "All" && "text-primaryLight"
            } after:absolute after:content-[''] after:rounded-full after:w-1 after:h-1 after:bg-primary after:top-2 after:-right-3`}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>
        </div>
        {achievements?.map((category, index) => (
          <div key={category.category} className="relative">
            <button
              className={`text-base cursor-pointer ${
                activeTab === category.category && "text-primaryLight"
              } ${
                index !== achievements.length - 1 &&
                "after:absolute after:content-[''] after:rounded-full after:w-1 after:h-1 after:bg-primary after:top-2 after:-right-3"
              }`}
              onClick={() => setActiveTab(category.category)}
            >
              {category.category}
            </button>
          </div>
        ))}
      </div>

      {/* Display Filtered Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredItems.map((item, index) => (
          <Card key={index} item={item}  />
        ))}
      </div>
    </div>
  );
}

const Card = ({ item }) => {
  return (
    <section className="border border-line rounded-2xl p-4 flex flex-col items-start gap-4 group">
    <div className="w-full h-52 rounded-2xl overflow-hidden relative">
        <img src={item?.logo} alt="" className="w-full h-full object-cover  transition-transform duration-300 transform hover:scale-110" />
        <span className="absolute top-0 left-0 rounded-t-r-full text-white bg-badge py-1 px-4 text-xs rounded-br-2xl ">
            {item?.category}
        </span>

        <div className="absolute bottom-0 w-full bg-black text-white text-sm text-center p-8 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
            {item?.description}
        </div>  
    </div>
    <h4 className="text-base md:text-lg text-primaryLight font-bold">{item?.title} {item?.issuer !== '' && `- ${ item?.issuer }`}</h4>
   <div className="flex flex-row items-center gap-2">
   {item?.tags?.map((i) => (
        <span className="bg-main text-white p-2 text-xs capitalize rounded-md">
            {i}
        </span>
    ))}
   </div>

    </section>
  );
};

export default Portfolio;
