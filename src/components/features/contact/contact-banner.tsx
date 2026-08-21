import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

export function ContactPageBannerSection() {
  return (
    <Section className="min-h-screen bg-gradient-to-br from-sky-950 via-slate-950 to-cyan-950">
      <div className="relative min-h-screen overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20 md:py-28">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />

              <span className="text-sm font-semibold tracking-wide text-sky-300">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95]">
              Let's build
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300">
                something.
              </span>
            </h1>

            <p className="mt-7 text-base sm:text-lg text-white/60 leading-relaxed">
              Have a project idea or want to work together? Feel free to
              send me a message. I'm always open to new opportunities
              and interesting projects.
            </p>

          </div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 mt-16">

            {/* Contact Information */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-7 sm:p-8">

              <p className="text-sky-400 text-sm font-bold tracking-[0.2em] uppercase">
                Contact
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
                Let's connect.
              </h2>

              <p className="mt-4 text-white/50 leading-relaxed">
                I'm interested in web development projects, collaborations,
                and opportunities to improve my skills.
              </p>

              <div className="mt-10 space-y-6">

                {/* Email */}
                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-sky-400/10 border border-sky-400/20 text-sky-400">
                    @
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/30">
                      Email
                    </p>

                    <p className="mt-1 text-white font-medium">
                      your@email.com
                    </p>
                  </div>

                </div>

                {/* Location */}
                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-sky-400/10 border border-sky-400/20 text-sky-400">
                    ●
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/30">
                      Location
                    </p>

                    <p className="mt-1 text-white font-medium">
                      Philippines
                    </p>
                  </div>

                </div>

                {/* Availability */}
                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-sky-400/10 border border-sky-400/20 text-sky-400">
                    ✓
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/30">
                      Availability
                    </p>

                    <p className="mt-1 text-white font-medium">
                      Available for projects
                    </p>
                  </div>

                </div>

              </div>

              {/* Bottom Quote */}
              <div className="mt-10 pt-7 border-t border-white/10">
                <p className="text-white/40 text-sm leading-relaxed">
                  "Good communication is the beginning of every great
                  project."
                </p>
              </div>

            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-7 sm:p-8">

              <div className="flex items-center justify-between gap-4 mb-8">

                <div>
                  <p className="text-sky-400 text-sm font-bold tracking-[0.2em] uppercase">
                    Message
                  </p>

                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                    Send a message
                  </h2>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs text-white/30">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  Online
                </div>

              </div>

              <form className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full
                      h-12
                      rounded-xl
                      bg-white/[0.04]
                      border border-white/10
                      px-4
                      text-white
                      placeholder:text-white/25
                      outline-none
                      transition-all
                      focus:border-sky-400/50
                      focus:bg-sky-400/[0.04]
                      focus:ring-2
                      focus:ring-sky-400/10
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="
                      w-full
                      h-12
                      rounded-xl
                      bg-white/[0.04]
                      border border-white/10
                      px-4
                      text-white
                      placeholder:text-white/25
                      outline-none
                      transition-all
                      focus:border-sky-400/50
                      focus:bg-sky-400/[0.04]
                      focus:ring-2
                      focus:ring-sky-400/10
                    "
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Project inquiry"
                    className="
                      w-full
                      h-12
                      rounded-xl
                      bg-white/[0.04]
                      border border-white/10
                      px-4
                      text-white
                      placeholder:text-white/25
                      outline-none
                      transition-all
                      focus:border-sky-400/50
                      focus:bg-sky-400/[0.04]
                      focus:ring-2
                      focus:ring-sky-400/10
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="
                      w-full
                      rounded-xl
                      bg-white/[0.04]
                      border border-white/10
                      px-4
                      py-3
                      text-white
                      placeholder:text-white/25
                      outline-none
                      resize-none
                      transition-all
                      focus:border-sky-400/50
                      focus:bg-sky-400/[0.04]
                      focus:ring-2
                      focus:ring-sky-400/10
                    "
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="
                    w-full
                    h-12
                    mt-2
                    bg-gradient-to-r
                    from-sky-400
                    to-cyan-400
                    hover:from-sky-300
                    hover:to-cyan-300
                    text-slate-950
                    font-bold
                    border-0
                    shadow-[0_10px_35px_rgba(14,165,233,0.2)]
                    transition-all
                  "
                >
                  Send Message

                  <span className="ml-auto">
                    →
                  </span>
                </Button>

              </form>

            </div>

          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-white/30 text-sm">
              © 2026 Sarwen Maranga
            </p>

            <p className="text-sky-400 text-sm font-semibold">
              Web Developer
            </p>

          </div>

        </div>

      </div>
    </Section>
  );
}