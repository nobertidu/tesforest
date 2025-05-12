import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const treeOptions = [1, 3, 5, 10];
const amountOptions = [10, 25, 50, 84];

const PlantTreeSection = () => {
  const [selectedTrees, setSelectedTrees] = useState<number>(5);
  const [selectedAmount, setSelectedAmount] = useState<number>(84);
  const [openTrees, setOpenTrees] = useState(false);
  const [openAmount, setOpenAmount] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between max-w-[896px] my-[80px] border border-[#007741] md:mx-auto mx-4 rounded-[8px]  p-[24px]">
      {/* Image Section */}
      <div className="mb-6 md:mb-0 md:mr-6 flex justify-center">
        <img
          src="/dashboard/images/DonationImage.png"
          alt="Donation"
          className="w-full max-w-[320px] md:max-w-none"
        />
      </div>

      {/* Form/Card Section */}
      <div className="border-[#7a7a7a81] w-full md:w-[402px] rounded-[8px] border-2">
        <div className="p-[24px]">
          <p className="text-[#121212] font-bold text-[20px]">
            PLANT A TREE TODAY
          </p>
          <p className="text-[14px] text-[#7A7A7A] leading-normal pt-[20px] pb-[25px]">
            Every tree helps restore forests, improve air quality, and support
            biodiversity. Choose an amount, or adjust it as needed, then proceed
            to secure payment.
          </p>

          {/* Dropdown Selectors */}
          <div className="w-full space-y-2 pb-[15px]">
            {/* Tree Dropdown */}
            <div className="relative">
              <button
                className="w-full bg-green-50 border rounded-md px-4 py-2 flex justify-between items-center"
                onClick={() => setOpenTrees(!openTrees)}
              >
                <span>{selectedTrees} Trees</span>
                {openTrees ? (
                  <IoMdArrowDropup size={16} />
                ) : (
                  <IoMdArrowDropdown size={16} />
                )}
              </button>
              {openTrees && (
                <ul className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow">
                  {treeOptions.map((num) => (
                    <li
                      key={num}
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                      onClick={() => {
                        setSelectedTrees(num);
                        setOpenTrees(false);
                      }}
                    >
                      {num} Trees
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Amount Dropdown */}
            <div className="relative">
              <button
                className="w-full bg-[#FDFDF4] border rounded-md px-4 py-2 flex justify-between items-center font-semibold"
                onClick={() => setOpenAmount(!openAmount)}
              >
                <span>${selectedAmount}</span>
                {openAmount ? (
                  <IoMdArrowDropup size={16} />
                ) : (
                  <IoMdArrowDropdown size={16} />
                )}
              </button>
              {openAmount && (
                <ul className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow">
                  {amountOptions.map((amt) => (
                    <li
                      key={amt}
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setOpenAmount(false);
                      }}
                    >
                      ${amt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="text-white px-6 py-3 rounded-md w-full text-[16px]"
            style={{
              background: "linear-gradient(to right, #75A43E, #007741)",
            }}
          >
            Make Your Donation
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantTreeSection;
