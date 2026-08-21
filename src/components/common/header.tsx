import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/common/section";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/project" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (isActive: boolean) => {
    if (isActive) {
      return "text-sky-400";
    }

    return "text-white/70 hover:text-sky-300";
  };

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-white/10
        bg-gradient-to-r from-sky-950 via-slate-950 to-cyan-950
        shadow-[0_4px_25px_rgba(14,165,233,0.12)]
      "
    >
      <div
        className={cn(
          "fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden z-40",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      />

      <Section
        className="py-0 bg-transparent"
        containerClassName="relative z-50 bg-transparent"
      >
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="
                text-xl font-bold
                text-white
                hover:text-sky-300
                transition-colors
              "
              onClick={() => {
                if (isMenuOpen) setIsMenuOpen(false);
              }}
            >
              Sarwen Maranga
            </NavLink>
          </div>

          <nav className="hidden md:flex items-center space-x-8">

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-all duration-200",
                    getLinkClass(isActive)
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink to="/contact">
              <Button
                className="
                  bg-gradient-to-r
                  from-sky-400
                  to-cyan-400
                  hover:from-sky-300
                  hover:to-cyan-300
                  text-slate-950
                  font-bold
                  border-0
                  shadow-[0_6px_20px_rgba(14,165,233,0.18)]
                  transition-all
                "
              >
                Contact
              </Button>
            </NavLink>

          </nav>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="
                inline-flex items-center justify-center
                p-2 rounded-md
                text-white
                hover:text-sky-300
                hover:bg-sky-400/10
                transition-colors
                focus:outline-none
              "
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>
      </Section>

      <div
        className={cn(
          `
            md:hidden
            border-t border-white/10
            bg-gradient-to-b
            from-sky-950
            via-slate-950
            to-cyan-950
            transition-all duration-300 ease-in-out
            grid overflow-hidden
            absolute top-16 left-0 right-0
            border-b border-white/10
            shadow-[0_10px_30px_rgba(14,165,233,0.15)]
            z-50
          `,
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden">

          <div className="px-4 pt-3 pb-5 space-y-2 flex flex-col">

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium py-3 transition-colors",
                    getLinkClass(isActive)
                  )
                }
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-white/10">

              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className="inline-block w-full"
              >
                <Button
                  className="
                    w-full
                    bg-gradient-to-r
                    from-sky-400
                    to-cyan-400
                    hover:from-sky-300
                    hover:to-cyan-300
                    text-slate-950
                    font-bold
                    shadow-[0_6px_20px_rgba(14,165,233,0.15)]
                  "
                >
                  Contact
                </Button>
              </NavLink>

            </div>

          </div>

        </div>
      </div>

    </header>
  );
}