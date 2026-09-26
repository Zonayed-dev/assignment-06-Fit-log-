import Image from "next/image";
import { getWorkouts } from "../../data/workouts";
import WorkoutActions from "../../components/WorkoutActions";

interface WorkoutDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function WorkoutDetailPage({
  params,
}: WorkoutDetailPageProps) {
  const { id } = await params;

  const workouts = await getWorkouts();

  const workout = workouts.find(
    (workout) => workout.id === Number(id)
  );

  if (!workout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold">Workout Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full border border-[#ccff00]/30 px-3 py-1 text-xs font-bold uppercase text-[#ccff00]"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-black uppercase md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-5 leading-7 text-white/60">
            {workout.description}
          </p>

          {/* Specs */}
          <div className="mt-8 grid grid-cols-2 gap-px bg-white/10">
            <div className="bg-black p-4">
              <p className="text-xs uppercase text-white/40">Equipment</p>
              <p className="mt-1 font-semibold">{workout.equipment}</p>
            </div>

            <div className="bg-black p-4">
              <p className="text-xs uppercase text-white/40">Difficulty</p>
              <p className="mt-1 font-semibold">{workout.difficulty}</p>
            </div>

            <div className="bg-black p-4">
              <p className="text-xs uppercase text-white/40">Sets</p>
              <p className="mt-1 font-semibold">{workout.sets}</p>
            </div>

            <div className="bg-black p-4">
              <p className="text-xs uppercase text-white/40">Reps</p>
              <p className="mt-1 font-semibold">{workout.reps}</p>
            </div>

            <div className="bg-black p-4">
              <p className="text-xs uppercase text-white/40">Duration</p>
              <p className="mt-1 font-semibold">{workout.duration} min</p>
            </div>

            <div className="bg-black p-4">
              <p className="text-xs uppercase text-white/40">Calories</p>
              <p className="mt-1 font-semibold">
                {workout.caloriesBurned} kcal
              </p>
            </div>

            <div className="bg-black p-4">
              <p className="text-xs uppercase text-white/40">Rating</p>
              <p className="mt-1 font-semibold">{workout.rating}</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-xl font-bold uppercase">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm text-white/60"
                >
                  <span className="font-bold text-[#ccff00]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
         <WorkoutActions workout={workout} />
        </div>
      </section>
    </main>
  );
}