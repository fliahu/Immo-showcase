import { createFileRoute } from "@tanstack/react-router";
import { CraftsmanPage } from "@/components/CraftsmanPage";

export const Route = createFileRoute("/plaster-and-paint")({
  head: () => ({
    meta: [
      { title: "Plaster & Paint — Heritage wall restoration" },
      { name: "description", content: "Sofia Richter restores plaster walls and finishes them with traditional and modern paints." },
    ],
  }),
  component: () => (
    <CraftsmanPage
      theme={{ bg: "#fff8f0", fg: "#3d2817", accent: "#9b4423", accentFg: "#fff8f0", surface: "#f5ebd9", muted: "#e8d9bf", display: "'Cormorant Garamond', Georgia, serif", font: "'Karla', sans-serif", radius: "0px" }}
      brand="Plaster & Paint"
      tagline="Old walls, treated kindly."
      owner="Sofia Richter"
      yearsExperience={11}
      layout="editorial"
      hero={{
        eyebrow: "Heritage wall craft",
        title: "Lime plaster, mineral paint, patient hands.",
        description: "Restoring walls in pre-1940s buildings means knowing what's underneath. I work with breathable materials so your walls keep doing what they were designed to do.",
      }}
      services={[
        { title: "Lime plaster repair", description: "Matching profiles and textures on Altbau interiors and listed exteriors." },
        { title: "Mineral paint application", description: "Silicate and lime-wash finishes that bond chemically and last for decades." },
        { title: "Decorative stucco", description: "Cornices, ceiling roses and wall panels repaired or recreated from molds." },
        { title: "Damp wall remediation", description: "Diagnosis and breathable repair systems for rising and penetrating damp." },
      ]}
      highlights={[
        { label: "Years restoring", value: "11" },
        { label: "Listed buildings", value: "37" },
        { label: "Heritage qualified", value: "Yes" },
        { label: "Avg. project", value: "3 weeks" },
      ]}
      testimonial={{ quote: "Sofia found and fixed the actual cause of our recurring stains. Three previous painters just covered them up.", author: "Familie Wegener, Leipzig" }}
      contact={{ email: "sofia@plasterandpaint.example", phone: "+49 341 6677 9012", address: "Karl-Heine-Str. 41, Leipzig", hours: "By appointment" }}
    />
  ),
});
