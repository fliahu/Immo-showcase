import { createFileRoute } from "@tanstack/react-router";
import { CraftsmanPage } from "@/components/CraftsmanPage";

export const Route = createFileRoute("/smooth-surfaces")({
  head: () => ({
    meta: [
      { title: "Smooth Surfaces — Premium flat-surface restoration" },
      { name: "description", content: "Lena Hoffmann restores flat surfaces — floors, countertops, tabletops — with mirror-grade finishes." },
    ],
  }),
  component: () => (
    <CraftsmanPage
      theme={{ bg: "#0f1419", fg: "#f0ebe0", accent: "#d4a574", accentFg: "#0f1419", surface: "#1a2028", muted: "#2a3038", display: "'Playfair Display', Georgia, serif", font: "'Inter', sans-serif", radius: "2px" }}
      brand="Smooth Surfaces"
      tagline="Restoration with a mirror finish."
      owner="Lena Hoffmann"
      yearsExperience={14}
      layout="editorial"
      hero={{
        eyebrow: "Flat-surface specialist",
        title: "If it should be perfectly flat, it will be.",
        description: "Sanded, leveled, sealed. From parquet floors to walnut dining tables — the surfaces in your home deserve more than a quick polish.",
      }}
      services={[
        { title: "Floor leveling", description: "Self-leveling compound and machine sanding for parquet, engineered wood and concrete." },
        { title: "Countertop refinish", description: "Stone, solid surface and butcher block returned to factory smoothness." },
        { title: "Tabletop restoration", description: "Antique and modern tabletops, French-polished or matte oiled to your spec." },
        { title: "Defect repair", description: "Burn marks, deep scratches and water rings made invisible — guaranteed." },
      ]}
      highlights={[
        { label: "Years restoring", value: "14" },
        { label: "Sq.m. refinished", value: "9,400" },
        { label: "Materials handled", value: "30+" },
        { label: "Warranty", value: "5 yr" },
      ]}
      testimonial={{ quote: "Our 1920s parquet looks better than I imagined possible. Lena treats each board like it matters to her personally.", author: "Henrik & Jana M." }}
      contact={{ email: "studio@smoothsurfaces.example", phone: "+49 40 4422 8181", address: "Lagerstraße 8, Hamburg", hours: "By appointment, Tue–Sat" }}
    />
  ),
});
