import { Button } from "@/components/ui/button";
import { Menu, UtensilsCrossed, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Today's Menu", href: "#daily-menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_URL =
  "https://wa.me/+910000000000?text=Hello%20The%20Great%20Nehdo!%20I%20would%20like%20to%20know%20more.";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active nav section
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card border-b border-border shadow-subtle backdrop-blur-sm"
          : "bg-card/95 backdrop-blur-sm border-b border-border/50"
      }`}
      data-ocid="navbar"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
          data-ocid="navbar.logo_link"
        >
          <div className="w-9 h-9 rounded-full gradient-warm flex items-center justify-center shadow-warm">
            <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-none">
            <span className="block font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
              The Great Nehdo
            </span>
            <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">
              Kathiyawadi Restaurant
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 rounded-md text-sm font-body transition-smooth focus-brand ${
                  isActive
                    ? "text-primary font-semibold bg-primary/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                data-ocid={`navbar.${link.label.toLowerCase().replace(/['\s]+/g, "_")}_link`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm transition-smooth"
            onClick={() => handleNavClick("#daily-menu")}
            data-ocid="navbar.today_menu_button"
          >
            Today's Menu
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted/50 transition-smooth focus-brand"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          data-ocid="navbar.hamburger_button"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer — always in DOM, toggled via CSS for smooth transition */}
      <div
        className={`md:hidden bg-card border-t border-border shadow-elevated overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        data-ocid="navbar.mobile_menu"
      >
        <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-4 py-3 rounded-md text-sm transition-smooth ${
                  isActive
                    ? "text-primary font-semibold bg-primary/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                data-ocid={`navbar.mobile_${link.label.toLowerCase().replace(/['\s]+/g, "_")}_link`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 pb-1">
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => handleNavClick("#daily-menu")}
              data-ocid="navbar.mobile_today_menu_button"
            >
              Today's Menu
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-smooth animate-pulse-warm focus-brand"
      style={{ background: "#25D366" }}
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp.float_button"
    >
      <SiWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 pt-16">{children}</main>
      <WhatsAppButton />
    </div>
  );
}
