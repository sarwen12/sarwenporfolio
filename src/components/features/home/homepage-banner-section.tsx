import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

const technologies = [
  {
    name: "HTML",
    description: "Web structure",
    className: "from-orange-400/20 to-orange-500/5 border-orange-400/20",
    textClass: "text-orange-300",
  },
  {
    name: "CSS",
    description: "Web styling",
    className: "from-blue-400/20 to-blue-500/5 border-blue-400/20",
    textClass: "text-blue-300",
  },
  {
    name: "JavaScript",
    description: "Web interaction",
    className: "from-yellow-400/20 to-yellow-500/5 border-yellow-400/20",
    textClass: "text-yellow-300",
  },
  {
    name: "Java",
    description: "Application development",
    className: "from-red-400/20 to-red-500/5 border-red-400/20",
    textClass: "text-red-300",
  },
  {
    name: "C",
    description: "Programming fundamentals",
    className: "from-sky-400/20 to-sky-500/5 border-sky-400/20",
    textClass: "text-sky-300",
  },
  {
    name: "C#",
    description: "Application development",
    className: "from-purple-400/20 to-purple-500/5 border-purple-400/20",
    textClass: "text-purple-300",
  },
];

export function HomePageBannerSection() {
  return (
    <Section className="p-0 bg-gradient-to-br from-sky-950 via-slate-950 to-cyan-950">
      <div className="relative min-h-screen overflow-hidden">

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-20">

          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

            <div className="w-full lg:w-[55%]">

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                <span className="text-sm font-semibold tracking-wide text-sky-300">
                  WEB DEVELOPER
                </span>
              </div>

              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95]">
                Turning ideas
                <br />
                into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300">
                  digital
                </span>
                <br />
                experiences.
              </h1>

              <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed">
                I'm{" "}
                <span className="text-white font-semibold">
                  Sarwen Maranga
                </span>
                , a web developer who enjoys building responsive,
                modern, and user-friendly websites while continuously
                expanding my programming skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-9">

                <NavLink to="/about">
                  <Button
                    className="
                      w-full sm:w-auto
                      px-8 h-12
                      bg-gradient-to-r from-sky-400 to-cyan-400
                      hover:from-sky-300 hover:to-cyan-300
                      text-slate-950
                      font-bold
                      border-0
                      shadow-[0_10px_35px_rgba(14,165,233,0.2)]
                    "
                  >
                    Explore My Work
                  </Button>
                </NavLink>

                <NavLink to="/contact">
                  <Button
                    variant="secondary"
                    className="
                      w-full sm:w-auto
                      px-8 h-12
                      bg-white/[0.04]
                      hover:bg-sky-400/10
                      border border-white/10
                      hover:border-sky-400/40
                      text-white
                      backdrop-blur-md
                    "
                  >
                    Contact Me
                  </Button>
                </NavLink>

              </div>

            </div>

            <div className="w-full lg:w-[45%] flex justify-center">

              <div className="relative w-full max-w-[480px]">

                <div className="absolute inset-0 rounded-[2rem] bg-sky-400/10 blur-3xl" />

                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-4 shadow-[0_25px_80px_rgba(0,0,0,0.25)]">

                  <div className="rounded-[1.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950">

                    <img
                      src="/Me.jpeg"
                      alt="Sarwen Maranga"
                      className="
                        w-full
                        h-auto
                        object-contain
                        drop-shadow-[0_20px_40px_rgba(14,165,233,0.25)]
                      "
                    />

                  </div>

                  <div className="flex items-center justify-between mt-4 px-2 pb-1">

                    <div>
                      <p className="text-white font-semibold">
                        Sarwen Maranga
                      </p>
                      <p className="text-white/40 text-sm">
                        Developer
                      </p>
                    </div>

                    <div className="w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-20 lg:mt-24">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">

              <div>
                <p className="text-sky-400 text-sm font-semibold tracking-[0.2em] uppercase">
                  Technologies
                </p>

                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                  Tools I Work With
                </h2>
              </div>

              <p className="text-white/40 text-sm">
                Programming & Web Development
              </p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

              {technologies.map((technology) => (
                <div
                  key={technology.name}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    bg-gradient-to-br
                    ${technology.className}
                    p-5
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/[0.08]
                  `}
                >

                  <div className="absolute -right-8 -top-8 w-20 h-20 rounded-full bg-white/5 blur-xl" />

                  <div className="relative">

                    <h3
                      className={`font-bold text-lg ${technology.textClass}`}
                    >
                      {technology.name}
                    </h3>

                    <p className="mt-1 text-xs text-white/40">
                      {technology.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </Section>
  );
}