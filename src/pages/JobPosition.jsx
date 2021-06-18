import React, { useEffect, useState } from "react";
import JobPositionService from "../services/jobPositionService";

export default function JobPosition() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((jobPosition) => setJobPositions(jobPosition.data));
  });

  return (
    <div>
     
    </div>
  );
}
