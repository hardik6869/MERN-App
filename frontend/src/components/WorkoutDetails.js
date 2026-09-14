import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleDelete = async () => {
    const res = await fetch(`/api/v1/workouts/${workout._id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: { id: workout._id } });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong> {workout.load}
      </p>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleDelete} className="material-symbols-outlined">
        Delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
