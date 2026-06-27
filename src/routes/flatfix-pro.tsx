import { createFileRoute } from "@tanstack/react-router";
import { CraftsmanPage } from "@/components/CraftsmanPage";

export const Route = createFileRoute("/flatfix-pro")({
  head: () => ({
    meta: [
      { title: "FlatFix Pro — Same-day flat tire & puncture repair" },
      { name: "description", content: "Marco Bauer fixes flats on bikes, scooters and small vehicles across the city. Workshop pickup or mobile service." },
    ],
  }),
  component: () => (
    <CraftsmanPage
      theme={{ bg: "#f4ede4", fg: "#2a1810", accent: "#c75d2c", accentFg: "#fff8f0", surface: "#ebe2d4", muted: "#d9cdb8", display: "Georgia, serif", font: "'Helvetica Neue', sans-serif", radius: "4px" }}
      brand="FlatFix Pro"
      tagline="Punctures patched. Properly."
      owner="Marco Bauer"
      yearsExperience={18}
      layout="warm-cards"
      hero={{
        eyebrow: "Mobile flat repair",
        title: "Back on the road before lunch.",
        description: "Bike tires, e-scooter tubes, wheelbarrow flats — I come to you, patch it on the spot, and only charge once you're rolling again.",
      }}
      services={[
        { title: "Bicycle tire repair", description: "Patch, plug or full tube swap with quality rubber stock — road, gravel and city tires." },
        { title: "E-scooter & e-bike", description: "Tubeless sealant top-ups and full tire replacement for all common scooter brands." },
        { title: "Mobile call-outs", description: "I drive to your home, office or stranded location within 45 minutes inside the city." },
        { title: "Tire health checks", description: "Pressure, tread and sidewall inspection so you don't get caught out twice." },
      ]}
      highlights={[
        { label: "Years on the tools", value: "18" },
        { label: "Avg. response time", value: "42 min" },
        { label: "Repairs per month", value: "230+" },
        { label: "Repeat customers", value: "78%" },
      ]}
      testimonial={{ quote: "Marco fixed two flats in my driveway in under 20 minutes. Honest pricing and a real human voice on the phone.", author: "Petra K., cyclist" }}
      contact={{ email: "marco@flatfix-pro.example", phone: "+49 30 5511 2030", address: "Boxhagener Str. 14, Berlin", hours: "Mon–Sat, 7:00 – 19:00" }}
    />
  ),
});
