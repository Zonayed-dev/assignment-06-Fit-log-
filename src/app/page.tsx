import Image from "next/image";
import { getWorkouts } from "./data/workouts";
import WorkoutCard from "./components/WorkoutCard";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
              Train With Intent.
              <br />
              Log Every Set.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/50">
              Build consistency, track your workouts, and train with purpose.
            </p>

            <a
              href="#library"
              className="mt-8 inline-block bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black"
            >
              Browse Workouts
            </a>
          </div>

          <div className="relative h-[415px] overflow-hidden md:h-[520px]">
            <Image
              src="/assets/banner.png"
              alt="FitLog workout"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Library */}
      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-16 md:px-6"
      >
        <div className="mb-10">
          <p className="text-sm font-bold tracking-[0.2em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
            The Library
          </h2>

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