"use client";

import Link from "next/link";
import { useFitLog } from "./FitLogProvider";

export default function PlanBadges() {
  const { plan, saved } = useFitLog();

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/my-plan"
        className="rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold text-black"
      >
        PLAN {plan.length}
      </Link>

      <Link
        href="/my-plan"
        className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-bold text-white"
      >
        SAVED {saved.length}
      </Link>
    </div>
  );
}