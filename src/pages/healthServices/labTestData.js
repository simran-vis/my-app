export const labTestData = [
  {
    id: 1,
    name: "25-Hydroxy Vitamin D",
    description: "Measures Vitamin D levels in blood",
    tags: ["BEST SELLER", "Bone Health"],
    overview: [
      { label: "Sample", value: "Blood", icon: "TestTube2" },
      { label: "Report", value: "24 Hours", icon: "Clock" },
      { label: "Fasting", value: "Not Required", icon: "UtensilsCrossed" },
      { label: "Visit", value: "Home / Lab", icon: "Home" },
    ],
    about: {
      measured: "Vitamin D level",
      importance: "Essential for bone & immunity",
      conditions: ["Bone Pain", "Fatigue", "Weakness"],
    },
    labInfo: {
      name: "Trusted Labs",
      experience: "10+ Years Experience",
      review: "Accurate reports & timely service",
    },
    price: {
      selling: 499,
      mrp: 999,
      discount: 50,
    },
  },

  {
    id: 2,
    name: "Vitamin D Plus Profile",
    description: "Vitamin D, Calcium & Phosphorus",
    tags: ["POPULAR"],
    overview: [
      { label: "Sample", value: "Blood", icon: "TestTube2" },
      { label: "Report", value: "48 Hours", icon: "Clock" },
      { label: "Fasting", value: "Required", icon: "UtensilsCrossed" },
      { label: "Visit", value: "Home Visit", icon: "Home" },
    ],
    about: {
      measured: "Vitamin D + Calcium",
      importance: "Bone strength monitoring",
      conditions: ["Joint Pain", "Weak Bones"],
    },
    labInfo: {
      name: "HealthPlus Labs",
      experience: "8+ Years Experience",
      review: "Trusted by 1L+ patients",
    },
    price: {
      selling: 799,
      mrp: 1499,
      discount: 47,
    },
  },
];
