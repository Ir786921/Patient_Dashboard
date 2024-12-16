import React, { useState } from "react";
import TestLogo from "../Assest/TestLogo.svg";
import OverView from "../Assest/home_FILL0_wght300_GRAD0_opsz24.svg";
import Group from "../Assest/group_FILL0_wght300_GRAD0_opsz24.svg";
import Birth from "../Assest/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import Card from "../Assest/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import Doctor from "../Assest/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import Setting from "../Assest/settings_FILL0_wght300_GRAD0_opsz24.svg";
import Vertical from "../Assest/more_vert_FILL0_wght300_GRAD0_opsz24.svg";

const Header = () => {
  const [isclicked, setIsclicked] = useState(false);
  return (
    <>
    {/* Nav Bar Section */}

      <div className=" tw-shadow-md tw-rounded-[30px] tw-bg-white tw-p-2 tw-flex tw-justify-between tw-mb-8">
        <img src={TestLogo} alt="" />
        <div className=" tw-hidden md:tw-flex tw-gap-2 tw-items-center">
          <l1 className="tw-flex tw-gap-3 tw-rounded-[30px] tw-px-3 tw-py-2 tw-items-center hover:tw-bg-green-400 tw-text-sm tw-font-semibold tw-cursor-pointer">
            <img src={OverView} alt="" /> Overview
          </l1>
          <l1 className="tw-flex tw-gap-3 tw-rounded-[30px] tw-px-3 tw-py-2 tw-items-center hover:tw-bg-green-400 tw-text-sm tw-font-semibold tw-cursor-pointer">
            <img src={Group} alt="" /> Patient
          </l1>

          <l1 className="tw-flex tw-gap-3 tw-rounded-[30px] tw-px-3 tw-py-2 tw-items-center hover:tw-bg-green-400 tw-text-sm tw-font-semibold tw-cursor-pointer">
            <img src={Birth} alt="" /> Schedule
          </l1>

          <l1 className="tw-flex tw-gap-3 tw-rounded-[30px] tw-px-3 tw-py-2 tw-items-center hover:tw-bg-green-400 tw-text-sm tw-font-semibold tw-cursor-pointer">
            <img src={Card} alt="" /> Transaction
          </l1>
        </div>

    {/*Doctor Details Section  */}

        <div className="tw-hidden md:tw-flex tw-justify-between tw-items-center tw-gap-5">
          <img src={Doctor} alt="" className=" tw-w-8 tw-h-8" />
          <p className=" tw-text-sm">
            <span className=" tw-text-[#707070]">
              <strong>Dr. Jose Simmons</strong> <br /> General Practitioner
            </span>
          </p>
          <span className=" tw-flex">
            {" "}
            <img src={Setting} alt="" className=" tw-w-7 tw-h-7 tw-cursor-pointer" />
            <img src={Vertical} alt="" className=" tw-w-7 tw-h-7 tw-cursor-pointer" />
          </span>
        </div>
       
       {/* Three Dot Section */}
        <div
          className=" md:tw-hidden tw-flex tw-items-center tw-cursor-pointer"
          onClick={() => {
            setIsclicked(!isclicked);
          }}
        >
          <img src={Vertical} alt="" className=" tw-w-7 tw-h-7 tw-cursor-pointer" />
        </div>

      </div>

      {/* hamburger Section */}
      
      <div
        className={` tw-p-4 ${
          isclicked
            ? "tw-flex md:tw-hidden tw-flex-col tw-justify-start tw-gap-5"
            : "tw-hidden"
        } `}
      >
        <l1 className="tw-flex tw-gap-3 tw-rounded-[30px] tw-px-3 tw-py-2 tw-items-center hover:tw-bg-green-400 tw-text-sm tw-font-semibold tw-cursor-pointer">
          {" "}
          <img src={OverView} alt="" /> Overview
        </l1>
        <l1 className="tw-flex tw-gap-3 tw-rounded-[30px] tw-px-3 tw-py-2 tw-items-center hover:tw-bg-green-400 tw-text-sm tw-font-semibold tw-cursor-pointer">
          {" "}
          <img src={Group} alt="" /> Patient
        </l1>

        <l1 className="tw-flex tw-gap-3 tw-rounded-[30px] tw-px-3 tw-py-2 tw-items-center hover:tw-bg-green-400 tw-text-sm tw-font-semibold tw-cursor-pointer">
          {" "}
          <img src={Birth} alt="" /> Schedule
        </l1>

        <l1 className="tw-flex tw-gap-3 tw-rounded-[30px] tw-px-3 tw-py-2 tw-items-center hover:tw-bg-green-400 tw-text-sm tw-font-semibold tw-cursor-pointer">
          {" "}
          <img src={Card} alt="" /> Transaction
        </l1>
        <l1 className="tw-flex tw-gap-3 tw-rounded-[30px] tw-px-3 tw-py-2 tw-items-center hover:tw-bg-green-400 tw-text-sm tw-font-semibold tw-cursor-pointer">
          {" "}
          <img src={Doctor} alt="" />
          <span className=" tw-text-[#707070]">
            <strong>Dr. Jose Simmons</strong> <br /> General Practitioner
          </span>
        </l1>
      </div>
    </>
  );
};

export default Header;
