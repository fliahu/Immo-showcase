import { createFileRoute } from "@tanstack/react-router";
import { CraftsmanPage } from "@/components/CraftsmanPage";

export const Route = createFileRoute("/circuit-medic")({
  head: () => ({
    meta: [
      { title: "Circuit Medic — Fast electronics repair, walk-in" },
      { name: "description", content: "Robin Schäfer runs a walk-in repair shop for phones, laptops, tablets and small electronics." },
    ],
  }),
  component: () => (
    <CraftsmanPage
      theme={{ bg: "#ffffff", fg: "#0a0a0a", accent: "#ff5722", accentFg: "#ffffff", surface: "#f4f4f4", muted: "#dddddd", display: "'Space Grotesk', sans-serif", font: "'DM Sans', sans-serif", radius: "0px" }}
      brand="Circuit Medic"
      tagline="Walk in. Watch the repair. Walk out."
      owner="Robin Schäfer"
      yearsExperience={8}
      layout="brutalist"
      hero={{
        eyebrow: "Walk-in electronics repair",
        title: "Cracked screens fixed while you wait.",
        description: "Phones, tablets, laptops and game consoles repaired across the counter. Transparent pricing on the wall. Most jobs done in under 90 minutes.",
      }}
      services={[
        { title: "Phone screen replacement", description: "OEM and aftermarket displays for all major brands. Most models in stock." },
        { title: "Battery swap", description: "Phone, tablet and laptop batteries replaced with genuine-spec cells." },
        { title: "Water damage rescue", description: "Ultrasonic cleaning and board-level recovery. Best results within 48 hours." },
        { title: "Data recovery", description: "From bricked phones, dead SSDs and corrupted drives. No data, no charge." },
      ]}
      highlights={[
        { label: "Avg. wait time", value: "45 min" },
        { label: "Devices fixed", value: "4,200+" },
        { label: "Walk-in welcome", value: "Always" },
        { label: "Warranty on parts", value: "12 mo" },
      ]}
      testimonial={{ quote: "Took my phone in on a Saturday at 11. Had it back at 12:15, with the old screen on the counter for me to see. Brilliant.", author: "Jonas R." }}
      contact={{ email: "robin@circuitmedic.example", phone: "+49 40 6677 2200", address: "Schulterblatt 72, Hamburg", hours: "Mon–Sat, 10:00 – 20:00" }}
    />
  ),
});
