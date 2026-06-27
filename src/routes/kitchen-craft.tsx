import { createFileRoute } from "@tanstack/react-router";
import { CraftsmanPage } from "@/components/CraftsmanPage";

export const Route = createFileRoute("/kitchen-craft")({
  head: () => ({
    meta: [
      { title: "KitchenCraft — Custom kitchen fitting & repair" },
      { name: "description", content: "Felix Schneider fits and repairs kitchens — cabinetry, worktops, appliances and plumbing." },
    ],
  }),
  component: () => (
    <CraftsmanPage
      theme={{ bg: "#2d2d2d", fg: "#f5f3ee", accent: "#e85d3a", accentFg: "#ffffff", surface: "#3a3a3a", muted: "#4a4a4a", display: "'Archivo Black', sans-serif", font: "'Hind', sans-serif", radius: "6px" }}
      brand="KitchenCraft"
      tagline="Kitchens built for cooks."
      owner="Felix Schneider"
      yearsExperience={20}
      layout="dark-grid"
      hero={{
        eyebrow: "Custom kitchen fitting",
        title: "A kitchen that earns its keep.",
        description: "I fit kitchens with the same care a chef gives a knife. Custom carpentry, real stone worktops, appliances plumbed to last twenty years.",
      }}
      services={[
        { title: "Full kitchen fitting", description: "Cabinets, worktops, sinks, appliances — installed by one team in one go." },
        { title: "Cabinet repair & refresh", description: "Hinges, drawer runners, door fronts and finish restoration without a full rebuild." },
        { title: "Worktop replacement", description: "Stone, solid wood and laminate worktops swapped without damaging your cabinets." },
        { title: "Appliance integration", description: "Ovens, hobs, extractors and dishwashers wired in with proper ventilation." },
      ]}
      highlights={[
        { label: "Kitchens fitted", value: "300+" },
        { label: "Years on the job", value: "20" },
        { label: "Fixed-price quotes", value: "Always" },
        { label: "Avg. fit time", value: "5 days" },
      ]}
      testimonial={{ quote: "Felix worked through a holiday weekend so we'd have a kitchen for our daughter's wedding. Unreal commitment.", author: "Familie Albrecht" }}
      contact={{ email: "felix@kitchencraft.example", phone: "+49 711 8866 5432", address: "Tübinger Str. 33, Stuttgart", hours: "Mon–Fri, 7:00 – 18:00" }}
    />
  ),
});
