import { motion } from "motion/react";

const galleryItems = [
  {
    label: "Fresh Bajra Rotla",
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.09 38), oklch(0.25 0.07 40))",
    emoji: "🫓",
  },
  {
    label: "Sev Tameta Nu Shaak",
    gradient:
      "linear-gradient(135deg, oklch(0.42 0.15 25), oklch(0.28 0.10 30))",
    emoji: "🍅",
  },
  {
    label: "Ringan No Olo",
    gradient:
      "linear-gradient(135deg, oklch(0.25 0.06 300), oklch(0.20 0.05 38))",
    emoji: "🍆",
  },
  {
    label: "Traditional Thali",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.12 75), oklch(0.32 0.08 38))",
    emoji: "🍽️",
  },
  {
    label: "Kathiyawadi Kadhi",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.14 80), oklch(0.40 0.10 40))",
    emoji: "🥛",
  },
  {
    label: "Village Kitchen Scene",
    gradient:
      "linear-gradient(135deg, oklch(0.30 0.06 40), oklch(0.20 0.04 38))",
    emoji: "🏡",
  },
  {
    label: "Gud & Ghee",
    gradient:
      "linear-gradient(135deg, oklch(0.60 0.14 75), oklch(0.38 0.09 38))",
    emoji: "🍯",
  },
  {
    label: "Fresh Chaas",
    gradient:
      "linear-gradient(135deg, oklch(0.82 0.06 80), oklch(0.50 0.08 38))",
    emoji: "🥤",
  },
  {
    label: "Founder Dilip Lamka",
    gradient:
      "linear-gradient(135deg, oklch(0.28 0.065 38), oklch(0.18 0.05 35))",
    emoji: "👤",
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 md:py-24"
      style={{ background: "oklch(var(--muted) / 0.3)" }}
      data-ocid="gallery.section"
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
          <p className="text-xs tracking-[0.3em] uppercase text-primary/60 font-body mb-2">
            ◆ Our Kitchen ◆
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            A Taste in Every Frame
          </h2>
          <p className="text-gujarati text-base text-muted-foreground mt-1">
            ગ્રામીણ રસોઈની ઝાંખી
          </p>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-default shadow-warm hover:shadow-elevated transition-smooth"
              style={{ background: item.gradient }}
              data-ocid={`gallery.item.${idx + 1}`}
            >
              {/* Decorative pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)",
                }}
              />

              {/* Emoji center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-5xl opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-smooth"
                  role="img"
                  aria-label={item.label}
                >
                  {item.emoji}
                </span>
              </div>

              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent translate-y-1 group-hover:translate-y-0 transition-smooth">
                <p className="font-display text-sm font-semibold text-white leading-tight">
                  {item.label}
                </p>
              </div>

              {/* Corner motif */}
              <div className="absolute top-3 right-3 w-6 h-6 border border-amber-400/30 rounded-sm rotate-45 opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
