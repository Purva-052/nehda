import { motion } from "motion/react";

const reasons = [
  {
    key: "authentic",
    emoji: "🔥",
    title: "Authentic Taste",
    titleGu: "સાચો સ્વાદ",
    description:
      "Made with traditional Kathiyawadi recipes passed down through generations — no shortcuts, no compromises.",
  },
  {
    key: "affordable",
    emoji: "₹",
    title: "Affordable Price",
    titleGu: "સસ્તી કિંમત",
    description:
      "A complete, satisfying meal for just ₹100–₹130. Eat well without breaking the bank.",
  },
  {
    key: "village",
    emoji: "🏡",
    title: "Village-Style Cooking",
    titleGu: "ગ્રામ-શૈલીની રસોઈ",
    description:
      "Cooked fresh daily with traditional Kathiyawadi recipes. Every bite tastes like a village courtyard feast.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-24"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.16 0.04 38) 0%, oklch(0.20 0.05 36) 100%)",
      }}
      data-ocid="why_us.section"
    >
      <div className="container mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-amber-400/70 font-body mb-2">
            ◆ Why The Great Nehdo ◆
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-100">
            Why Choose Us?
          </h2>
          <p className="text-gujarati text-base text-amber-300/60 mt-1">
            અમને કેમ પસંદ કરો?
          </p>
          <div className="mt-3 mx-auto w-24 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reasons.map((r, idx) => (
            <motion.div
              key={r.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.14 }}
              className="relative rounded-2xl px-6 py-8 text-center border border-amber-400/25 hover:border-amber-400/50 transition-smooth hover:shadow-[0_0_25px_oklch(0.72_0.14_75/0.15)]"
              style={{ background: "oklch(0.20 0.045 38)" }}
              data-ocid={`why_us.card.${idx + 1}`}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

              {/* Icon */}
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl shadow-warm border border-amber-400/20"
                style={{ background: "oklch(0.26 0.06 38)" }}
              >
                {r.emoji}
              </div>

              {/* Title */}
              <p className="text-gujarati text-xs text-amber-400/60 mb-1">
                {r.titleGu}
              </p>
              <h3 className="font-display text-lg font-bold text-amber-100 mb-3">
                {r.title}
              </h3>
              <p className="font-body text-sm text-amber-200/60 leading-relaxed">
                {r.description}
              </p>

              {/* Bottom corner motif */}
              <div className="absolute bottom-3 right-3 w-4 h-4 border border-amber-400/20 rotate-45" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
