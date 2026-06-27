import { createFileRoute } from "@tanstack/react-router";
import { CraftsmanPage } from "@/components/CraftsmanPage";

export const Route = createFileRoute("/voltworks")({
  head: () => ({
    meta: [
      { title: "VoltWorks — Electronics repair lab" },
      { name: "description", content: "Matthias Köhler repairs consumer electronics, audio gear and small appliances at component level." },
    ],
  }),
  component: () => (
    <CraftsmanPage
      theme={{ bg: "#0a0a1a", fg: "#e8f0f8", accent: "#73ffb8", accentFg: "#0a0a1a", surface: "#12122a", muted: "#1f1f3d", display: "'JetBrains Mono', monospace", font: "'Inter', sans-serif", radius: "4px" }}
      brand="VoltWorks"
      tagline="Component-level electronics repair."
      owner="Matthias Köhler"
      yearsExperience={17}
      layout="terminal"
      hero={{
        eyebrow: "Electronics repair lab",
        title: "Don't throw it out. Bring it in.",
        description: "Amps, mixers, vintage hi-fi, espresso controllers, drones. I diagnose at the board, replace the failed component, and write you a one-page report.",
      }}
      services={[
        { title: "Audio equipment", description: "Vintage receivers, tube amps, mixing desks and studio monitors restored to spec." },
        { title: "Consumer electronics", description: "TVs, monitors, game consoles, espresso machines and small kitchen appliances." },
        { title: "Board-level repair", description: "SMD rework, capacitor replacement and trace repair when the rest of the world says it's dead." },
        { title: "Diagnostic reports", description: "Honest quote before any work starts. No fix, no fee on items I can't save." },
      ]}
      highlights={[
        { label: "Repairs / yr", value: "640" },
        { label: "Success rate", value: "87%" },
        { label: "Avg. turnaround", value: "5 days" },
        { label: "Diagnostic fee", value: "€25" },
      ]}
      testimonial={{ quote: "My grandfather's reel-to-reel had been dead for 15 years. Matthias got it singing again for less than a new soundbar.", author: "Klaus W., audio collector" }}
      contact={{ email: "lab@voltworks.example", phone: "+49 351 4477 8821", address: "Louisenstr. 19, Dresden", hours: "Mon–Fri, 10:00 – 18:00" }}
    />
  ),
});
