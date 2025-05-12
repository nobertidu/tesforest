import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const PlantContact = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center mb-[70px] px-4"
      style={{ backgroundImage: "url('/dashboard/images/PlantContactBg.png')" }}
    >
      <div className="relative backdrop-blur-lg border border-white/20 rounded-[24px] shadow-2xl w-full max-w-[1200px] text-white overflow-hidden p-6 md:p-12 mb-[90px] mt-[30px]">
        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-[url('/dashboard/images/noise.png')] opacity-100 bg-repeat pointer-events-none z-0" />

        {/* Content */}
        <div className="relative z-10 space-y-10">
          {/* Header Text */}
          <div className="text-center max-w-[800px] mx-auto">
            <p className="text-sm text-[#F2F2F2] hidden md:block">
              We would really love to hear your comment about that. Fill out the
              required fields and share your thoughts with us.
            </p>
            <p className="text-sm text-[#F2F2F2] mt-2 italic hidden md:block">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex flex-col md:flex-row items-stretch gap-8 w-full max-w-[688px] mx-auto">
              {/* Form */}
              <div className="bg-black/30 border border-white/20 rounded-xl p-6 flex-1">
                <h3 className="text-lg font-semibold mb-4">
                  Send Us A Message
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border border-white/30 px-4 py-2 rounded-md text-white placeholder-gray-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border border-white/30 px-4 py-2 rounded-md text-white placeholder-gray-300"
                  />
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full bg-transparent border border-white/30 px-4 py-2 rounded-md text-white placeholder-gray-300 resize-none"
                  />
                  <button
                    type="submit"
                    className="text-white w-full py-2 rounded-md font-semibold"
                    style={{
                      background: "linear-gradient(to right, #75A43E, #007741)",
                    }}
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="p-6 flex flex-col justify-center items-center md:items-start">
                <h3 className="text-lg font-semibold mb-4">
                  Call Or Find Us On Socials
                </h3>
                <p className="text-sm mb-2 text-gray-200">
                  We love to hear from you!
                </p>
                <p className="text-sm mb-6 text-gray-200">
                  You’re not alone in this journey
                </p>
                <div className="flex gap-4 text-white text-xl">
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <AiOutlineWhatsApp />
                  </a>
                  <a href="#">
                    <FaXTwitter />
                  </a>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantContact;
