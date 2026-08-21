import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

export function ProjectPageBannerSection() {
  return (
    <Section className="p-0 bg-gradient-to-br from-sky-950 via-slate-950 to-cyan-950">
      <div className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden">

        <div className="w-full md:w-1/2 min-h-[500px] md:min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-sky-950 via-slate-950 to-cyan-950">

          <div className="absolute w-[520px] h-[520px] rounded-full bg-sky-400/10 blur-3xl" />

          <div className="absolute w-[420px] h-[420px] rounded-full border border-sky-400/10" />

          <div className="absolute w-[320px] h-[320px] rounded-full border border-cyan-400/10" />

          <img
            src="/Cesar.png"
            alt="Cesar"
            className="
              relative z-10
              w-full
              max-w-[520px]
              md:max-w-[620px]
              h-auto
              object-contain
              drop-shadow-[0_25px_45px_rgba(14,165,233,0.25)]
            "
          />
        </div>

        <div className="w-full md:w-1/2 min-h-[500px] md:min-h-screen flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 py-16">

          <div className="w-full max-w-2xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              WEB DEVELOPER
            </div>

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.05]">

              Hi, I'm

              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300">
                Cesar Ian
                <br />
                Bentulan
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed">
              I am a passionate Web Developer who creates modern,
              responsive, and user-friendly websites. I enjoy turning
              ideas into functional and visually appealing digital
              experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">

              <NavLink
                to="/about"
                className="w-full sm:w-auto"
              >
                <Button
                  className="
                    w-full sm:w-auto
                    px-8 h-12
                    bg-gradient-to-r
                    from-sky-400
                    to-cyan-400
                    hover:from-sky-300
                    hover:to-cyan-300
                    text-slate-950
                    font-bold
                    border-0
                    shadow-[0_10px_30px_rgba(14,165,233,0.2)]
                  "
                >
                  Get Started
                </Button>
              </NavLink>

              <NavLink
                to="/contact"
                className="w-full sm:w-auto"
              >
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
                    font-semibold
                    transition-all
                  "
                >
                  Contact Me
                </Button>
              </NavLink>

            </div>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/60 text-sm backdrop-blur-sm">
                HTML
              </span>

              <span className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/60 text-sm backdrop-blur-sm">
                CSS
              </span>

              <span className="px-4 py-2 rounded-lg bg-sky-400/10 border border-sky-400/20 text-sky-400 text-sm">
                Tailwind CSS
              </span>

            </div>

          </div>

        </div>

      </div>
    </Section>
  );
}