import { createFileRoute } from "@tanstack/react-router";
import { CraftsmanPage } from "@/components/CraftsmanPage";

export const Route = createFileRoute("/chefs-kitchen-co")({
  head: () => ({
    meta: [
      { title: "Chef's Kitchen Co. — Restaurant-grade kitchen builds" },
      { name: "description", content: "Julia Becker designs and installs kitchens for serious home cooks and small restaurants." },
    ],
  }),
  component: () => (
    <CraftsmanPage
      theme={{ bg: "#5c2018", fg: "#f8e8c4", accent: "#e8b84a", accentFg: "#3d1410", surface: "#6b2820", muted: "#7d342a", display: "'Abril Fatface', Georgia, serif", font: "'Cabin', sans-serif", radius: "8px" }}
      brand="Chef's Kitchen Co."
      tagline="Built for people who actually cook."
      owner="Julia Becker"
      yearsExperience={13}
      layout="magazine"
      hero={{
        eyebrow: "Pro-grade kitchen fitting",
        title: "Stainless. Solid. Serious.",
        description: "I install kitchens for people who spend real time in them — heavy-duty hobs, proper ventilation, worktops you can chop on directly. Home or small restaurant.",
      }}
      services={[
        { title: "Pro-kitchen design", description: "Workflow-driven layouts based on how you actually cook, not where the plumber wants the sink." },
        { title: "Commercial-grade fit-out", description: "Gastro hobs, walk-in fridges and stainless surfaces installed to commercial code." },
        { title: "Ventilation systems", description: "Properly sized extraction for high-BTU cooking — keep your walls clean and air fresh." },
        { title: "Knife block & pantry joinery", description: "Custom built-ins for the tools and ingredients you reach for every day." },
      ]}
      highlights={[
        { label: "Kitchens built", value: "92" },
        { label: "Restaurants fitted", value: "14" },
        { label: "Years cooking herself", value: "25" },
        { label: "Gastro-certified", value: "Yes" },
      ]}
      testimonial={{ quote: "Julia asked me to cook her a meal in my old kitchen before designing the new one. That changed everything.", author: "Chef R. Ostermann" }}
      contact={{ email: "julia@chefskitchen.example", phone: "+49 30 9911 4477", address: "Kollwitzstr. 56, Berlin", hours: "Tue–Sat, 10:00 – 18:00" }}
    />
  ),
});
