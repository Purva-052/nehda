import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useDailyMenu } from "@/hooks/useMenuApi";
import { toDailyMenuItemView } from "@/types";
import { UtensilsCrossed } from "lucide-react";
import { motion } from "motion/react";

function formatDateGu(): string {
  return new Date().toLocaleDateString("gu-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function DailyMenuSection() {
  const { data: rawItems, isLoading } = useDailyMenu();
  const items = rawItems?.map(toDailyMenuItemView) ?? [];

  return (
    <section
      id="daily-menu"
      className="py-20 md:py-24"
      style={{ background: "oklch(var(--background))" }}
      data-ocid="daily_menu.section"
    >
      <div className="container mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary/60 font-body mb-2">
            ◆ Daily Specials ◆
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Today's Kathiyawadi Menu
          </h2>
          <p className="text-gujarati text-sm text-muted-foreground mt-1">
            {formatDateGu()}
          </p>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="max-w-2xl mx-auto min-h-[300px]">
          {isLoading ? (
            <div className="space-y-3" data-ocid="daily_menu.loading_state">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl px-5 py-4 border border-border h-[72px]"
                  style={{ background: "oklch(var(--card))" }}
                >
                  <Skeleton className="h-9 w-9 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-2/5 rounded" />
                    <Skeleton className="h-3 w-3/5 rounded" />
                  </div>
                  <Skeleton className="h-5 w-16 rounded-full flex-shrink-0" />
                </div>
              ))}
            </div>
          ) : items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16 rounded-2xl border border-border border-dashed"
              style={{ background: "oklch(var(--card))" }}
              data-ocid="daily_menu.empty_state"
            >
              <UtensilsCrossed className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="font-display text-lg font-semibold text-foreground/60 mb-1">
                Menu Coming Soon
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Check back soon for today's specials!
              </p>
            </motion.div>
          ) : (
            <div className="space-y-3">
              {items.map((item, idx) => (
                <motion.div
                  key={String(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="flex items-center gap-4 rounded-xl px-5 py-4 border border-border hover:shadow-warm transition-smooth"
                  style={{ background: "oklch(var(--card))" }}
                  data-ocid={`daily_menu.item.${idx + 1}`}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-subtle"
                    style={{ background: "oklch(var(--primary) / 0.15)" }}
                  >
                    <span className="text-base">🍽️</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-foreground text-sm truncate">
                      {item.name}
                    </p>
                    {item.description && (
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[10px] border-green-600/50 text-green-700 bg-green-500/8 font-body flex-shrink-0"
                  >
                    Fresh Today
                  </Badge>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
