import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ClassDetails = () => {
  const [classDetails, setClassDetails] = useState(null);
  const [trainerDetails, setTrainerDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/classes/${id}`)
      .then((response) => response.json())
      .then((data) => setClassDetails(data))
      .catch((error) => console.error("Failed to fetch class details:", error));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/trainers/${id}`)
      .then((response) => response.json())
      .then((data) => setTrainerDetails(data))
      .catch((error) =>
        console.error("Failed to fetch trainer details:", error)
      );
  }, [id]);

  const stars = Array(5).fill(<FaStar />);

  if (!classDetails || !trainerDetails) return <div>Loading...</div>;

  return (
    <div className="relative w-full h-[28rem]">
      <img
        src={classDetails.asset.url}
        alt={classDetails.className}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-3/4 left-0 transform -translate-y-1/2 w-full px-4">
        <h1 className="text-4xl font-bold text-[#F1C40E]">
          {classDetails.className}
        </h1>
        <div className="flex items-center justify-between space-x-4 mt-4">
          <div className="flex items-center space-x-3 text-[#F1C40E]">
            {stars.map((star, index) => (
              <React.Fragment key={index}>{star}</React.Fragment>
            ))}
            <p className="font-bold">5/5</p>
          </div>
          <button className="border-2 hover:bg-[#f1c40ebc] hover:text-white border-yellow-400 w-[109px] h-[50px] rounded-full text-yellow-400">
            RATE
          </button>
        </div>
      </div>
      <main>
        <div className="flex mt-4 font-bold space-x-2">
          <h2 className="">{classDetails.classDay}</h2>
          <p>- {classDetails.classTime}</p>
        </div>
        <p className="mt-2">{classDetails.classDescription}</p>
        <h1 className="font-bold mt-[34px] text-2xl">Trainer</h1>
        {trainerDetails && (
          <div className="flex">
            <img
              src={trainerDetails.asset.url}
              alt={`Trainer ${trainerDetails.name}`}
              className="w-[88px] h-[88px] mt-2 rounded-lg"
            />
            <p className="self-center ml-4 font-bold">
              {trainerDetails.trainerName}
            </p>
          </div>
        )}
        <div className="flex justify-center items-center">
          <button className="w-[334px] mt-[20px] h-[44px] hover:bg-[#ffdc50bc] hover:text-white font-bold rounded-full bg-[#f1c40ebc]">
            SIGN UP
          </button>
        </div>
      </main>
    </div>
  );
};

export default ClassDetails;
