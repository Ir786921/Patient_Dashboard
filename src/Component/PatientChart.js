import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Respiratory from "../Assest/respiratory rate.svg";
import heart from "../Assest/118976b5-713e-44f6-a7f8-99d2d3f1531a.png";
import ArrowUp from "../Assest/ArrowUp.svg";
import ArrowDown from "../Assest/ArrowDown.svg";

import temperature from "../Assest/temperature.svg";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PatientChart = ({ data, diagnostic }) => {
  const chartData = {
    labels: data.map((entry) => entry.month),
    datasets: [
      {
        label: "Systolic",
        data: data.map((entry) => entry?.blood_pressure?.systolic?.value),
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: data.map((entry) => entry?.blood_pressure?.diastolic?.value),
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Blood Pressure History",
      },
    },
  };
return (
    <div className=" tw-flex tw-flex-col tw-gap-6">
      <div className="tw-p-3 tw-rounded-lg tw-shadow-lg tw-w-full md:tw-w-[806px] tw-h-[673] tw-bg-white">
        <h3 className="tw-text-2xl tw-font-bold tw-text-black">
          Diagnosis History
        </h3>

      {/* Chart Section */}

        <div className=" tw-w-full md:tw-w-[778px] md:tw-h-[298px] tw-h-auto tw-bg-[#F4F0FE] tw-mt-5 tw-flex md:tw-flex-row tw-flex-col tw-justify-center tw-gap-6 tw-p-2 tw-rounded-md">
          <Line data={chartData} options={chartOptions} />

          <div className=" tw-p-2 tw-w-full">
            <div>
              <h4 className="tw-text-sm tw-font-semibold">
                {" "}
                <span className=" tw-text-[#e66fd2] tw-text-sm"> ⬤ </span>
                &nbsp;Systolic
              </h4>
              <p className=" tw-font-bold">
                {" "}
                {data[0]?.blood_pressure?.systolic?.value}
              </p>
              <p className=" tw-flex tw-text-sm">
                <img
                  src={
                    data[0]?.blood_pressure?.systolic?.levels ===
                      "Higher than Average" && ArrowUp
                  }
                  alt=""
                />{" "}
                &nbsp; &nbsp;
                {data[0]?.blood_pressure?.systolic?.levels}
              </p>
            </div>
            <hr />
            <div>
              <h4 className=" tw-text-sm tw-font-semibold">
                <span className=" tw-text-[#36A2EB] tw-text-sm"> ⬤ </span>{" "}
                &nbsp;Diastolic
              </h4>
              <p className=" tw-font-bold">
                {data[0]?.blood_pressure?.diastolic?.value}
              </p>
              <p className=" tw-flex tw-text-sm">
                <img
                  src={
                    data[0]?.blood_pressure?.diastolic?.levels ===
                      "Lower than Average" && ArrowDown
                  }
                  alt=""
                />{" "}
                &nbsp; &nbsp;
                {data[0]?.blood_pressure?.diastolic?.levels}
              </p>
            </div>
          </div>
        </div>

        {/* three card Section */}

        <div className="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-mt-5 md:tw-w-full tw-gap-5">
          <div className=" tw-flex md:tw-justify-start tw-justify-center tw-p-3 tw-flex-col md:tw-w-48 tw-w-full md:tw-items-start tw-items-center tw-bg-[#e0f3fa] tw-rounded-lg  hover:tw-shadow-lg">
            <img
              src={Respiratory}
              alt={`${data.name}'s profile`}
              className="tw-w-16 tw-h-16 tw-rounded-full tw-object-cover tw-mr-4"
            />
            <p className=" tw-mt-3 tw-font-semibold">Respiratory Rate</p>
            <p className=" tw-font-bold tw-text-lg">
              {data[0]?.respiratory_rate?.value} bpm
            </p>
            <p>{data[0]?.respiratory_rate?.levels}</p>
          </div>
          <div className="tw-flex tw-justify-start tw-p-3 tw-flex-col md:tw-w-48 tw-w-full md:tw-items-start tw-items-center tw-bg-[#ffe6e9] tw-rounded-lg  hover:tw-shadow-lg">
            <img
              src={temperature}
              alt={`temp`}
              className="tw-w-16 tw-h-126 tw-rounded-full tw-object-cover tw-mr-4"
            />
            <p className=" tw-font-semibold">Temperature</p>
            <p className=" tw-font-bold tw-text-lg">
              {data[0]?.temperature?.value} ℉
            </p>
            <p className=" tw-flex tw-text-sm">
              <img
                src={
                  data[0]?.temperature?.levels === "Higher than Average"
                    ? ArrowUp
                    : ""
                }
                alt=""
              />{" "}
              &nbsp; &nbsp;
              {data[0]?.temperature?.levels}
            </p>
          </div>
          <div className=" tw-flex tw-justify-start tw-p-3 tw-flex-col md:tw-w-48 tw-w-full md:tw-items-start tw-items-center tw-bg-[#ffe6f1] tw-rounded-lg  hover:tw-shadow-lg">
            <img
              src={heart}
              alt={`heart`}
              className="tw-w-16 tw-h-16 tw-rounded-full tw-object-cover tw-mr-4"
            />
            <p className=" tw-font-semibold">Heart Rate</p>
            <p className=" tw-font-bold tw-text-lg">
              {data[0]?.heart_rate?.value} bpm
            </p>
            <p className=" tw-flex tw-text-sm">
              <img
                src={
                  data[0]?.blood_pressure?.diastolic?.levels ===
                  "Lower than Average"
                    ? ArrowDown
                    : ""
                }
                alt=""
              />{" "}
              &nbsp; &nbsp;
              {data[0]?.blood_pressure?.diastolic?.levels}
            </p>
          </div>
        </div>
      </div>

      {/* Diagnostic List Section */}

      <div className="tw-p-6 tw-rounded-lg tw-shadow-lg tw-w-full md:tw-w-[806px] tw-h-[349px] tw-bg-white tw-overflow-y-auto">
        <h2 className="tw-text-2xl tw-font-bold tw-mb-4">Diagnostic List</h2>
        <table className="tw-w-full  tw-bg-white  tw-p-6 tw-text-[#072635] tw-opacity-95">
          <thead className=" ">
            <tr>
              <th>
                <div className=" tw-flex tw-justify-start tw-rounded-l-[30px] tw-bg-[#F6F7F8] tw-px-2 tw-py-1 tw-mt-4">
                  <div className=" tw-font-semibold">Problem/Diagnosis</div>
                </div>
              </th>
              <th>
                <div className=" tw-flex tw-justify-start  tw-bg-[#F6F7F8] tw-px-2 tw-py-1 tw-mt-4">
                  <div className=" tw-font-semibold">Description</div>
                </div>
              </th>
              <th className=" tw-flex tw-justify-start tw-rounded-r-[30px] tw-bg-[#F6F7F8] tw-px-2 tw-py-1 tw-mt-4">
                <div>
                  <div className=" tw-font-semibold">Status</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {diagnostic.map((item, index) => (
              <tr key={index} className={`tw-bg-white`}>
                <td className="tw-p-3 tw-border-b">{item?.name}</td>
                <td className="tw-p-3 tw-border-b">{item.description}</td>
                <td className="tw-p-3 tw-border-b">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientChart;
