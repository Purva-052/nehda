import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const menuItems = [
  {
    icon: "🫓",
    name: "Bajra Rotla",
    description: "Stone-ground pearl millet flatbread cooked over open flame",
  },
  {
    icon: "🍅",
    name: "Sev Tameta Nu Shaak",
    description: "Tangy tomato curry with crisp sev — Kathiyawad's signature",
  },
  {
    icon: "🍆",
    name: "Ringan No Olo",
    description: "Flame-roasted aubergine bharta with garlic & spices",
  },
  {
    icon: "🥛",
    name: "Kadhi",
    description: "Thin, tangy buttermilk kadhi with warm tempering",
  },
  {
    icon: "🥤",
    name: "Chaas",
    description: "Ice-cold spiced buttermilk to cool every fiery bite",
  },
  {
    icon: "🍯",
    name: "Gud & Ghee",
    description: "Pure jaggery and clarified butter to sweeten the finish",
  },
];

const plans = [
  {
    key: "unlimited",
    title: "Kathiyawadi Unlimited Thali",
    titleGu: "અમર્યાદ થાળી",
    price: "₹130",
    tag: "Best Value",
    highlight: true,
    description: "Eat to your heart's content — refills on everything!",
  },
  {
    key: "limited",
    title: "Limited Meal",
    titleGu: "મર્યાદિત થાળી",
    price: "₹100",
    tag: null,
    highlight: false,
    description: "A wholesome single-serve Kathiyawadi meal.",
  },
];

export function MenuSection() {
  return (
    <section
      id="menu"
      className="py-20 md:py-24"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.14 0.04 38) 0%, oklch(0.18 0.045 36) 100%)",
      }}
      data-ocid="menu.section"
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
            ◆ Dine With Us ◆
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-100">
            Our Kathiyawadi Thali
          </h2>
          <p className="text-gujarati text-lg text-amber-300/70 mt-1">
            અમારી કાઠિયાવાડી થાળી
          </p>
          <div className="mt-3 mx-auto w-24 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-14">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative rounded-2xl p-7 text-center transition-smooth hover:scale-[1.02] cursor-default ${
                plan.highlight
                  ? "border-2 border-amber-400/70 shadow-[0_0_30px_oklch(0.72_0.14_75/0.2)]"
                  : "border border-amber-400/25"
              }`}
              style={{
                background: plan.highlight
                  ? "oklch(0.22 0.055 38)"
                  : "oklch(0.19 0.04 38)",
              }}
              data-ocid={`menu.plan_card.${i + 1}`}
            >
              {plan.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-body font-semibold rounded-full bg-amber-400 text-amber-950">
                  {plan.tag}
                </span>
              )}
              <p className="text-gujarati text-xs text-amber-400/70 mb-1">
                {plan.titleGu}
              </p>
              <h3 className="font-display text-lg font-bold text-amber-100 mb-2">
                {plan.title}
              </h3>
              <p className="font-display text-4xl font-bold text-amber-300 mb-3">
                {plan.price}
              </p>
              <p className="font-body text-xs text-amber-200/60">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Menu items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="rounded-2xl overflow-hidden border border-amber-400/20"
            style={{ background: "oklch(0.17 0.035 38)" }}
          >
            <div className="px-6 py-4 border-b border-amber-400/15">
              <p className="text-center text-amber-300/80 font-body text-sm tracking-widest uppercase">
                ◆ Every Thali Includes ◆
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-amber-400/10">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  className={`flex items-start gap-4 px-6 py-4 hover:bg-amber-400/5 transition-smooth ${
                    idx >= 2 && idx < 4
                      ? "sm:border-t sm:border-amber-400/10"
                      : ""
                  } ${idx >= 4 ? "sm:border-t sm:border-amber-400/10" : ""}`}
                  data-ocid={`menu.item.${idx + 1}`}
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-amber-100 text-sm">
                      {item.name}
                    </p>
                    <p className="font-body text-xs text-amber-300/60 leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Bottom badge */}
            <div className="px-6 py-3 border-t border-amber-400/15 text-center">
              <Badge
                variant="outline"
                className="text-amber-400 border-amber-400/40 font-body text-xs bg-amber-400/8"
              >
                🌿 All items freshly cooked daily
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
