import { ClipboardList, Search, Truck } from "lucide-react";
import type { ProcessStep } from "@/types/content";

export const howItWorksLabel = "How it works";
export const howItWorksHeading = "Three steps from enquiry to delivery.";
export const howItWorksSub =
  "No account to open and no minimum to clear before you can ask. Start with a message.";

export const howItWorksSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Tell us what you need",
    description:
      "Send us the product name, the application, or simply the problem you are trying to solve. A rough description is enough to start.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "We source and confirm",
    description:
      "We match your requirement to the right product, confirm availability from manufacturers with decades of experience, and send you the pricing.",
    icon: Search,
  },
  {
    step: "03",
    title: "You receive the product",
    description:
      "We deliver the product with the documentation you need, and stay available for repeat orders and follow-up support.",
    icon: Truck,
  },
];

export const sourcingNote =
  "Not sure which product fits? Describe the application and we will suggest the options worth considering before you commit to anything.";
