"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, X } from "lucide-react";
import { useFitLog } from "../components/FitLogProvider";

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, removeFromSaved } = useFitLog();

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <p className="text-sm font-bold tracking-[0.2em] text-[#ccff00]">
          YOUR WORKOUTS
        </p>

        <h1 className="mt-3 text-4xl font-black uppercase">
          My Plan
        </h1>

        <p className="mt-3 text-white/50">
          Track your planned and saved workouts.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-3">
          <div className="border border-white/10 p-5">
            <p className="text-xs uppercase text-white/40">
              Exercises
            </p>
            <p className="mt-2 text-3xl font-black">{plan.length}</p>
          </div>

          <div className="border border-white/10 p-5">
            <p className="text-xs uppercase text-white/40">
              Minutes
            </p>
            <p className="mt-2 text-3xl font-black">
              {totalMinutes}
            </p>
          </div>

          <div className="border border-white/10 p-5">
            <p className="text-xs uppercase text-white/40">
              Calories
            </p>
            <p className="mt-2 text-3xl font-black">
              {totalCalories}
            </p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-black uppercase">
            Today's Plan
          </h2>

          {plan.length === 0 ? (
            <div className="mt-5 border border-dashed border-white/10 p-10 text-center">
              <p className="text-white/50">
                No workouts in today's plan.
              </p>

              <Link
                href="/"
                className="mt-4 inline-block bg-[#ccff00] px-5 py-3 text-sm font-bold uppercase text-black"
              >
                Browse Workouts
              </Link>
            </div>
          ) : (
            <div className="mt-5 grid gap-4">
              {plan.map((workout) => (
                <div
                  key={workout.id}
                  className="flex gap-4 border border-white/10 bg-zinc-950 p-4"
                >
                  <div className="relative h-24 w-32 shrink-0">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold uppercase">
                      {workout.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/40">
                      {workout.equipment}
                    </p>

                    <div className="mt-3 flex gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {workout.duration} min
                      </span>

                      <span className="flex items-center gap-1">
                        <Flame size={14} />
                        {workout.caloriesBurned} kcal
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromPlan(workout.id)}
                    className="self-start p-2 text-white/40"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-black uppercase">
            Saved
          </h2>

          {saved.length === 0 ? (
            <div className="mt-5 border border-dashed border-white/10 p-10 text-center">
              <p className="text-white/50">
                No saved workouts.
              </p>
            </div>
          ) : (
            <div className="mt-5 grid gap-4">
              {saved.map((workout) => (
                <div
                  key={workout.id}
                  className="flex gap-4 border border-white/10 bg-zinc-950 p-4"
                >
                  <div className="relative h-24 w-32 shrink-0">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold uppercase">
                      {workout.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/40">
                      {workout.equipment}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromSaved(workout.id)}
                    className="self-start p-2 text-white/40"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}