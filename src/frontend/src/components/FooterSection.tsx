import { UtensilsCrossed } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Today's Menu", href: "#daily-menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href: string) =>
  document
    .getElementById(href.replace("#", ""))
    ?.scrollIntoView({ behavior: "smooth" });

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="pt-12 pb-6"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.13 0.04 38) 0%, oklch(0.10 0.035 38) 100%)",
      }}
      data-ocid="footer.section"
    >
      <div className="container mx-auto px-5">
        {/* Decorative top border */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mb-10" />

        {/* Main footer row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full gradient-warm flex items-center justify-center shadow-warm">
                <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-amber-100 leading-tight">
                  The Great Nehdo
                </p>
                <p className="text-gujarati text-[10px] text-amber-400/60 leading-tight">
                  કાઠિયાવાડી રેસ્ટોરન્ટ
                </p>
              </div>
            </div>
            <p className="font-body text-xs text-amber-300/50 leading-relaxed">
              Authentic Kathiyawadi flavours in the heart of Ahmedabad. A meal
              that tastes like home.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-amber-400/20 text-amber-400/60 hover:text-amber-300 hover:border-amber-400/50 transition-smooth"
                data-ocid="footer.facebook_link"
              >
                <SiFacebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-amber-400/20 text-amber-400/60 hover:text-amber-300 hover:border-amber-400/50 transition-smooth"
                data-ocid="footer.instagram_link"
              >
                <SiInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-amber-400/20 text-amber-400/60 hover:text-amber-300 hover:border-amber-400/50 transition-smooth"
                data-ocid="footer.youtube_link"
              >
                <SiYoutube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-amber-400/50 mb-4">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left font-body text-sm text-amber-300/60 hover:text-amber-200 transition-colors"
                  data-ocid={`footer.${link.label.toLowerCase().replace(/['\s]+/g, "_")}_link`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Hours & Address */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-amber-400/50 mb-4">
              Visit Us
            </p>
            <div className="space-y-2 font-body text-xs text-amber-300/60">
              <p>📍 Ahmedabad, Gujarat, India</p>
              <p>📞 +91 99999 99999</p>
              <p className="leading-relaxed">
                🕐 Mon–Sun
                <br />
                11:00 AM – 3:30 PM
                <br />
                7:00 PM – 10:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* SEO paragraph */}
        <div className="border-t border-amber-400/10 pt-6 mb-5">
          <p className="font-body text-[11px] text-amber-300/30 text-center leading-relaxed">
            Best kathiyawadi food in Ahmedabad · Authentic Gujarati thali ·
            Unlimited kathiyawadi thali Ahmedabad · Budget thali Ahmedabad ·
            Traditional Gujarati food · Kathiyawadi restaurant near me
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="font-body text-xs text-amber-300/40">
            © {new Date().getFullYear()} The Great Nehdo. Inspired by the food
            traditions of Kashtabhanjandev Hanumanji Mandir, Salangpur.
          </p>
          <p className="font-body text-[11px] text-amber-300/25">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-amber-300/50 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
