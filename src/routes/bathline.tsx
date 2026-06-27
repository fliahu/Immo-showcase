import { createFileRoute } from "@tanstack/react-router";
import { CraftsmanPage } from "@/components/CraftsmanPage";

export const Route = createFileRoute("/bathline")({
  head: () => ({
    meta: [
      { title: "Bathline Renovations — Modern bathroom builds" },
      { name: "description", content: "Anna Weber builds modern, minimal bathrooms with a focus on smart layouts and crisp finishes." },
    ],
  }),
  component: () => (
    <CraftsmanPage
      theme={{ bg: "#fafbfc", fg: "#1a1a2e", accent: "#4f46e5", accentFg: "#ffffff", surface: "#f1f3f8", muted: "#dbe0eb", display: "'Sora', sans-serif", font: "'Manrope', sans-serif", radius: "20px" }}
      brand="Bathline Renovations"
      tagline="Minimal bathrooms, maximum function."
      owner="Anna Weber"
      yearsExperience={9}
      layout="split"
      hero={{
        eyebrow: "Modern bathroom builds",
        title: "Bathrooms with the clutter designed out.",
        description: "I build clean, modern bathrooms with hidden cisterns, recessed niches and storage that actually fits what you own — not a generic vanity from a showroom.",
      }}
      services={[
        { title: "Concept & 3D mockup", description: "Walk through your finished bathroom before a single tile is ordered." },
        { title: "Compact bathroom design", description: "Smart layouts for rooms under 5 m² without sacrificing comfort or storage." },
        { title: "Premium tiling", description: "Large-format, rectified tiles installed with minimum grout lines — flat as glass." },
        { title: "Smart fixtures", description: "Thermostatic showers, sensor lighting and underfloor heating wired in cleanly." },
      ]}
      highlights={[
        { label: "Renovations / yr", value: "24" },
        { label: "Avg. duration", value: "12 days" },
        { label: "Repeat / referral", value: "82%" },
        { label: "Insured & bonded", value: "Yes" },
      ]}
      testimonial={{ quote: "Anna's 3D mockup was almost identical to the finished room. No surprises, no change orders, no chaos.", author: "Dr. Yusuf K., Frankfurt" }}
      contact={{ email: "anna@bathline.example", phone: "+49 69 4411 7720", address: "Berger Str. 88, Frankfurt", hours: "Mon–Thu, 9:00 – 17:00" }}
    />
  ),
});
