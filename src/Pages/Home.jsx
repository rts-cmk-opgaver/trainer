import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Home = () => {
  const [classes, setClasses] = useState([]);
  const [popularClass, setPopularClass] = useState(null);
  //stars of 5
  const stars = Array(5).fill(<FaStar />);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/classes")
      .then((response) => response.json())
      .then((data) => {
        setClasses(data);
        if (data.length > 0) {
          // Pick a random class for the Popular classes section
          const randomIndex = Math.floor(Math.random() * data.length);
          setPopularClass(data[randomIndex]);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <main className=" items-center mb-[48px]">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Popular classes</h1>
          <p>Burgermenu</p>
        </div>
        {popularClass && (
          <section className="relative w-[335px] h-[404px] my-4">
            <Link to={`/class-details/${popularClass.id}`}>
              <img
                src={popularClass.asset.url}
                alt={popularClass.className}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 w-[224px] h-[72px] p-2 bg-[#F1C40E] font-bold text-black text-left rounded-bl-2xl rounded-tr-[48px]">
                {popularClass.className}
                <div className="flex space-x-2 pt-2">
                  {stars.map((star, index) => (
                    <React.Fragment key={index}>{star}</React.Fragment>
                  ))}
                </div>
              </div>
            </Link>
          </section>
        )}
      </main>
      <main>
        <h2 className="text-xl font-bold">Classes for you</h2>
        <div className="flex overflow-x-auto no-scrollbar">
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
                    <div className="absolute bottom-0 left-0 w-full h-[72px] p-2 bg-[#F1C40E] font-bold text-black text-sm rounded-bl-2xl rounded-tr-[48px] ">
                      {classItem.className}
                      <div className="flex space-x-2 pt-2">
                        {stars.map((star, index) => (
                          <React.Fragment key={index}>{star}</React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
