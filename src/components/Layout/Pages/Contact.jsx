import React, { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";
import emailjs from "emailjs-com";
import Heading from "../Heading";
import SubHeading from "../SubHeading";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setStatusType("sending");
    setShowPopup(true);

    emailjs
      .send(
        "service_dlo2fc7", // Replace with your EmailJS service ID
        "template_qoqa01a", // Replace with your EmailJS template ID
        {
          fullname: formData.fullname,
          email: formData.email,
          message: formData.message,
        },
        "TTZxyPQ5fnp7mcPPj" // Replace with your EmailJS user ID (or public key)
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setStatusType("success");
          setTimeout(() => setShowPopup(false), 3000); 
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send the message. Please try again.");
          setStatusType("error");
          setTimeout(() => setShowPopup(false), 3000);
        }
      );
  };

  return (
    <div>
      <Heading title={"Contact"} />
      <p className="mb-4 text-sm">
        Open for opportunities: <span className="font-semibold">Yes</span>
      </p>

      <SubHeading title={"Contact Form"} />

      <div className="">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
        >
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData?.fullname}
              onChange={handleChange}
              required
              placeholder="Full name"
              className="mt-1 block w-full p-4 rounded-2xl bg-link text-sm"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <input
              type="email"
              id="email"
              name="email"
              value={formData?.email}
              onChange={handleChange}
              required
              placeholder="Email address"
              className="mt-1 block w-full p-4 rounded-2xl bg-link text-sm"
            />
          </div>
          <div className="col-span-2">
            <textarea
              id="message"
              name="message"
              value={formData?.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message"
              className="mt-1 block w-full p-4 rounded-2xl bg-link text-sm overflow-hidden"
            ></textarea>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="flex items-center justify-center mt-4 bg-main text-white py-2 px-4 rounded-md hover:bg-main/95 transition duration-200  md:float-end"
            >
              <FaPaperPlane className="mr-2" />
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Status Popup */}
      {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
  <div className="bg-white shadow-lg rounded-2xl p-4 w-full h-full max-w-xl max-h-60 border flex flex-col items-center justify-center gap-3 z-40 mx-4">
    {statusType === "sending" && (
      <FaSpinner className="text-yellow-500 animate-spin text-2xl md:text-4xl" />
    )}
    {statusType === "success" && (
      <FaCheckCircle className="text-green-500 text-2xl md:text-4xl" />
    )}
    {statusType === "error" && (
      <FaExclamationCircle className="text-red-500 text-2xl md:text-4xl" />
    )}
    <span>{status}</span>
  </div>
</div>

       )}
    </div>
  );
}

export default Contact;
