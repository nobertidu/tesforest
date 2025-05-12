import React, { useState, useEffect } from "react";

const ButtonComponent = () => {
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
    <div>
      <button
        type="button"
        onClick={handleOpenModal}
        className="w-[206px] justify-center flex rounded-[24px] text-white py-2"
        style={{
          background: "linear-gradient(to right, #75A43E, #007741)",
        }}
      >
        Become a Volunteer
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white p-8  w-full max-w-md relative max-h-[90vh] overflow-y-auto my-10 scrollbar-hide">
            <h2 className="text-center font-bold md:text-[24px] text-[16px] mb-4">
              VOLUNTEER REGISTRATION FORM
            </h2>

            <form className="space-y-4 text-start">
              <div>
                <label className="block font-semibold text-[16px] mb-[16px]">
                  Particular Type
                </label>
                <div className="space-y-1 pl-2">
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 cursor-pointer mb-6"
                    />{" "}
                    Individual
                  </label>
                  <br />
                  <label>
                    <input type="checkbox" className="mr-2 cursor-pointer" />{" "}
                    Family
                  </label>
                </div>
              </div>
              <div>
                <label className="block font-semibold text-[16px] mb-[16px]">
                  If Family, how many members?
                </label>
                <input
                  type="number"
                  className="w-full border p-2 rounded "
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block font-semibold text-[16px] mb-[16px]">
                  Full Name
                </label>
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Enter Name here"
                />
              </div>

              <div>
                <label className="block font-semibold text-[16px] mb-[16px]">
                  Email Address
                </label>
                <input
                  className="w-full border p-2 rounded"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label className="block font-semibold text-[16px] mb-[16px]">
                  Phone Number
                </label>
                <input className="w-full border p-2 rounded" placeholder="+1" />
              </div>

              <div>
                <label className="block font-semibold text-[16px] mb-[16px]">
                  Project Proposed Location
                </label>
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Lisbon, Portugal"
                />
              </div>

              <div>
                <label className="block font-semibold text-[16px] mb-[16px]">
                  Availability
                </label>
                <div className="space-y-1 pl-2 ">
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 text-[14px] cursor-pointer mb-4"
                    />{" "}
                    Weekend
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 text-[14px] cursor-pointer mb-4"
                    />{" "}
                    Weekdays
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 text-[14px] cursor-pointer mb-4"
                    />{" "}
                    Morning
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 text-[14px] cursor-pointer mb-4"
                    />{" "}
                    Afternoon
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 text-[14px] cursor-pointer mb-4"
                    />{" "}
                    Full Day
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[16px] mb-[16px]">
                  Area(s) of Interest
                </label>
                <div className="space-y-1 pl-2 ">
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 text-[14px] cursor-pointer mb-4"
                    />{" "}
                    Tree Planting
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 text-[14px] cursor-pointer mb-4"
                    />{" "}
                    Community Outreach
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 text-[14px] cursor-pointer mb-4"
                    />{" "}
                    Environmental Education
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 text-[14px] cursor-pointer mb-4"
                    />{" "}
                    Documentation/Media
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      className="mr-2 text-[14px] cursor-pointer mb-4"
                    />{" "}
                    Others
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[16px] mb-[10px]">
                  Why do you want to Volunteer?
                </label>
                <textarea
                  className="w-full border p-2 rounded"
                  placeholder="Text here"
                />
              </div>

              <div>
                <label className="block font-semibold text-[16px] mb-[16px]">
                  Area(s) of Interest
                </label>

                <div className="space-y-4 pl-2">
                  <label className="flex items-start text-[14px] leading-snug">
                    <input
                      type="checkbox"
                      className="mt-1 mr-2 cursor-pointer"
                    />
                    I agree to be contacted for future volunteer events.
                  </label>

                  <label className="flex items-start text-[14px] leading-snug">
                    <input
                      type="checkbox"
                      className="mt-1 mr-2 cursor-pointer"
                    />
                    I give permission for photos/videos taken during events to
                    be used for Roburna Forest campaigns.
                  </label>
                </div>
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
              className="absolute top-2 right-5 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonComponent;
