
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <span className="text-xl font-black tracking-tight text-white">
            FITLOG
          </span>

          <span className="h-5 w-px bg-white/20" />

          <span className="text-xs uppercase tracking-wider text-white/40">
            Train With Intent
          </span>
        </div>

        <p className="text-xs text-white/40">
          © 2026 FitLog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}