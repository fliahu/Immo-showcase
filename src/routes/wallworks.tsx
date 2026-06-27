import { createFileRoute } from "@tanstack/react-router";
import { CraftsmanPage } from "@/components/CraftsmanPage";

export const Route = createFileRoute("/wallworks")({
  head: () => ({
    meta: [
      { title: "WallWorks — Honest wall repair & drywall" },
      { name: "description", content: "Tobias Krüger repairs walls, patches drywall, fixes cracks and prepares surfaces for paint." },
    ],
  }),
  component: () => (
    <CraftsmanPage
      theme={{ bg: "#1a3c2a", fg: "#f5f0e8", accent: "#a8c0a0", accentFg: "#1a3c2a", surface: "#234d36", muted: "#2d5f44", display: "'Bebas Neue', Impact, sans-serif", font: "'Barlow', sans-serif", radius: "8px" }}
      brand="WallWorks"
      tagline="Cracks closed. Walls flat. Done."
      owner="Tobias Krüger"
      yearsExperience={22}
      layout="classic"
      hero={{
        eyebrow: "Wall repair & drywall",
        title: "Your walls, made whole again.",
        description: "Two decades of patching, skimming and rebuilding. I leave a wall ready for paint — or paint it myself if you'd rather not hire twice.",
      }}
      services={[
        { title: "Drywall patching", description: "Hole repair from doorknob dings to full sheet replacement, blended invisibly." },
        { title: "Crack repair", description: "Settlement cracks tracked, taped and skimmed so they don't come back next winter." },
        { title: "Skim coating", description: "Level-5 finish on old textured walls for a smooth, modern look ready for paint." },
        { title: "Plaster restoration", description: "Lime and gypsum plaster repair on older buildings, matched to original profiles." },
      ]}
      highlights={[
        { label: "Years in the trade", value: "22" },
        { label: "Walls finished", value: "1,500+" },
        { label: "Repeat clients", value: "65%" },
        { label: "Insured up to", value: "€2M" },
      ]}
      testimonial={{ quote: "Tobias was the third drywaller we called. Wish he'd been the first — the work is invisible, which is the whole point.", author: "Architecture studio Lindberg" }}
      contact={{ email: "tobias@wallworks.example", phone: "+49 89 7733 4501", address: "Lindwurmstr. 102, München", hours: "Mon–Fri, 7:30 – 17:00" }}
    />
  ),
});
