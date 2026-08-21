import { Section } from "@/components/common/section";

export function AboutPageBannerSection() {
  const skills = [
    {
      name: "HTML",
      description: "Used to build the basic structure of websites.",
      symbol: "</>",
    },
    {
      name: "CSS",
      description: "Used to style websites and make them responsive.",
      symbol: "#",
    },
    {
      name: "Tailwind CSS",
      description: "Used to create modern designs with utility classes.",
      symbol: "TW",
    },
  ];

  return (
    <Section className="py-20 md:py-28 bg-gradient-to-br from-sky-950 via-slate-950 to-cyan-950">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-end">

          <div>
            <span className="text-sky-400 text-sm font-bold tracking-[0.25em] uppercase">
              About Sarwen
            </span>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none">
              Building the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300">
                Web.
              </span>
            </h1>
          </div>

          <div>
            <p className="text-white/70 text-lg leading-relaxed">
              I'm Sarwen Maranga, a web developer who creates simple,
              responsive, and user-friendly websites.
            </p>
          </div>

        </div>

        <div className="w-full h-px bg-white/10 my-16" />

        <div className="grid md:grid-cols-3 gap-8 mb-20">

          <div className="border-l-2 border-sky-400 pl-6">
            <p className="text-4xl font-black text-white">01</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-white/40">
              Focus
            </p>
            <p className="mt-3 text-white/70">
              Responsive Web Design
            </p>
          </div>

          <div className="border-l-2 border-sky-400 pl-6">
            <p className="text-4xl font-black text-white">02</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-white/40">
              Approach
            </p>
            <p className="mt-3 text-white/70">
              Simple & User Friendly
            </p>
          </div>

          <div className="border-l-2 border-sky-400 pl-6">
            <p className="text-4xl font-black text-white">03</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-white/40">
              Goal
            </p>
            <p className="mt-3 text-white/70">
              Better Web Experiences
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">

          <div>
            <p className="text-sky-400 font-semibold mb-4">
              01 / WHO I AM
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Learning, creating,
              <br />
              and improving.
            </h2>
          </div>

          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              I enjoy creating clean and simple websites that are easy to use.
            </p>

            <p>
              I work with HTML, CSS, and Tailwind CSS to build responsive
              websites for desktop and mobile.
            </p>

            <p>
              I continue learning and improving with every project I create.
            </p>
          </div>

        </div>

        <div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

            <div>
              <p className="text-sky-400 font-semibold mb-2">
                02 / TECHNOLOGIES
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                What I Work With
              </h2>
            </div>

            <p className="text-white/40 text-sm">
              My current skills
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="
                  group relative
                  bg-white/[0.04]
                  border border-white/10
                  rounded-2xl
                  p-7
                  backdrop-blur-sm
                  hover:bg-sky-400/[0.08]
                  hover:border-sky-400/50
                  transition-all duration-300
                "
              >

                <span className="absolute top-5 right-6 text-xs text-white/30">
                  0{index + 1}
                </span>

                <div
                  className="
                    w-14 h-14
                    flex items-center justify-center
                    rounded-xl
                    bg-sky-400/10
                    border border-sky-400/20
                    text-sky-400
                    font-bold text-lg
                    group-hover:bg-gradient-to-br
                    group-hover:from-sky-400
                    group-hover:to-cyan-400
                    group-hover:text-white
                    transition-all
                  "
                >
                  {skill.symbol}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {skill.name}
                </h3>

                <p className="mt-3 text-white/50 leading-relaxed">
                  {skill.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="max-w-3xl text-2xl sm:text-3xl font-semibold text-white leading-relaxed">
            "I believe good websites should be
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">
              {" "}simple, responsive,
            </span>
            {" "}and easy to use."
          </p>
        </div>

      </div>
    </Section>
  );
}