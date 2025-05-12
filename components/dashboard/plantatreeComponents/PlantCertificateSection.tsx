import React from 'react'

const PlantCertificateSection = () => {
  return (
    <div className='text-center flex flex-col px-[20px] md:px-0 items-center mb-[28px]'>
            <h2 className='text-[20px] font-bold mb-[24px]'>CELEBRATE YOUR CERTIFICATION</h2>
            <p className='text-[14px] text-[#7A7A7A] md:w-[573px] mb-[58px]'>Receive a personalized digital certificate for every tree you plant with Roburna Forest. This certificate recognizes your commitment to environmental restoration and serves as a symbol of your impact in creating a healthier planet.</p>
            <img src="/dashboard/images/PlantCertificate.png" alt="" />

            <button
        type="button"

        className="w-[300px] mt-[34px] mb-[24px] justify-center flex rounded-[24px] text-white py-2"
        style={{
          background: "linear-gradient(to right, #75A43E, #007741)",
        }}
      >
       Claim and share your Certificate
      </button>

    </div>
  )
}

export default PlantCertificateSection