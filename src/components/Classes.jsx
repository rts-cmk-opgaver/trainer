import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ClassesList = ({ title }) => {
  const [classes, setClasses] = useState([]);
  const stars = Array(5).fill(<FaStar />);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/classes")
      .then((response) => response.json())
      .then((data) => {
        setClasses(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2 className="text-xl font-bold">{title || "Classes for You"}</h2>
      <div className="flex overflow-x-auto no-scrollbar">
        {classes.map((classItem) => (
          <section
            key={classItem.id}
            className="flex-shrink-0 w-[200px] h-[200px] relative m-2"
          >
            <Link to={`/class-details/${classItem.id}`}>
              <div className="relative rounded-2xl h-full">
                <img
                  src={classItem.asset.url}
                  alt={classItem.className}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 w-full h-[72px] p-2 bg-[#F1C40E] font-bold text-black text-sm rounded-bl-2xl rounded-tr-[48px]">
                  {classItem.className}
                  <div className="flex space-x-2 pt-2">
                    {stars.map((star, index) => (
                      <React.Fragment key={`${classItem.id}-${index}`}>
                        {star}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </section>
        ))}
      </div>
    </>
  );
};

export default ClassesList;
