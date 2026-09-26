import { getWorkouts } from "./data/workouts";
import WorkoutCard from "./components/WorkoutCard";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-black text-white">
      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-16 md:px-6"
      >
        <div className="mb-10">
          <p className="text-sm font-bold tracking-[0.2em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase md:text-6xl">
            The Library
          </h1>

          <p className="mt-3 text-white/50">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </section>
    </main>
  );
}