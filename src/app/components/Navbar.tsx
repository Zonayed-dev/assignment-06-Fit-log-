import Image from "next/image";
import Link from "next/link";
import PlanBadges from "./PlanBadges";
export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={40}
            height={40}
          />

          <span className="text-xl font-bold text-white">
            FITLOG
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-semibold text-[#ccff00]"
          >
            WORKOUT
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-semibold text-white/60 hover:text-white"
          >
            MY PLAN
          </Link>
        </div>
        <PlanBadges />

      </div>
    </nav>
  );
}