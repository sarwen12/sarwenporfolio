import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Sarwen Portfolio",
    description:
      "A responsive personal portfolio website designed to showcase skills, projects, and web development work.",
    image: "/portfolio.png",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    url: "https://siap-finals-sigma.vercel.app/",
  },
  {
    id: 2,
    number: "02",
    title: "StudentPortal Page",
    description:
      "A responsive student portal website designed with a clean layout and simple user-friendly interface.",
    image: "/portal.png",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    url: "https://studentportal-pearl-seven.vercel.app/",
  },
  {
    id: 3,
    number: "03",
    title: "Slack Clone",
    description:
      "A Slack-inspired website clone that recreates the look and layout of the popular team communication platform.",
    image: "/slack.png",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    url: "https://slack-lac-one.vercel.app/",
  },
];

export function CardDataSection() {
  return (
    <Section className="py-20 md:py-28 bg-gradient-to-br from-sky-950 via-slate-950 to-cyan-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <p className="text-sky-400 text-sm font-bold uppercase tracking-[0.25em]">
              My Work
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Selected
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300">
                Projects.
              </span>
            </h2>
          </div>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg md:ml-auto">
            A collection of websites and design projects created using HTML,
            CSS, and Tailwind CSS.
          </p>
        </div>

        <div className="h-px bg-white/10 mb-10" />

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="
                group
                overflow-hidden
                bg-white/[0.04]
                backdrop-blur-sm
                border border-white/10
                rounded-2xl
                shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                hover:bg-sky-400/[0.06]
                hover:border-sky-400/40
                hover:shadow-[0_20px_60px_rgba(14,165,233,0.12)]
                transition-all duration-300
              "
            >
              {/* Project Image */}
              <CardTitle
                imageSrc={project.image}
                imageFullWidth
                className="
                  overflow-hidden
                  border-b border-white/10
                "
              >
                {project.title}
              </CardTitle>

              {/* Project Information */}
              <CardHeader className="p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-sky-400 text-xs font-bold tracking-widest">
                    PROJECT {project.number}
                  </span>

                  <span className="text-white/30 text-xs">2026</span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <CardDescription className="mt-3 text-white/50 leading-relaxed">
                  {project.description}
                </CardDescription>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-3 py-1.5
                        text-xs font-semibold
                        rounded-md
                        bg-sky-400/10
                        border border-sky-400/20
                        text-sky-400
                        transition-all
                        group-hover:bg-sky-400/15
                        group-hover:border-sky-400/30
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </CardHeader>

              {/* Button */}
              <CardFooter className="px-6 sm:px-7 pb-7 pt-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    className="
                      w-full
                      h-11
                      bg-gradient-to-r
                      from-sky-400
                      to-cyan-400
                      hover:from-sky-300
                      hover:to-cyan-300
                      text-slate-950
                      font-bold
                      border-0
                      shadow-[0_8px_25px_rgba(14,165,233,0.15)]
                      transition-all
                    "
                  >
                    View Project

                    <span className="ml-auto transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom Information */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold">
              More projects coming soon.
            </p>

            <p className="text-white/40 text-sm mt-1">
              I'm continuously learning and building new websites.
            </p>
          </div>

          <div className="text-sky-400 text-sm font-semibold">
            HTML · CSS · Tailwind CSS
          </div>
        </div>
      </div>
    </Section>
  );
}