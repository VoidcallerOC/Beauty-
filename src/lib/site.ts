export const site = {
  name: "Linden Nail Room",
  shortName: "Linden",
  location: "Farmington, CT",
  phone: "(860) 555-0147",
  phoneHref: "tel:+18605550147",
  tagline: "Nails done cleanly, close to home.",
};

export const nav = [
  { label: "Menu", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
  { label: "Contact", href: "/contact" },
];

export const hours = [
  ["Sunday", "Closed"],
  ["Monday", "Closed"],
  ["Tuesday", "10 to 6"],
  ["Wednesday", "10 to 6"],
  ["Thursday", "10 to 7"],
  ["Friday", "10 to 6"],
  ["Saturday", "9 to 4"],
] as const;

export type Service = {
  name: string;
  time: string;
  price: string;
  note: string;
};

export const menu: { group: string; items: Service[] }[] = [
  {
    group: "Hands",
    items: [
      { name: "Classic manicure", time: "45 min", price: "$35", note: "Shape, cuticle care, and a clean polish." },
      { name: "Gel manicure", time: "60 min", price: "$50", note: "Even color that stays glossy through the week." },
      { name: "Soft gel / builder", time: "75 min", price: "$65", note: "A light overlay for length and a smooth surface." },
      { name: "Express tidy", time: "25 min", price: "$22", note: "File, shape, and a quick finish when time is short." },
    ],
  },
  {
    group: "Feet",
    items: [
      { name: "Classic pedicure", time: "50 min", price: "$48", note: "Soak, tidy, and a polish you can walk out in." },
      { name: "Gel pedicure", time: "65 min", price: "$62", note: "The same care, with a finish that holds." },
    ],
  },
  {
    group: "Art",
    items: [
      { name: "Simple accent", time: "+15 min", price: "+$10", note: "One or two nails, a line, or a small motif." },
      { name: "Full art", time: "+30 min", price: "+$25", note: "A designed set across the hand." },
      { name: "Charm or foil", time: "+10 min", price: "+$8", note: "A small metal or foil detail on a finished nail." },
    ],
  },
  {
    group: "Add ons",
    items: [
      { name: "Removal", time: "15 min", price: "$12", note: "Needed before a fresh gel set." },
      { name: "Shape change", time: "10 min", price: "$8", note: "A new silhouette without a full service." },
      { name: "Nail repair", time: "10 min", price: "$8", note: "One nail, patched so the set still reads even." },
      { name: "Paraffin", time: "10 min", price: "$12", note: "A warm finish for dry hands or feet." },
    ],
  },
  {
    group: "Kids",
    items: [
      { name: "Kids polish", time: "25 min", price: "$18", note: "12 and under. Simple color, no long art." },
    ],
  },
];

export const previewRows = [
  menu[0].items[0],
  menu[0].items[1],
  menu[0].items[2],
  menu[1].items[0],
  menu[2].items[1],
];
