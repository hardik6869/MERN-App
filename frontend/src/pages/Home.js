import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkeouts = async () => {
      const res = await fetch("/api/v1/workouts");
      const json = await res.json();
      if (res.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json.data });
      }
    };

    fetchWorkeouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((item) => (
            <WorkoutDetails key={item._id} workout={item} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
