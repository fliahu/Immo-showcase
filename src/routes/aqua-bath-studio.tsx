import { createFileRoute } from "@tanstack/react-router";
import { CraftsmanPage } from "@/components/CraftsmanPage";

export const Route = createFileRoute("/aqua-bath-studio")({
  head: () => ({
    meta: [
      { title: "Aqua Bath Studio — Bathroom renovations" },
      { name: "description", content: "Daniel Fischer designs and builds bathrooms — from leaky taps to full gut renovations." },
    ],
  }),
  component: () => (
    <CraftsmanPage
      theme={{ bg: "#e0f2fe", fg: "#0c2340", accent: "#2d8a9e", accentFg: "#ffffff", surface: "#cce6f5", muted: "#a9d2e8", display: "'Outfit', sans-serif", font: "'Figtree', sans-serif", radius: "16px" }}
      brand="Aqua Bath Studio"
      tagline="Bathrooms designed around how you actually live."
      owner="Daniel Fischer"
      yearsExperience={16}
      layout="spa"
      hero={{
        eyebrow: "Full-service bathroom renovation",
        title: "Calm rooms. Reliable plumbing. Real timelines.",
        description: "From a single tile replacement to a complete rebuild including plumbing, tiling and electrics — one contractor, one quote, one finish date you can plan around.",
      }}
      services={[
        { title: "Full bathroom renovation", description: "Design, demolition, plumbing, tiling and fit-out as one fixed-price package." },
        { title: "Walk-in shower conversion", description: "Replace old tubs with barrier-free showers — accessibility-friendly and beautiful." },
        { title: "Leak detection & repair", description: "Find the source without ripping the whole room apart. Often back together same day." },
        { title: "Tile & grout restoration", description: "Re-grout, re-seal and replace damaged tiles to refresh a bathroom without rebuilding it." },
      ]}
      highlights={[
        { label: "Bathrooms completed", value: "180+" },
        { label: "On-time delivery", value: "94%" },
        { label: "Master plumber", value: "Cert." },
        { label: "Warranty", value: "5 yr" },
      ]}
      testimonial={{ quote: "Daniel quoted two weeks and finished in eleven days. The bathroom is everything we asked for and nothing we didn't.", author: "Markus & Theresa H." }}
      contact={{ email: "hello@aquabath.example", phone: "+49 221 5544 8800", address: "Aachener Str. 215, Köln", hours: "Mon–Fri, 8:00 – 18:00" }}
    />
  ),
});
