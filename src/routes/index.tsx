import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Craftsman Directory — Trusted Local Pros" },
      { name: "description", content: "Browse ten independent craftsmen for flat, wall, bathroom, kitchen and electronics repair." },
    ],
  }),
  component: Directory,
});

const sites = [
  { slug: "flatfix-pro", name: "FlatFix Pro", trade: "Flat Repair", owner: "Marco Bauer", bg: "#f4ede4", fg: "#2a1810", accent: "#c75d2c" },
  { slug: "smooth-surfaces", name: "Smooth Surfaces", trade: "Flat Repair", owner: "Lena Hoffmann", bg: "#0f1419", fg: "#f0ebe0", accent: "#d4a574" },
  { slug: "wallworks", name: "WallWorks", trade: "Wall Repair", owner: "Tobias Krüger", bg: "#1a3c2a", fg: "#f5f0e8", accent: "#a8c0a0" },
  { slug: "plaster-and-paint", name: "Plaster & Paint", trade: "Wall Repair", owner: "Sofia Richter", bg: "#fff8f0", fg: "#3d2817", accent: "#9b4423" },
  { slug: "aqua-bath-studio", name: "Aqua Bath Studio", trade: "Bathroom Renovation", owner: "Daniel Fischer", bg: "#e0f2fe", fg: "#0c2340", accent: "#2d8a9e" },
  { slug: "bathline", name: "Bathline Renovations", trade: "Bathroom Renovation", owner: "Anna Weber", bg: "#fafbfc", fg: "#1a1a2e", accent: "#4f46e5" },
  { slug: "kitchen-craft", name: "KitchenCraft", trade: "Kitchen Fitting", owner: "Felix Schneider", bg: "#2d2d2d", fg: "#f5f3ee", accent: "#e85d3a" },
  { slug: "chefs-kitchen-co", name: "Chef's Kitchen Co.", trade: "Kitchen Fitting", owner: "Julia Becker", bg: "#5c2018", fg: "#f8e8c4", accent: "#e8b84a" },
  { slug: "voltworks", name: "VoltWorks", trade: "Electronics Repair", owner: "Matthias Köhler", bg: "#0a0a1a", fg: "#e8f0f8", accent: "#73ffb8" },
  { slug: "circuit-medic", name: "Circuit Medic", trade: "Electronics Repair", owner: "Robin Schäfer", bg: "#ffffff", fg: "#0a0a0a", accent: "#ff5722" },
];

function Directory() {
  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight">Craftsman Directory</h1>
        <p className="mt-3 text-muted-foreground">Ten independent specialists. Pick a trade, browse the page, get in touch.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((s) => (
            <Link
              key={s.slug}
              to={`/${s.slug}` as string}
              className="group block rounded-xl border p-5 transition-all hover:shadow-lg"
              style={{ background: s.bg, color: s.fg, borderColor: s.accent }}
            >
              <div className="text-xs uppercase tracking-widest opacity-70">{s.trade}</div>
              <div className="mt-2 text-xl font-semibold">{s.name}</div>
              <div className="mt-1 text-sm opacity-80">{s.owner}</div>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: s.accent }}>
                Visit site →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
