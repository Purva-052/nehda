import { motion } from "motion/react";

function ClayCookingIllustration() {
  return (
    <svg
      viewBox="0 0 280 260"
      className="w-full max-w-xs mx-auto"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ground */}
      <ellipse
        cx="140"
        cy="240"
        rx="110"
        ry="12"
        fill="currentColor"
        opacity="0.1"
      />
      {/* Clay stove base */}
      <path
        d="M80 220 Q80 200 100 195 L180 195 Q200 200 200 220 L80 220Z"
        fill="currentColor"
        opacity="0.5"
      />
      <ellipse
        cx="140"
        cy="195"
        rx="40"
        ry="10"
        fill="currentColor"
        opacity="0.4"
      />
      {/* Fire */}
      <path
        d="M125 195 Q130 178 140 170 Q150 178 155 195Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M130 195 Q135 183 140 178 Q145 183 150 195Z"
        fill="currentColor"
        opacity="0.3"
      />
      {/* Large clay pot (handi) */}
      <path
        d="M108 145 Q100 165 104 185 Q112 198 140 198 Q168 198 176 185 Q180 165 172 145Z"
        fill="currentColor"
        opacity="0.65"
      />
      <ellipse
        cx="140"
        cy="145"
        rx="32"
        ry="10"
        fill="currentColor"
        opacity="0.5"
      />
      {/* Pot neck */}
      <path
        d="M122 135 Q124 128 140 125 Q156 128 158 135 L158 145 Q156 148 140 150 Q124 148 122 145Z"
        fill="currentColor"
        opacity="0.7"
      />
      {/* Steam */}
      <path
        d="M132 122 Q128 112 132 102 Q136 94 130 88"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M140 118 Q136 108 140 98 Q144 90 138 84"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d="M150 122 Q154 112 150 102 Q146 94 152 88"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Small pot */}
      <path
        d="M48 175 Q42 185 44 198 Q50 208 68 208 Q86 208 90 198 Q92 185 86 175Z"
        fill="currentColor"
        opacity="0.5"
      />
      <ellipse
        cx="67"
        cy="175"
        rx="20"
        ry="7"
        fill="currentColor"
        opacity="0.4"
      />
      {/* Ladle */}
      <line
        x1="170"
        y1="130"
        x2="210"
        y2="90"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle cx="168" cy="135" r="8" fill="currentColor" opacity="0.4" />
      {/* Mustard flowers (decoration) */}
      {[30, 240, 60, 215].map((x, i) =>
        i % 2 === 0 ? (
          <circle
            key={x}
            cx={x}
            cy={i < 2 ? 50 : 30}
            r="4"
            fill="currentColor"
            opacity="0.3"
          />
        ) : (
          <circle
            key={x}
            cx={x}
            cy={i < 2 ? 50 : 30}
            r="3"
            fill="currentColor"
            opacity="0.25"
          />
        ),
      )}
      {/* Geometric border motifs */}
      <rect
        x="10"
        y="10"
        width="260"
        height="240"
        rx="8"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="6 4"
        opacity="0.15"
      />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-24"
      style={{ background: "oklch(var(--muted) / 0.35)" }}
      data-ocid="about.section"
    >
      <div className="container mx-auto px-5">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary/70 font-body mb-2">
            ◆ Our Heritage ◆
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Story
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="font-body text-base md:text-lg text-foreground/85 leading-relaxed">
              The Great Nehdo is more than a meal — it's a warm memory of
              village life. Founded with deep love for the food traditions of
              Saurashtra, every dish we serve carries the soul of Kathiyawad in
              every bite.
            </p>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              Inspired by the cooking traditions celebrated around the sacred
              town of Salangpur — home to the revered Kashtabhanjandev Hanumanji
              Mandir — our kitchen draws on generations of rural wisdom:
              slow-cooked dals, freshly made rotlas, and the tangy magic of sev
              tameta.
            </p>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              We bring that authenticity to Ahmedabad, so you never have to
              travel far for a meal that feels exactly like home.
            </p>

            {/* Founder credit */}
            <div className="inline-flex items-center gap-3 pt-3 border-t border-border">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-primary-foreground text-sm shadow-warm"
                style={{ background: "oklch(var(--primary))" }}
              >
                DL
              </div>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">
                  Dilip Lamka
                </p>
                <p className="text-xs text-muted-foreground font-body">
                  Founder
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: decorative illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex justify-center"
            style={{ color: "oklch(var(--primary))" }}
          >
            <div
              className="rounded-2xl p-6 shadow-warm border border-border w-full max-w-xs"
              style={{ background: "oklch(var(--card))" }}
            >
              <ClayCookingIllustration />
              <p className="text-center text-xs text-muted-foreground font-body mt-2 tracking-wide">
                ∼ Authentic Kathiyawadi flavours ∼
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
