import { getWorkouts } from "./data/workouts";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="text-4xl font-bold">
        FitLog
      </h1>

      <p className="mt-4">
        Total workouts: {workouts.length}
      </p>
    </main>
  );
}