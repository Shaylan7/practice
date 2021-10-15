import * as React from "react";

import * as apiClient from "../apiClient.js";

const Origin = () => {
  const [distance, setDistance] = React.useState([]);
  let origins = ["42.30432", "-73.4389"];
  let destinations = ["42.30432,-73.4389", "43.30432,-74.4389"];
  let travelMode = ["DRIVING"];

  const loadDistance = async () => setDistance(await apiClient.getDistance());
  console.log("hello", distance);

  React.useEffect(() => {
    loadDistance();
  }, []);

  return (
    <div>
      {origins};{destinations};{travelMode}
      <div>hello {distance}</div>
    </div>
  );
};

export default Origin;
