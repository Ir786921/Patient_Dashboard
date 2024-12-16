import React from "react";
import birth from "../Assest/BirthIcon.png";
import Male from "../Assest/MaleIcon.svg";
import FeMale from "../Assest/FemaleIcon.png";
import Phone from "../Assest/PhoneIcon.png";
import Insurance from "../Assest/InsuranceIcon.png";
import download from "../Assest/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

const PatientDetails = ({ patient }) => {
  if (!patient) return <div>Select a patient to see details.</div>;

  return (
    <div className=" tw-flex tw-flex-col tw-gap-6">
      <div className=" tw-flex tw-flex-col tw-gap-4 tw-w-full tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-3 tw-h-[675px]">
        
        {/*Profile and Name Section */}

        <div className=" tw-items-center tw-w-full tw-justify-center tw-flex tw-flex-col">
          <img
            src={patient.profile_picture}
            alt={`${patient.name}'s profile`}
            className="tw-w-[200px] tw-h-[200px] tw-rounded-full tw-object-cover tw-mr-4 tw-items-center"
          />
          <h3 className="tw-text-lg tw-font-semibold tw-text-[#072635] tw-text-center tw-mt-1">
            {patient.name}
          </h3>
        </div>
        
        {/* Patient Details Section */}

        <div>
          <ul className=" tw-flex tw-flex-col tw-items-start">
            <l1 className="tw-flex tw-gap-3 tw-px-1 tw-py-2 tw-text-sm tw-font-semibold ">
              {" "}
              <img src={birth} alt="" />
              <div>
                <span className=" tw-mb-1 tw-text-[12px] tw-font-light">
                  Date of Birth
                </span>
                <br />
                {patient.date_of_birth}
              </div>
            </l1>
            <l1 className="tw-flex tw-gap-3  tw-px-1 tw-py-2 tw-text-sm tw-font-semibold">
              {" "}
              <img src={patient.gender === "Male" ? Male : FeMale} alt="" />
              <div>
                <span className=" tw-mb-1 tw-text-[12px] tw-font-light">
                  Gender
                </span>
                <br />
                {patient.gender}
              </div>
            </l1>
            <l1 className="tw-flex tw-gap-3  tw-px-1 tw-py-2 tw-items-center tw-text-sm tw-font-semibold">
              {" "}
              <img src={Phone} alt="" />
              <div>
                <span className=" tw-mb-1 tw-text-[12px] tw-font-light">
                  Phone Number
                </span>
                <br />
                {patient.phone_number}
              </div>
            </l1>
            <l1 className="tw-flex tw-gap-3  tw-px-1 tw-py-2 tw-items-center tw-text-sm tw-font-semibold">
              {" "}
              <img src={Phone} alt="" />
              <div>
                <span className=" tw-mb-1 tw-text-[12px] tw-font-light">
                  Emergency Contact
                </span>
                <br />
                {patient.emergency_contact}
              </div>
            </l1>
            <l1 className="tw-flex tw-gap-3  tw-px-1 tw-py-2 tw-items-center tw-text-sm tw-font-semibold">
              {" "}
              <img src={Insurance} alt="" />
              <div>
                <span className=" tw-mb-1 tw-text-[12px] tw-font-light">
                  Insurance Provider
                </span>
                <br />
                {patient.insurance_type}
              </div>
            </l1>
          </ul>
        </div>

        {/*Show All Information Section  */}

        <div className=" tw-flex tw-justify-center">
          {" "}
          <button className="  tw-rounded-[41px] tw-bg-[#01F0D0] tw-px-14 tw-py-1">
            Show All Information
          </button>
        </div>
      </div>


       {/*Lab Results Section */}
       
      <div className=" md:tw-w-[367px] tw-w-full tw-h-[296px] tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-4 tw-overflow-y-auto">
        <h3 className="tw-text-2xl tw-font-bold tw-mt-3 tw-mb-3">
          Lab Results
        </h3>

        {patient?.lab_results.map((item) => {
          return (
            <ul className="list-none  tw-flex tw-justify-between tw-items-center tw-p-2 hover:tw-bg-[#F6F7F8]">
              <li className="tw-text-[#072635] tw-text-sm">{item} </li>
              <li>
                {" "}
                <img
                  className="tw-px-4 tw-py-2 tw-cursor-pointer tw-text-white"
                  src={download}
                  alt="icon"
                />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default PatientDetails;
