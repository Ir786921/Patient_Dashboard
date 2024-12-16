import React, { useState, useEffect } from "react";
import PatientChart from "./Component/PatientChart";
import PatientDetails from "./Component/PatientDetails";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import { username, password ,url } from "./Secretfile";


const App = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const credentials = btoa(`${username}:${password}`);

  useEffect(() => {
    getPatients();
  }, []);

  async function getPatients() {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });

    const result = await response.json();
    setPatients(result);
  }

 
  
return (
   <>
   <div className=" tw-bg-[#F6F7F8] tw-p-3">
    <div><Header /></div>
    <div className=" tw-flex md:tw-flex-row tw-flex-col tw-gap-5">
    <div>
          {" "}
          <Sidebar patients={patients} onSelect={setSelectedPatient} />
        </div>
        <div className="">
          <div className="tw-flex md:tw-flex-row tw-flex-col tw-gap-5 tw-p-2">
            {selectedPatient ? (
              <>
                <PatientChart data={selectedPatient?.diagnosis_history} diagnostic = {selectedPatient?.diagnostic_list}/>
                <PatientDetails patient={selectedPatient} />
              </>
            ) : (
              <h1 className=" tw-text-[20px] tw-font-semibold">
                No Data Available Please select Patient.....
              </h1>
            )}
          </div>
        </div>
    </div>
    </div>
   </>
           
  );
};

export default App;
