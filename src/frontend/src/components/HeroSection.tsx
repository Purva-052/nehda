import { motion } from "motion/react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function MandalaDecor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="60"
        cy="60"
        r="55"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <circle
        cx="60"
        cy="60"
        r="42"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 4"
      />
      <circle
        cx="60"
        cy="60"
        r="28"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <circle cx="60" cy="60" r="14" stroke="currentColor" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="60"
          y1="5"
          x2="60"
          y2="18"
          stroke="currentColor"
          strokeWidth="1.5"
          transform={`rotate(${deg} 60 60)`}
        />
      ))}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => (
        <line
          key={deg}
          x1="60"
          y1="20"
          x2="60"
          y2="29"
          stroke="currentColor"
          strokeWidth="0.8"
          transform={`rotate(${deg} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="5" fill="currentColor" />
    </svg>
  );
}

function ClayPotIcon() {
  return (
    <svg
      viewBox="0 0 60 80"
      className="w-12 h-16"
      aria-hidden="true"
      fill="none"
    >
      <ellipse
        cx="30"
        cy="65"
        rx="18"
        ry="5"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M18 30 Q10 40 12 55 Q15 68 30 68 Q45 68 48 55 Q50 40 42 30Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M20 28 Q22 20 30 18 Q38 20 40 28"
        fill="currentColor"
        opacity="0.8"
      />
      <ellipse
        cx="30"
        cy="28"
        rx="10"
        ry="4"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M26 18 Q28 10 30 8 Q32 10 34 18"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, oklch(0.28 0.07 38) 0%, oklch(0.22 0.065 35) 45%, oklch(0.14 0.04 40) 100%)",
      }}
      data-ocid="hero.section"
    >
      {/* Decorative top geometric border */}
      <div className="absolute top-16 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute top-[68px] left-0 right-0 text-center text-[9px] tracking-[0.5em] text-amber-400/30 pointer-events-none select-none">
        ◆ ❈ ◆ ❈ ◆ ❈ ◆ ❈ ◆ ❈ ◆ ❈ ◆ ❈ ◆
      </div>

      {/* Background mandala decor */}
      <MandalaDecor className="absolute left-[-80px] top-[15%] w-[300px] h-[300px] text-amber-400/10 rotate-12" />
      <MandalaDecor className="absolute right-[-60px] bottom-[15%] w-[240px] h-[240px] text-amber-400/8 -rotate-6" />
      <MandalaDecor className="absolute left-1/2 -translate-x-1/2 top-[8%] w-[160px] h-[160px] text-amber-300/6" />

      {/* Hero image (full-bg overlay) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-kathiyawadi.dim_1400x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      {/* Dark gradient overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.04 38 / 0.7) 0%, oklch(0.16 0.05 37 / 0.5) 40%, oklch(0.12 0.04 38 / 0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-5 flex flex-col items-center text-center gap-6 py-20">
        {/* Floating clay pot */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-8, 0, -8] }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="text-amber-400/70 mb-2"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        >
          <ClayPotIcon />
        </motion.div>

        {/* Restaurant brand name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-amber-300/80 text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-1">
            Founded by Dilip Lamka
          </p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-amber-100 tracking-tight leading-tight">
            The Great Nehdo
          </h1>
          <p className="text-amber-300/70 text-sm tracking-widest uppercase font-body mt-1">
            Kathiyawadi Restaurant · Ahmedabad
          </p>
        </motion.div>

        {/* Motif divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-40 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
        />

        {/* Gujarati tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-gujarati text-3xl md:text-4xl lg:text-5xl font-bold text-amber-50 leading-snug max-w-2xl"
        >
          સાચો કાઠિયાવાડી સ્વાદ,
          <br />
          ઘર જેવી લાગણી
        </motion.h2>

        {/* English sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-amber-200/80 text-base md:text-lg font-body max-w-lg leading-relaxed"
        >
          Authentic Kathiyawadi Food at Just ₹100–₹130
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 mt-2"
        >
          <button
            type="button"
            onClick={() => scrollTo("menu")}
            className="px-7 py-3 rounded-full font-body font-semibold text-sm text-amber-950 bg-amber-400 hover:bg-amber-300 shadow-elevated transition-smooth focus-brand"
            data-ocid="hero.view_menu_button"
          >
            View Menu
          </button>
          <button
            type="button"
            onClick={() => scrollTo("daily-menu")}
            className="px-7 py-3 rounded-full font-body font-semibold text-sm text-amber-200 border border-amber-400/60 hover:bg-amber-400/15 transition-smooth focus-brand"
            data-ocid="hero.today_menu_button"
          >
            Today's Menu
          </button>
        </motion.div>

        {/* Price chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-3 mt-1"
        >
          <span className="text-xs bg-amber-400/20 border border-amber-400/30 text-amber-200 px-3 py-1 rounded-full font-body">
            Unlimited Thali ₹130
          </span>
          <span className="text-amber-400/40 text-xs">|</span>
          <span className="text-xs bg-amber-400/10 border border-amber-400/20 text-amber-300/80 px-3 py-1 rounded-full font-body">
            Limited Meal ₹100
          </span>
        </motion.div>
      </div>

      {/* Bottom geometric border */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-[3px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="text-center text-[9px] tracking-[0.5em] text-amber-400/25 py-1 select-none">
          ◆ ❈ ◆ ❈ ◆ ❈ ◆ ❈ ◆ ❈ ◆ ❈ ◆ ❈ ◆
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        aria-hidden="true"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-amber-400/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
