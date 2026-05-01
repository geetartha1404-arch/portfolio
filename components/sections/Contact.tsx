"use client";

import { useState } from "react";
import { personalInfo, socialLinks } from "@/lib/data";
import { Link2, Mail, Send, Loader2 } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

const iconMap: Record<string, React.ElementType> = {
  Linkedin: Link2,
  Mail,
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let&apos;s work together
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Whether you have a project in mind, a question about my work, or
              just want to connect — my inbox is open.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: info */}
          <FadeUp delay={0.1} className="space-y-8">
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-primary hover:underline text-sm"
              >
                {personalInfo.email}
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">
                {personalInfo.location}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 p-5 text-sm text-muted-foreground leading-relaxed">
              Currently open to <strong className="text-foreground">internships</strong>,{" "}
              <strong className="text-foreground">freelance projects</strong>, and{" "}
              <strong className="text-foreground">full-time roles</strong> in AI
              automation, healthtech, and digital marketing.
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-label="Contact form"
            >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium mb-1.5"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, name: e.target.value }))
                }
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium mb-1.5"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, email: e.target.value }))
                }
                placeholder="your@email.com"
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="Tell me about your project or opportunity..."
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition placeholder:text-muted-foreground resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="inline-flex items-center gap-2 w-full justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : status === "sent" ? (
                "Message sent ✓"
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-xs text-destructive text-center">
                Something went wrong. Please email directly at{" "}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="underline"
                >
                  {personalInfo.email}
                </a>
              </p>
            )}
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
