export interface ShopProductGroup {
  subheading?: string;
  items: string[];
}

export interface ShopCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  groups: ShopProductGroup[];
}

export const healthShopCategories: ShopCategory[] = [
  {
    id: "herbal-products",
    name: "Herbal Products",
    tagline: "Pure botanical juices, detox decoctions & revitalizing herbal teas",
    description:
      "Prepared from freshly harvested, medicinal plants to cleanse internal organs, boost immunity, and support daily body detoxification.",
    iconName: "Leaf",
    groups: [
      {
        subheading: "Medicinal Juices",
        items: [
          "Amla Juice (Nellikkai - Vitamin C & Immunity)",
          "Vilvam Juice (Bael - Digestive & Cooling)",
          "Nannari Juice (Sarasaparilla - Natural Body Coolant)"
        ]
      },
      {
        subheading: "Herbal Teas & Infusions",
        items: [
          "KNCH Signature Herbal Tea",
          "Antioxidant Organic Green Tea",
          "Golden Turmeric Healing Tea"
        ]
      }
    ]
  },
  {
    id: "nutritional-snacks",
    name: "Nutritional Snacks",
    tagline: "Millet cookies, roasted dry fruits & authentic honey preserves",
    description:
      "Wholesome, sugar-free, and nutrient-dense healthy bites made with traditional native millets and premium organic dry fruits.",
    iconName: "Cookie",
    groups: [
      {
        subheading: "Native Millet Cookies",
        items: [
          "Foxtail Millet Cookies (Thinai)",
          "Kodo Millet Cookies (Varagu)",
          "Pearl Millet Cookies (Kambu)",
          "Little Millet Cookies (Samai)",
          "Finger Millet Cookies (Ragi)"
        ]
      },
      {
        subheading: "Dry Fruits & Natural Confections",
        items: [
          "Premium Badam (Almonds)",
          "Pista (Pistachios)",
          "Cashewnuts",
          "Dried Figs (Anjeer)",
          "Organic Black Dates",
          "Honey Gulkand (Damask Rose Petal Jam in Honey)",
          "Honey Vilvam Preserve"
        ]
      }
    ]
  },
  {
    id: "therapy-products",
    name: "Therapy Products",
    tagline: "Home Naturopathy equipment, hydrotherapy tools & yoga accessories",
    description:
      "High-grade self-care and drugless therapy accessories enabling patients to maintain their Nature Cure routine from the comfort of home.",
    iconName: "Sparkles",
    groups: [
      {
        subheading: "Naturopathy & Cleansing Equipment",
        items: [
          "Facial Steam Inhaler / Steamer",
          "Nose Cup (Jala Neti Pot for Sinus Cleansing)",
          "Eye Wash Cup",
          "Detox Colon Cleansing Enema Can & Tubing",
          "Therapeutic Natural Medicinal Mud (Clay Powder)",
          "Hot Water Bag & Gel Ice Bag"
        ]
      },
      {
        subheading: "Packs & Magnetic Therapy Accessories",
        items: [
          "Abdomen Wet / Mud Pack",
          "Cooling Eye Pack",
          "Therapeutic Leg Pack",
          "Magnetic Bio-Energy Belt",
          "Magnetic Cervical Neck Belt",
          "Magnetic Knee Support Belt",
          "Magnetic Lumbar Back Support Belt"
        ]
      },
      {
        subheading: "Acupressure & Yoga Equipment",
        items: [
          "Acupressure Foot Reflexology Pad",
          "Acupuncture Healing Slippers",
          "Eco-friendly Non-Slip Yoga Mat",
          "Illustrated Yoga Asana Chart",
          "Aerobic Exercise Skipping Rope",
          "Waist & Core Fitness Twister"
        ]
      }
    ]
  },
  {
    id: "organic-food-products",
    name: "Organic Food Products",
    tagline: "Unpolished heritage rice, native millets, cold pressed oils & noodles",
    description:
      "Chemical-free, pesticide-free pantry staples directly sourced from organic farmlands to ensure natural nutrition in every meal.",
    iconName: "Wheat",
    groups: [
      {
        subheading: "Traditional Cereals & Millets",
        items: [
          "Organic Heritage Rice Varieties",
          "Nutritious Organic Red Rice (Mappillai Samba)",
          "Traditional Hand-Pounded Rice",
          "Whole Wheat Flakes",
          "Foxtail Millet (Thinai)",
          "Kodo Millet (Varagu)",
          "Pearl Millet (Kambu)",
          "Little Millet (Samai)",
          "Finger Millet (Ragi)",
          "Kollu (Horse Gram - Fat Cutter)",
          "Cholam (Sorghum)",
          "Lapsi Broken Wheat (Samba Wheat)",
          "Lapsi Wheat Rava"
        ]
      },
      {
        subheading: "Healthy Millet Noodles",
        items: [
          "Kambu (Pearl Millet) Noodles",
          "Ragi (Finger Millet) Noodles",
          "Nutritious Multigrain Noodles",
          "Protein-Rich Soya Noodles"
        ]
      },
      {
        subheading: "Traditional Cold-Pressed Oils (Marachekku)",
        items: [
          "Pure Cold Pressed Groundnut Oil",
          "Pure Cold Pressed Sesame (Gingelly) Oil",
          "Pure Virgin Cold Pressed Coconut Oil"
        ]
      },
      {
        subheading: "Health Flours & Porridge Mixes",
        items: [
          "KNCH Multigrain Sathu Maavu Kanji Mix",
          "Pure Barley Grain Powder"
        ]
      }
    ]
  },
  {
    id: "knch-special-products",
    name: "KNCH Special Products",
    tagline: "Pure forest honey, traditional jaggery, herbal cosmetics & bath care",
    description:
      "Specialty homemade and clinically approved hospital formulations crafted with pure natural ingredients and zero artificial chemicals.",
    iconName: "HeartHandshake",
    groups: [
      {
        subheading: "Natural Sweeteners & Essential Salts",
        items: [
          "100% Pure Wild Forest Honey",
          "Natural Palm Crystal (Panakarkandu)",
          "Herbal Medicated Jaggery Powder (Nattu Sakkarai)",
          "Himalayan Pink Rock Salt (Sendha Namak)",
          "Ayurvedic Black Salt (Kala Namak)",
          "Kodampuli (Malabar Tamarind / Brindleberry for Weight Loss)"
        ]
      },
      {
        subheading: "Aromatic & Spiritual Wellness",
        items: [
          "Pure Herbal Cup Sambrani",
          "Natural Botanical Incense Sticks",
          "Pooja Deepam Panchadeepam Oil",
          "Pure Distilled Rose Water"
        ]
      },
      {
        subheading: "Natural Hair Care",
        items: [
          "Medicated Herbal Hair Growth Oil",
          "Traditional Black Hair Oil (Karunkoondhal)",
          "Pure Aloe Vera Herbal Shampoo",
          "Traditional Arappu / Shikakai Hair Wash Powder",
          "Chemical-Free 100% Natural Herbal Hair Dye"
        ]
      },
      {
        subheading: "Holistic Skin Care & Body Care",
        items: [
          "Glowing Herbal Face Pack Powder",
          "Handmade Cold-Process Herbal Soap",
          "Moisturizing Aloe Vera Bar Soap",
          "Traditional Nalangu Maavu Herbal Bath Powder",
          "Aromatic Vetiver Natural Body Scrub"
        ]
      },
      {
        subheading: "Herbal Dental Care",
        items: [
          "Ayurvedic Herbal Tooth Powder (Dr. Anitha's Formulation)",
          "Fluoride-Free Natural Herbal Toothpaste"
        ]
      }
    ]
  }
];
