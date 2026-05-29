import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_URL =
  "https://wa.me/+910000000000?text=Hello%20The%20Great%20Nehdo!%20I%27d%20like%20to%20know%20more%20about%20your%20menu.";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initForm: FormState = { name: "", email: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initForm);
    }
  };

  const handleBlur = (field: keyof FormState) => {
    if (!form[field].trim()) {
      setErrors((prev) => ({
        ...prev,
        [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
      }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-24"
      style={{ background: "oklch(var(--background))" }}
      data-ocid="contact.section"
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
            ◆ Get In Touch ◆
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Visit Us
          </h2>
          <p className="text-gujarati text-base text-muted-foreground mt-1">
            સંપર્ક કરો
          </p>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl p-6 border border-border shadow-warm"
              style={{ background: "oklch(var(--card))" }}
            >
              <h3 className="font-display text-lg font-bold text-foreground mb-5">
                Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                  data-ocid="contact.success_state"
                >
                  <p className="text-3xl mb-3">🙏</p>
                  <p className="font-display text-lg font-semibold text-foreground mb-1">
                    Thank you!
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    We'll be in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs text-primary underline font-body"
                    data-ocid="contact.send_another_button"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <Label
                      htmlFor="contact-name"
                      className="font-body text-sm text-foreground/80"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="contact-name"
                      placeholder="Dilip Lamka"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      onBlur={() => handleBlur("name")}
                      className="mt-1 font-body"
                      data-ocid="contact.name_input"
                    />
                    {errors.name && (
                      <p
                        className="text-destructive text-xs mt-1 font-body"
                        data-ocid="contact.name.field_error"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-email"
                      className="font-body text-sm text-foreground/80"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      onBlur={() => handleBlur("email")}
                      className="mt-1 font-body"
                      data-ocid="contact.email_input"
                    />
                    {errors.email && (
                      <p
                        className="text-destructive text-xs mt-1 font-body"
                        data-ocid="contact.email.field_error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-message"
                      className="font-body text-sm text-foreground/80"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="We'd love to hear from you…"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      onBlur={() => handleBlur("message")}
                      className="mt-1 font-body resize-none"
                      data-ocid="contact.message_textarea"
                    />
                    {errors.message && (
                      <p
                        className="text-destructive text-xs mt-1 font-body"
                        data-ocid="contact.message.field_error"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body"
                    data-ocid="contact.submit_button"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Info + map */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Business info */}
            <div
              className="rounded-2xl p-6 border border-border shadow-subtle"
              style={{ background: "oklch(var(--card))" }}
            >
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                The Great Nehdo
              </h3>
              <div className="space-y-3 text-sm font-body">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>+91 99999 99999 (Placeholder)</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Mon–Sun: 11:00 AM – 3:30 PM | 7:00 PM – 10:30 PM</span>
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-body font-semibold text-white transition-smooth hover:opacity-90"
                style={{ background: "#25D366" }}
                data-ocid="contact.whatsapp_button"
              >
                <SiWhatsapp className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Static map placeholder */}
            <div
              className="rounded-2xl overflow-hidden border border-border shadow-subtle"
              style={{ background: "oklch(var(--card))" }}
            >
              <div
                className="relative h-40 flex items-center justify-center"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(var(--border) / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--border) / 0.4) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  background:
                    "repeating-linear-gradient(0deg, oklch(var(--muted)/0.5), oklch(var(--muted)/0.5) 1px, oklch(var(--card)) 1px, oklch(var(--card)) 24px), repeating-linear-gradient(90deg, oklch(var(--muted)/0.5), oklch(var(--muted)/0.5) 1px, oklch(var(--card)) 1px, oklch(var(--card)) 24px)",
                }}
                data-ocid="contact.map_placeholder"
              >
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mx-auto shadow-warm mb-2">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="font-body text-sm font-semibold text-foreground">
                    The Great Nehdo
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    Ahmedabad, Gujarat
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
