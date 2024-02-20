import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ClassDetails = () => {
  const [classDetails, setClassDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/classes/${id}`)
      .then((response) => response.json())
      .then((data) => setClassDetails(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!classDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2>{classDetails.className}</h2>
    </div>
  );
};

export default ClassDetails;
