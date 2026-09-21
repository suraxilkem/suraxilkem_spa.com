export interface CatalogProduct {
  name: string;
  description: string;
}

export interface CatalogGroup {
  name: string;
  items: CatalogProduct[];
}

export interface CatalogTab {
  id: string;
  label: string;
  intro: string;
  groups: CatalogGroup[];
}

const freshenerDesc = "Concentrated, water-soluble room freshener.";

export const catalogTabs: CatalogTab[] = [
  {
    id: "water",
    label: "Water Treatment",
    intro:
      "Treatment chemicals for cooling towers, chillers, boilers and RO plants, to keep scale, corrosion and microbial growth in check.",
    groups: [
      {
        name: "Cooling tower water treatment",
        items: [
          { name: "SRX Org", description: "Scale and corrosion inhibitor for cooling towers." },
          { name: "SRX Algicide Plus", description: "Non-oxidising biocide for cooling towers." },
          { name: "SRX Algicide Extra", description: "Oxidising biocide for cooling towers." },
          { name: "SRX Biosh", description: "Heavy-duty non-oxidising biocide." },
        ],
      },
      {
        name: "Chiller water treatment",
        items: [
          {
            name: "SRX Safechill",
            description: "Scale and corrosion inhibitor for closed-loop chilled water systems.",
          },
          {
            name: "SRX Biochill",
            description: "Broad-spectrum biocide with anti-freeze for chilled water systems.",
          },
        ],
      },
      {
        name: "Boiler water treatment",
        items: [
          { name: "SRX Inhibit", description: "Scale and corrosion inhibitor for closed-loop boiler systems." },
          { name: "SRX Scav", description: "Oxygen scavenger for boiler systems." },
          { name: "SRX pH+ Extra", description: "pH booster for boiler systems." },
        ],
      },
      {
        name: "HVAC pre-treatment cleaning",
        items: [
          { name: "SRX Passchill", description: "Flushing compound for closed-loop systems." },
          { name: "SRX Biodis", description: "Flushing compound for open re-circulating systems and pipes." },
          { name: "SRX Disin RTU", description: "Ready-to-use oxidising biocide for flushing open systems." },
          { name: "SRX Passivator", description: "Flushing compound for open-loop re-circulating systems." },
          { name: "SRX Quats", description: "Non-oxidising biocide for flushing re-circulating systems." },
        ],
      },
      {
        name: "Effluent water treatment",
        items: [
          { name: "SRX CG", description: "Specially formulated coagulant." },
          { name: "SRX ABR 40", description: "Effective, economical flocculant." },
          { name: "SRX RC", description: "New-generation decolorant." },
          { name: "SRX Solidzyme 25", description: "New-generation MLSS developer." },
        ],
      },
      {
        name: "Swimming pools",
        items: [
          { name: "SRX Flocculant", description: "New-generation flocculant for swimming pools." },
          { name: "SRX Algicide Plus", description: "Algae control agent for swimming pools." },
          { name: "SRX pH Plus", description: "Granulated compound for raising pool pH." },
          { name: "SRX pH Minus", description: "Granulated compound for lowering pool pH." },
        ],
      },
      {
        name: "R.O. water",
        items: [
          { name: "SRX Noscal 2-in-1", description: "Speciality antiscalant for reverse osmosis plants." },
          { name: "SRX Dechlor", description: "Fast-acting de-chlorinating chemical for RO systems." },
        ],
      },
      {
        name: "Special purpose",
        items: [
          { name: "SRX Redsilc 26", description: "Instant silica remover." },
          { name: "SRX Redfer", description: "Instant iron remover." },
          { name: "SRX Soft 23", description: "Patented industrial water softener." },
        ],
      },
    ],
  },
  {
    id: "wastewater",
    label: "Wastewater Treatment",
    intro:
      "The same effluent chemistry as the water treatment line, for teams focused on discharge quality and compliance.",
    groups: [
      {
        name: "Coagulation and flocculation",
        items: [
          { name: "SRX CG", description: "Specially formulated coagulant for effluent streams." },
          { name: "SRX ABR 40", description: "Effective, economical flocculant." },
        ],
      },
      {
        name: "Colour and biology",
        items: [
          { name: "SRX RC", description: "New-generation decolorant." },
          { name: "SRX Solidzyme 25", description: "New-generation and highly effective MLSS developer." },
        ],
      },
    ],
  },
  {
    id: "specialty",
    label: "Specialty Maintenance",
    intro:
      "A working shelf for facilities teams — de-greasers, disinfectants, drain care and HVAC cleaning, built for real-world maintenance schedules.",
    groups: [
      {
        name: "De-greasers",
        items: [
          { name: "SRX Clean 909", description: "Non-silicated heavy-duty cleaner and de-greaser." },
          { name: "SRX LC 007", description: "Heavy-duty, water-soluble solvent de-greaser." },
          { name: "SRX Neutraclean 001", description: "Neutral pH cleaner and de-greaser for daily use." },
        ],
      },
      {
        name: "Disinfectant cleaners",
        items: [
          { name: "SRX Disin 3-in-1", description: "Broad-spectrum bactericide, fungicide and virucide." },
          { name: "SRX Virdis 23", description: "Cresol-based disinfectant cleaner." },
          { name: "SRX Microsanitz", description: "Heavy-duty disinfectant cleaner for high-touch areas." },
        ],
      },
      {
        name: "Drain maintenance",
        items: [
          { name: "SRX Thermodrain", description: "Heavy-duty drain block remover." },
          { name: "SRX Oxydrain", description: "Thermo-chemical drain cleaner." },
          { name: "SRX Zymess 23", description: "Enzyme-based waste and grease digester." },
        ],
      },
      {
        name: "HVAC cleaning",
        items: [
          { name: "SRX Fin 707", description: "Non-acid coil cleaner and brightener." },
          { name: "SRX Desc 999", description: "Inhibited acidic cleaner for de-scaling." },
          { name: "SRX Disin 3-in-1", description: "Broad-spectrum bactericide and fungicide." },
        ],
      },
      {
        name: "Personal care",
        items: [
          { name: "SRX Safehands", description: "Hand wash fortified with natural aloe vera." },
          { name: "SRX SW 2-in-1", description: "Concentrated liquid skin cleaner and conditioner." },
        ],
      },
      {
        name: "Solvent de-greasers",
        items: [
          { name: "SRX Elec 74", description: "Industrial-grade solvent de-greaser." },
          { name: "SRX Elec 74 SP", description: "Water-miscible industrial solvent de-greaser." },
          { name: "SRX Solvoclean 005", description: "Deep-cleaning solvent de-greaser with surfactants." },
        ],
      },
      {
        name: "Aerosols",
        items: [
          { name: "SRX Moistfree 75", description: "De-moisturiser for electrical components." },
          { name: "SRX Rustbrek 18", description: "Release agent for rusted nuts and bolts." },
          { name: "SRX Finklenz", description: "Rinse-free spray-on coil cleaner." },
          { name: "SRX Surfdis 03", description: "One-step cleaning, disinfecting and de-odorizing spray." },
          { name: "SRX Gaddis 11", description: "One-step cleaning and disinfecting for gadgets." },
        ],
      },
      {
        name: "Other products",
        items: [
          { name: "SRX Brilglow 55", description: "Advanced glass cleaner." },
          { name: "SRX Desc 505 SP", description: "Specially formulated cleaner and descaler for stainless steel." },
          { name: "SRX Genclean 25", description: "Scented general-purpose cleaner concentrate." },
          { name: "SRX Glossy 1954 DW", description: "Advanced dish and kitchen surface cleaner." },
          { name: "SRX Grad 23", description: "Granular low-foaming detergent with rust inhibitor." },
          { name: "SRX Stripeez 777", description: "New-generation paint stripper." },
          { name: "SRX Toilet Cleaner", description: "Advanced toilet bowl cleaner." },
          { name: "SRX Metaclean 797", description: "Metal cleaner and conditioner." },
        ],
      },
    ],
  },
  {
    id: "housekeeping",
    label: "Housekeeping Products",
    intro: "Everyday surface, glass and washroom care, sharing the same concentrate-and-dilute approach as the industrial range.",
    groups: [
      {
        name: "Surface and glass care",
        items: [
          { name: "SRX Brilglow 55", description: "Advanced glass cleaner." },
          { name: "SRX Genclean 25", description: "Scented general-purpose cleaner concentrate." },
          { name: "SRX Glossy 1954 DW", description: "Advanced dish and kitchen surface cleaner." },
        ],
      },
      {
        name: "Washroom care",
        items: [
          { name: "SRX Toilet Cleaner", description: "Advanced toilet bowl cleaner." },
          { name: "SRX Safehands", description: "Hand wash fortified with natural aloe vera." },
        ],
      },
    ],
  },
  {
    id: "fragrances",
    label: "Fragrance Products",
    intro:
      "These water-soluble, anti-microbial fresheners dilute up to 40 parts with water, leave no residue, and contain no flammable or ODS substances — economical for continuous use across large facilities.",
    groups: [
      {
        name: "Thalam range",
        items: ["SRX Masti", "SRX Sandal", "SRX Royal", "SRX Midnight", "SRX Frag"].map((name) => ({
          name,
          description: freshenerDesc,
        })),
      },
      {
        name: "Ragam range",
        items: ["SRX Fantasy", "SRX Lavender", "SRX Lemon", "SRX Shart", "SRX Opan", "SRX Rard"].map((name) => ({
          name,
          description: freshenerDesc,
        })),
      },
      {
        name: "Pallavi range",
        items: ["SRX French Apple", "SRX Jasmine", "SRX Rose", "SRX Cool", "SRX Lavo", "SRX Romantic"].map(
          (name) => ({ name, description: freshenerDesc }),
        ),
      },
    ],
  },
];

export const catalogDefaultTab = "specialty";
export const catalogHeading = "Browse the catalog by application.";
export const catalogLabel = "The full range";
