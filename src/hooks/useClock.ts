import { CityID, getTimeByCity } from "@/utils";
import { useEffect, useState } from "react";

const useClock = (city: CityID = "new-delhi") => {
  const [time, setTime] = useState(getTimeByCity(city));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(() => getTimeByCity(city));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
};

export default useClock;
