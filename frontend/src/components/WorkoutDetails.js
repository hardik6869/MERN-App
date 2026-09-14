import { useWorkoutsContext } from "../hooks/useWorkoutContext";

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
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
