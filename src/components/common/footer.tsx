import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer
      className="
        mt-auto
        border-t border-white/10
        bg-gradient-to-r
        from-sky-950
        via-slate-950
        to-cyan-950
        shadow-[0_-4px_25px_rgba(14,165,233,0.12)]
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          <p className="text-sm text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-sky-300 font-semibold">
              Sarwen Maranga
            </span>
            . All rights reserved.
          </p>

          <nav className="flex items-center space-x-6">

            <NavLink
              to="/"
              className="text-sm text-white/60 hover:text-sky-300 transition-colors"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm text-white/60 hover:text-sky-300 transition-colors"
            >
              About
            </NavLink>

            <NavLink
              to="/project"
              className="text-sm text-white/60 hover:text-sky-300 transition-colors"
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className="text-sm text-white/60 hover:text-sky-300 transition-colors"
            >
              Contact
            </NavLink>

          </nav>

        </div>

        <div className="mt-6 pt-5 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">
            HTML · CSS · Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}