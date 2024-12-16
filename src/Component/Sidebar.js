import React from "react";
import Search from "../Assest/search_FILL0_wght300_GRAD0_opsz24.svg";
import Horizontal from "../Assest/more_horiz_FILL0_wght300_GRAD0_opsz24 (1).svg";

const Sidebar = ({ patients, onSelect }) => {
  return (
    <div className=" tw-font-semibold tw-text-sm tw-overflow-y-auto md:tw-w-[280px] tw-w-full tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-3 tw-h-[1000px]">
      <div className="tw-text-md tw-font-bold tw-mb-4 tw-flex tw-justify-between">
        {" "}
        <h2 className="tw-text-xl tw-font-bold">Patients</h2>{" "}
        <img src={Search} alt="" />{" "}
      </div>
      <div className=" tw-flex tw-flex-col tw-gap-5">
        {patients.map((patient) => (
          <div
            className="tw-flex tw-items-center tw-bg-white tw-p-2  hover:tw-bg-[#D8FCF7] hover:tw-cursor-pointer tw-relative"
            onClick={() => onSelect(patient)}
          >
            <img
              src={patient.profile_picture}
              alt={`${patient.name}'s profile`}
              className="tw-w-12 tw-h-12 tw-rounded-full tw-object-cover tw-mr-4"
            />
            <div className="tw-flex tw-flex-col">
              <h3 className="tw-text-[14px] tw-font-semibold tw-text-gray-800">
                {patient.name}
              </h3>
              <p className="tw-text-[14px] tw-text-gray-600">
                {patient.gender},&nbsp;{patient.age}
              </p>
            </div>

            <img
              src={Horizontal}
              alt=""
              className=" tw-absolute tw-right-3 tw-top-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
