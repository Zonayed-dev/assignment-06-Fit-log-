"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Workout } from "../types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | null>(null);

export function FitLogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  function addToPlan(workout: Workout) {
    setPlan((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  }

  function saveWorkout(workout: Workout) {
    setSaved((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  }

  function removeFromPlan(id: number) {
    setPlan((current) =>
      current.filter((workout) => workout.id !== id)
    );
  }

  function removeFromSaved(id: number) {
    setSaved((current) =>
      current.filter((workout) => workout.id !== id)
    );
  }

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}