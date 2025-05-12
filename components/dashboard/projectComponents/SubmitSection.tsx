import React, { useState, useEffect } from "react";

const SubmitSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center py-10 space-y-6  bg-[#FCFFF8]">
      <p className="text-[16px] font-bold">Any ideas?</p>

      <button
        onClick={handleOpenModal}
        className="text-white px-6 py-3 rounded-md w-[354px]  text-[16px]"
        style={{
          background: "linear-gradient(to right, #75A43E, #007741)",
        }}
      >
        Submit a Project
      </button>

      {isOpen && (
        <div
          className="fixed  left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex items-center justify-center min-h-screen overflow-y-auto scrollbar-hide"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white p-8 w-full max-w-md relative max-h-[90vh] overflow-y-auto my-10 scrollbar-hide">
            <h2 className="text-center font-bold text-[24px] mb-4">
              SUBMIT A PROJECT
            </h2>

            <form className="space-y-4 text-[12px] md:text-[16px] ">
              <div>
                <label className="block font-semibold text-[12px] md:text-[16px] mb-[16px]">
                  Full Name
                </label>
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Enter Name here"
                />
              </div>

              <div>
                <label className="block font-semibold text-[12px] md:text-[16px] mb-[16px]">
                  Email Address
                </label>
                <input
                  className="w-full border p-2 rounded"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label className="block font-semibold text-[12px] md:text-[16px] mb-[16px]">
                  Phone Number
                </label>
                <input
                  className="w-full border p-2 rounded"
                  placeholder="+1"
                />
              </div>

              <div>
                <label className="block font-semibold text-[12px] md:text-[16px] mb-[16px]">
                  Project Proposed Location
                </label>
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Lisbon, Portugal"
                />
              </div>

              <div>
                <label className="block font-semibold text-[12px] md:text-[16px] mb-[16px]">
                  Focus Area
                </label>
                <div className="space-y-1 pl-2">
                  <label>
                    <input type="checkbox" className="mr-2 cursor-pointer" /> Tree Planting
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" className="mr-2 cursor-pointer" /> Community Outreach
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" className="mr-2 cursor-pointer" /> Others
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[12px] md:text-[16px] mb-[16px]">
                  Project Details
                </label>
                <textarea
                  className="w-full border p-2 rounded"
                  placeholder="Text here"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white py-2 rounded"
                style={{
                  background: "linear-gradient(to right, #75A43E, #007741)",
                }}
              >
                Submit!
              </button>
            </form>

            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-6 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitSection;
