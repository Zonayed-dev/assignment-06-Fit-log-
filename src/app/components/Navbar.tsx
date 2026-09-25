import Image from "next/image";
import Link from "next/link";

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

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold text-black"
          >
            PLAN 0
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-bold text-white"
          >
            SAVED 0
          </Link>
        </div>
      </div>
    </nav>
  );
}