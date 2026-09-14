import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkeouts = async () => {
      const res = await fetch("/api/v1/workouts");
      const json = await res.json();
      if (res.ok) {
        setWorkouts(json.data);
      }
    };

    fetchWorkeouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((item) => (
            <WorkoutDetails key={item._id} workout={item} />
          ))}
      </div>
    </div>
  );
};

export default Home;
