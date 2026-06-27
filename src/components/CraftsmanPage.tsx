import { Link } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";

export interface CraftsmanTheme {
  bg: string;
  fg: string;
  accent: string;
  accentFg: string;
  surface: string;
  muted: string;
  font?: string;
  display?: string;
  radius?: string;
}

export interface CraftsmanPageProps {
  theme: CraftsmanTheme;
  brand: string;
  tagline: string;
  owner: string;
  yearsExperience: number;
  hero: { eyebrow: string; title: string; description: string };
  services: { title: string; description: string }[];
  highlights: { label: string; value: string }[];
  testimonial: { quote: string; author: string };
  contact: { email: string; phone: string; address: string; hours: string };
  footerNote?: string;
  layout?: "classic" | "split" | "editorial" | "brutalist" | "dark-grid" | "warm-cards" | "magazine" | "spa" | "terminal" | "minimal";
}

export function CraftsmanPage(props: CraftsmanPageProps) {
  const { theme, brand, tagline, owner, yearsExperience, hero, services, highlights, testimonial, contact, footerNote, layout = "classic" } = props;
  const style = {
    "--c-bg": theme.bg,
    "--c-fg": theme.fg,
    "--c-accent": theme.accent,
    "--c-accent-fg": theme.accentFg,
    "--c-surface": theme.surface,
    "--c-muted": theme.muted,
    "--c-radius": theme.radius ?? "12px",
    fontFamily: theme.font ?? "system-ui, -apple-system, sans-serif",
    background: theme.bg,
    color: theme.fg,
    minHeight: "100vh",
  } as CSSProperties;

  const displayFont = theme.display ?? theme.font ?? "system-ui";

  return (
    <div style={style}>
      <header style={{ borderBottom: `1px solid ${theme.muted}`, padding: "20px 24px" }}>
        <div style={{ margin: "0 auto", maxWidth: 1100, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: displayFont, fontSize: 22, fontWeight: 700, letterSpacing: layout === "brutalist" ? "-0.02em" : "0" }}>{brand}</div>
            <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>{tagline}</div>
          </div>
          <nav style={{ display: "flex", gap: 20, fontSize: 14 }}>
            <a href="#services" style={{ color: theme.fg, textDecoration: "none" }}>Services</a>
            <a href="#about" style={{ color: theme.fg, textDecoration: "none" }}>About</a>
            <a href="#contact" style={{ color: theme.accent, textDecoration: "none", fontWeight: 600 }}>Contact</a>
          </nav>
        </div>
      </header>

      <Hero hero={hero} layout={layout} displayFont={displayFont} accent={theme.accent} accentFg={theme.accentFg} surface={theme.surface} />

      <section id="services" style={{ padding: "72px 24px", borderTop: `1px solid ${theme.muted}` }}>
        <div style={{ margin: "0 auto", maxWidth: 1100 }}>
          <SectionHeading layout={layout} displayFont={displayFont} eyebrow="What I do" title="Services" accent={theme.accent} />
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {services.map((s, i) => (
              <ServiceCard key={i} index={i} layout={layout} title={s.title} description={s.description} theme={theme} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: "72px 24px", background: theme.surface, borderTop: `1px solid ${theme.muted}` }}>
        <div style={{ margin: "0 auto", maxWidth: 1100, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <SectionHeading layout={layout} displayFont={displayFont} eyebrow="About" title={`Meet ${owner.split(" ")[0]}`} accent={theme.accent} />
            <p style={{ marginTop: 20, lineHeight: 1.7, fontSize: 16, opacity: 0.9 }}>
              {owner} has been working in the trade for {yearsExperience} years. Every job is handled personally — no subcontractors, no surprises. Clean work site, fair pricing, written quotes before a single tool comes out of the van.
            </p>
            <blockquote style={{ marginTop: 28, padding: "16px 20px", borderLeft: `3px solid ${theme.accent}`, fontStyle: "italic", opacity: 0.85 }}>
              "{testimonial.quote}"
              <div style={{ marginTop: 8, fontSize: 13, opacity: 0.7, fontStyle: "normal" }}>— {testimonial.author}</div>
            </blockquote>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {highlights.map((h, i) => (
              <div key={i} style={{ padding: 20, background: theme.bg, borderRadius: theme.radius ?? "12px", border: `1px solid ${theme.muted}` }}>
                <div style={{ fontFamily: displayFont, fontSize: 28, fontWeight: 700, color: theme.accent }}>{h.value}</div>
                <div style={{ marginTop: 4, fontSize: 13, opacity: 0.75 }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "72px 24px", borderTop: `1px solid ${theme.muted}` }}>
        <div style={{ margin: "0 auto", maxWidth: 1100 }}>
          <SectionHeading layout={layout} displayFont={displayFont} eyebrow="Get in touch" title="Request a quote" accent={theme.accent} />
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            <ContactRow label="Email" value={contact.email} href={`mailto:${contact.email}`} accent={theme.accent} />
            <ContactRow label="Phone" value={contact.phone} href={`tel:${contact.phone.replace(/\s/g, "")}`} accent={theme.accent} />
            <ContactRow label="Workshop" value={contact.address} accent={theme.accent} />
            <ContactRow label="Hours" value={contact.hours} accent={theme.accent} />
          </div>
          <div style={{ marginTop: 40 }}>
            <a
              href={`mailto:${contact.email}?subject=Quote%20request%20for%20${encodeURIComponent(brand)}`}
              style={{
                display: "inline-block",
                padding: "16px 32px",
                background: theme.accent,
                color: theme.accentFg,
                textDecoration: "none",
                fontWeight: 600,
                borderRadius: layout === "brutalist" ? "0" : theme.radius ?? "12px",
                border: layout === "brutalist" ? `2px solid ${theme.fg}` : "none",
                boxShadow: layout === "brutalist" ? `4px 4px 0 ${theme.fg}` : "none",
              }}
            >
              Email {owner.split(" ")[0]} →
            </a>
          </div>
        </div>
      </section>

      <footer style={{ padding: "32px 24px", borderTop: `1px solid ${theme.muted}`, fontSize: 13, opacity: 0.7 }}>
        <div style={{ margin: "0 auto", maxWidth: 1100, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>© {new Date().getFullYear()} {brand} — {owner}. {footerNote ?? "All trades fully insured."}</div>
          <Link to="/" style={{ color: theme.accent, textDecoration: "none" }}>← Back to directory</Link>
        </div>
      </footer>
    </div>
  );
}

function Hero({ hero, layout, displayFont, accent, accentFg, surface }: { hero: CraftsmanPageProps["hero"]; layout: string; displayFont: string; accent: string; accentFg: string; surface: string }) {
  return (
    <section style={{
      padding: layout === "editorial" ? "120px 24px" : "96px 24px",
      background: layout === "warm-cards" ? surface : "transparent",
      textAlign: layout === "minimal" || layout === "editorial" ? "center" : "left",
    } as CSSProperties}>
      <div style={{ margin: "0 auto", maxWidth: 1100 }}>
        <div style={{ display: "inline-block", padding: "6px 12px", background: accent, color: accentFg, fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: layout === "brutalist" ? 0 : 999 }}>
          {hero.eyebrow}
        </div>
        <h1 style={{
          fontFamily: displayFont,
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 800,
          lineHeight: 1.05,
          marginTop: 20,
          letterSpacing: "-0.02em",
          maxWidth: layout === "editorial" ? "900px" : "720px",
          marginLeft: layout === "editorial" || layout === "minimal" ? "auto" : 0,
          marginRight: layout === "editorial" || layout === "minimal" ? "auto" : 0,
        }}>
          {hero.title}
        </h1>
        <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.6, maxWidth: 620, opacity: 0.85, marginLeft: layout === "editorial" || layout === "minimal" ? "auto" : 0, marginRight: layout === "editorial" || layout === "minimal" ? "auto" : 0 }}>
          {hero.description}
        </p>
      </div>
    </section>
  );
}

function SectionHeading({ layout, displayFont, eyebrow, title, accent }: { layout: string; displayFont: string; eyebrow: string; title: string; accent: string }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: accent }}>{eyebrow}</div>
      <h2 style={{ fontFamily: displayFont, fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.01em", marginTop: 8 }}>{title}</h2>
    </div>
  );
}

function ServiceCard({ index, layout, title, description, theme }: { index: number; layout: string; title: string; description: string; theme: CraftsmanTheme }) {
  const isBrutalist = layout === "brutalist";
  return (
    <div style={{
      padding: 24,
      background: theme.surface,
      borderRadius: isBrutalist ? 0 : theme.radius ?? "12px",
      border: `1px solid ${theme.muted}`,
      boxShadow: isBrutalist ? `4px 4px 0 ${theme.fg}` : "none",
    }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: theme.accent }}>0{index + 1}</div>
      <h3 style={{ marginTop: 12, fontSize: 18, fontWeight: 700 }}>{title}</h3>
      <p style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6, opacity: 0.8 }}>{description}</p>
    </div>
  );
}

function ContactRow({ label, value, href, accent }: { label: string; value: string; href?: string; accent: string }) {
  const content: ReactNode = href ? <a href={href} style={{ color: accent, textDecoration: "none", fontWeight: 600 }}>{value}</a> : value;
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6 }}>{label}</div>
      <div style={{ marginTop: 6, fontSize: 16 }}>{content}</div>
    </div>
  );
}
