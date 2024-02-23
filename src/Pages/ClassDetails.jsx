import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaArrowLeft } from "react-icons/fa";
import Loading from "../components/Loader";
import BurgerMenu from "../components/BurgerMenu";
import Navigation from "../components/Navigation";
import { useAuth } from "../Context/Auth";

const ClassView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token, userId } = useAuth();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userIsRegistered, setUserIsRegistered] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/v1/classes/${id}`
        );
        const data = await response.json();
        setWorkout(data);
        setLoading(false);

        if (data.trainerId) {
          const trainerResponse = await fetch(
            `http://localhost:4000/api/v1/trainers/${data.trainerId}`
          );
          const trainerData = await trainerResponse.json();
          setTrainer(trainerData);
        }
      } catch (error) {
        console.error("Error fetching class details:", error);
        setLoading(false);
      }
    };

    fetchClassDetails();
    setUserIsRegistered(false);
  }, [id]);

  const handleSignUp = async () => {
    const method = userIsRegistered ? "DELETE" : "POST";
    const apiUrl = `http://localhost:4000/api/v1/users/${userId}/classes/${id}`;

    try {
      const response = await fetch(apiUrl, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok)
        throw new Error(`${method} request failed: ${response.statusText}`);

      setUserIsRegistered(!userIsRegistered);
      console.log(`${method} request successful!`);
    } catch (error) {
      console.error("Error handling sign up:", error);
    }
  };

  const toggleNavigation = () => setIsNavigationOpen((prev) => !prev);

  if (loading) return <Loading />;
  if (!workout)
    return <div>Sorry... No data available for this class at the moment.</div>;

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between bg-white py-2 px-4">
        <FaArrowLeft
          className="h-6 w-6 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="font-semibold">Class Details</h1>
        <BurgerMenu iconColor="gray" onToggle={toggleNavigation} />
      </div>
      <div
        className="bg-cover bg-center w-full"
        style={{
          height: "432px",
          backgroundImage: `url(${workout.asset.url})`,
        }}
      >
        <div className="text-4xl text-yellow-400 mt-64 font-bold p-4">
          {workout.className}
        </div>

        <div className="flex gap-2 items-center text-yellow-400 p-4">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <FaStar key={index} />
            ))}
          5/5
          <button className="border-2 ml-96 hover:bg-[#f1c40ebc] hover:text-white border-yellow-400 w-[109px] h-[50px] rounded-full text-yellow-400">
            RATE
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="mb-4">
          {workout.classDay} - {workout.classTime}
        </p>
        <p>{workout.classDescription}</p>
        {trainer && (
          <div>
            <p className="font-semibold text-xl mt-6">Trainer</p>
            <div className="flex items-center gap-4 mt-4">
              <img
                className="w-[88px] h-[88px] rounded-2xl object-cover"
                src={trainer.asset.url}
                alt={trainer.trainerName}
              />
              <p className="text-base font-semibold">{trainer.trainerName}</p>
            </div>
          </div>
        )}
        <button
          className="bg-yellow-400 w-full py-3 rounded-full mt-12"
          onClick={handleSignUp}
        >
          {userIsRegistered ? "Leave" : "Sign Up"}
        </button>
      </div>
      {isNavigationOpen && <Navigation onClose={toggleNavigation} />}
    </div>
  );
};

export default ClassView;
