export interface SpecialisedTreatment {
  id: string;
  name: string;
  tamilName: string;
  tagline: string;
  description: string;
  benefits: string[];
  duration: string;
  indications: string[];
  image: string;
}

export const specialisedTreatments: SpecialisedTreatment[] = [
  {
    id: "massage-therapy",
    name: "Massage Therapy",
    tamilName: "மசாஜ் சிகிச்சை",
    tagline: "Relaxing neuro-muscular & circulation massage",
    description:
      "A soothing full-body massage using herbal oils and expert strokes to relieve chronic muscle tightness, improve blood flow, and deeply calm your nervous system.",
    benefits: [
      "Relieves neck, back, and shoulder pain",
      "Improves blood and lymphatic circulation",
      "Reduces stress and promotes deep sleep",
      "Enhances joint flexibility and posture",
      "Tones the skin and boosts energy"
    ],
    duration: "45 - 60 mins",
    indications: ["Cervical & Lumbar Pain", "Sciatica", "Insomnia", "Anxiety & Fatigue", "Muscle Spasms"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "acupuncture",
    name: "Acupuncture",
    tamilName: "அக்குபஞ்சர் சிகிச்சை",
    tagline: "Sterile meridian needling for instant pain & neuro-energy balance",
    description:
      "An ancient, drugless science of stimulating specific energy channels using ultra-fine sterile needles to activate the body's self-healing mechanisms and release natural pain-relieving endorphins.",
    benefits: [
      "Rapid drug-free pain relief for chronic joint and spine conditions",
      "Re-balances neuro-endocrine and autonomic nervous pathways",
      "Significantly reduces migraine and chronic tension headache frequency",
      "Relieves sciatica, nerve numbness, and muscular spasms",
      "Strengthens immune resilience and vitality"
    ],
    duration: "30 - 45 mins",
    indications: ["Cervical & Lumbar Spondylosis", "Sciatica", "Migraines", "Paralysis Rehab", "Chronic Pain"],
    image: "/images/acupuncture_therapy.jpg"
  },
  {
    id: "steam-bath",
    name: "Steam Bath",
    tamilName: "நீராவிக்குளியல்",
    tagline: "Medicinal herbal steam for full-body cellular detox",
    description:
      "A therapeutic wooden chamber steam bath infused with medicinal herbs while keeping the head cool outside. Dilates pores, accelerates toxin elimination through sweat, and relieves deep muscular fatigue.",
    benefits: [
      "Flushes out deep cellular metabolic toxins through profuse perspiration",
      "Eases chronic joint stiffness, back pain, and muscle knots",
      "Cleanses and opens millions of skin pores for a healthy glow",
      "Boosts peripheral blood circulation and metabolic rate",
      "Relieves respiratory congestion and general body heaviness"
    ],
    duration: "15 - 25 mins",
    indications: ["Toxin Buildup", "Rheumatism & Arthritis", "Muscle Spasms", "Sluggish Metabolism", "Bronchial Congestion"],
    image: "/images/steam_bath_therapy.jpg"
  },
  {
    id: "diet-therapy",
    name: "Diet Therapy",
    tamilName: "உணவு சிகிச்சை",
    tagline: "Healing through living foods, juices & therapeutic nutrition",
    description:
      "Clinical natural nutrition using live sprouts, raw vegetable juices, organic fruits, and alkaline broths to cleanse internal organs, reverse metabolic disorders, and energize every cell.",
    benefits: [
      "Restores optimal alkaline balance across bodily tissues",
      "Effectively reverses insulin resistance and regulates blood sugar",
      "Supports liver and colon detoxification without pharmaceutical load",
      "Promotes sustained fat loss and healthy digestion",
      "Significantly boosts daily energy, vitality, and immunity"
    ],
    duration: "Personalized Protocol (Daily / Residential)",
    indications: ["Type 2 Diabetes", "Obesity", "Hypertension", "Fatty Liver", "Digestive Disorders"],
    image: "/images/diet_therapy.jpg"
  },
  {
    id: "mud-therapy",
    name: "Mud Therapy",
    tamilName: "மண் சிகிச்சை & மண்குளியல்",
    tagline: "Cooling mineral-rich clay detox therapy",
    description:
      "Therapeutic application of mineral-dense mud packs to absorb excess body heat, reduce inflammation, and draw out deep impurities through the skin.",
    benefits: [
      "Draws out deep toxins and body heat",
      "Relieves acidity, gastric issues, and constipation",
      "Soothes strained eyes and mental fatigue",
      "Helps treat psoriasis, eczema, and rashes",
      "Acts as a powerful natural body coolant"
    ],
    duration: "30 - 45 mins",
    indications: ["Psoriasis & Eczema", "Gastric Ulcers / GERD", "Eye Strain", "Constipation", "Chronic Heat"],
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "hydrotherapy",
    name: "Hydrotherapy",
    tamilName: "நீரியல் மருத்துவம் & நீராவிக்குளியல்",
    tagline: "Healing through water and steam therapy",
    description:
      "Uses water at different temperatures and pressures, including herbal steam and spinal baths, to boost circulation, relieve pain, and cleanse the system.",
    benefits: [
      "Steam baths eliminate toxins through sweat",
      "Hip baths improve pelvic and urinary health",
      "Spinal sprays relieve back pain and tension",
      "Boosts metabolism and aids weight loss",
      "Restores normal bowel movements"
    ],
    duration: "20 - 45 mins",
    indications: ["Hypertension", "Pelvic & Gynaecological Issues", "Constipation", "Arthritis", "Obesity"],
    image: "/images/knch_hydrotherapy.jpg"
  },
  {
    id: "yoga-therapy",
    name: "Yoga Therapy",
    tamilName: "யோகா சிகிச்சை & பிராணாயாமம்",
    tagline: "Therapeutic asanas and meditation for healing",
    description:
      "Personalized yoga sessions guided by doctors, featuring therapeutic postures, breathing techniques, and relaxation to rehabilitate the spine and lower stress.",
    benefits: [
      "Re-aligns the spine and strengthens muscles",
      "Reduces anxiety, stress, and depression",
      "Improves lung capacity and breathing",
      "Regulates high blood pressure naturally",
      "Brings deep peace and mental clarity"
    ],
    duration: "45 - 60 mins",
    indications: ["Spinal Spondylosis", "Asthma & Bronchitis", "Depression & Anxiety", "Thyroid Imbalances"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "plantain-leaf-bath",
    name: "Plantain-Leaf Bath",
    tamilName: "வாழை இலைக்குளியல்",
    tagline: "Our signature banana-leaf sun detox therapy",
    description:
      "Our iconic signature treatment. Your body is wrapped in fresh banana leaves under morning sunlight to induce deep sweating, burn fat, and flush out heavy toxins.",
    benefits: [
      "Deeply flushes out toxins through sweating",
      "Infuses skin with natural plant nutrients",
      "Accelerates fat burning and weight loss",
      "Clears blemishes for a natural skin glow",
      "Leaves you feeling incredibly light and energetic"
    ],
    duration: "30 - 45 mins",
    indications: ["Weight Loss / Obesity", "Sluggish Metabolism", "Toxemia", "Dull Skin", "Chronic Fatigue"],
    image: "/images/knch_plantain_leaf_bath.jpg"
  }
];

export interface TreatmentItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  duration?: string;
  indications?: string[];
  popular?: boolean;
}

export interface TreatmentCategory {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
  treatments: TreatmentItem[];
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "specialised",
    name: "Specialised Therapies",
    shortDesc: "Our core signature treatments: Massage Therapy, Acupuncture, Steam Bath, Diet Therapy, Mud, Hydrotherapy, Yoga & Plantain-Leaf Bath.",
    iconName: "Sparkles",
    treatments: [
      {
        id: "massage-therapy",
        name: "Massage Therapy (மசாஜ் சிகிச்சை)",
        tagline: "Therapeutic neuro-muscular & circulation invigorating massage",
        description:
          "Scientific application of tactile manipulation using cold-pressed herbal oils and specialized strokes. Regulates blood and lymphatic flow, relieves chronic muscle tightness, breaks down metabolic knots, and deeply calms the central nervous system.",
        benefits: [
          "Relieves chronic muscular stiffness, neck, back, and shoulder pain",
          "Enhances lymphatic circulation and toxic waste drainage",
          "Promotes deep restorative sleep and stress alleviation",
          "Improves joint lubrication, range of motion, and posture",
          "Tones skin tissues and boosts overall vitality"
        ],
        duration: "45 - 60 mins",
        indications: ["Cervical & Lumbar Pain", "Sciatica", "Insomnia", "Anxiety & Fatigue", "Muscle Spasms"],
        popular: true,
      },
      {
        id: "acupuncture",
        name: "Acupuncture (அக்குபஞ்சர் சிகிச்சை)",
        tagline: "Sterile meridian needling for instant pain & neuro-energy balance",
        description:
          "Gentle insertion of ultra-fine, sterile, single-use stainless steel needles into specific therapeutic acupoints along vital meridians. Stimulates the nervous system, releases pain-relieving endorphins, and balances organ energy naturally.",
        benefits: [
          "Rapid, drug-free pain relief for chronic musculoskeletal disorders",
          "Balances neuro-endocrine and autonomic nervous pathways",
          "Reduces frequency and severity of migraines and tension headaches",
          "Relieves sciatica, nerve numbness, and muscular spasms",
          "Strengthens immune surveillance and internal organ vitality"
        ],
        duration: "30 - 45 mins",
        indications: ["Cervical / Lumbar Spondylosis", "Sciatica", "Migraines", "Paralysis Rehab", "Chronic Pain"],
        popular: true,
      },
      {
        id: "steam-bath",
        name: "Steam Bath (நீராவிக்குளியல்)",
        tagline: "Full-body medicinal herbal sweat therapy for rapid pore detoxification",
        description:
          "Full-body exposure to medicinal herbal steam inside a wooden chamber with the head kept comfortably cool outside. Moist heat dilates peripheral blood vessels, induces profuse sweating, and opens millions of skin pores to expel accumulated metabolic waste.",
        benefits: [
          "Eliminates deep metabolic toxins through profuse perspiration",
          "Softens tense muscles and relieves joint stiffness",
          "Rejuvenates skin texture and clears clogged pores",
          "Improves peripheral blood and lymphatic circulation",
          "Assists in weight management and metabolic stimulation"
        ],
        duration: "15 - 25 mins",
        indications: ["Toxin Buildup", "Muscular Aches", "Rheumatism & Arthritis", "Sluggish Metabolism"],
        popular: true,
      },
      {
        id: "diet-therapy",
        name: "Diet Therapy (உணவு சிகிச்சை)",
        tagline: "Living enzyme nutrition, raw juices & organic food therapy",
        description:
          "Evidence-based clinical nutrition and therapeutic fasting protocols customized according to individual Prakriti. Utilizing activated sprouts, green alkaline juices, seasonal fruits, and healing broths to detoxify organs and reset metabolism.",
        benefits: [
          "Restores optimal alkaline balance across bodily tissues",
          "Reverses insulin resistance and stabilizes blood glucose naturally",
          "Accelerates cellular autophagy and systemic toxic elimination",
          "Alleviates chronic digestive disorders, acidity, and constipation",
          "Provides sustained natural energy, mental clarity, and vitality"
        ],
        duration: "Personalized Protocol (Daily / Residential)",
        indications: ["Diabetes Mellitus", "Obesity", "Hypertension", "Fatty Liver", "Digestive Disorders"],
        popular: true,
      },
      {
        id: "mud-therapy",
        name: "Mud Therapy (மண் சிகிச்சை & மண்குளியல்)",
        tagline: "Natural mineral-rich clay therapy for cooling & deep detox",
        description:
          "Sterilized, mineral-dense medicinal earth applied as therapeutic abdominal packs, eye packs, forehead packs, or full-body mud baths. Mud holds moisture and coolness for extended periods, absorbing morbid visceral heat, subduing inflammation, and extracting impurities through skin pores.",
        benefits: [
          "Draws out deep cellular toxemia and inflammatory heat",
          "Relieves abdominal congestion, acidity, chronic gastritis, and constipation",
          "Soothes strained eyes, dark circles, migraines, and mental exhaustion",
          "Alleviates inflammatory skin conditions: psoriasis, eczema, and rashes",
          "Acts as a powerful natural coolant for the entire body"
        ],
        duration: "30 - 45 mins",
        indications: ["Psoriasis & Eczema", "Gastric Ulcers / GERD", "Eye Strain", "Constipation", "Chronic Heat"],
        popular: true,
      },
      {
        id: "hydrotherapy-cleanse",
        name: "Hydrotherapy (நீராவிக்குளியல் & நீரியல்)",
        tagline: "Therapeutic water, steam, and temperature cleansing",
        description:
          "Harnessing water's healing properties at varied temperatures and pressures. Includes full-body herbal steam baths, hip baths for pelvic circulation, spinal spray baths for spinal relaxation, hot and cold compresses, and colon cleansing enemas.",
        benefits: [
          "Steam bath induces healthy sweating to eliminate toxins through skin pores",
          "Hip bath cures pelvic congestion, menstrual irregularities, and urinary disorders",
          "Spinal spray relieves hypertension, sciatica, and nervous tension",
          "Improves metabolic rate and accelerates weight management",
          "Restores normal bowel motility and clears colon residue"
        ],
        duration: "20 - 45 mins",
        indications: ["Hypertension", "Pelvic & Gynaecological Issues", "Constipation", "Arthritis", "Obesity"],
        popular: true,
      },
      {
        id: "yoga-therapy",
        name: "Yoga Therapy (யோகா சிகிச்சை)",
        tagline: "Disease-targeted therapeutic asanas, pranayama & meditation",
        description:
          "Individualized yogic sessions guided by qualified BNYS doctors. Tailored therapeutic postures (asanas), clinical breathing techniques (pranayama), and deep conscious relaxation (Yoga Nidra) designed to rehabilitate spine disorders, lower mental stress, and regulate autonomic function.",
        benefits: [
          "Re-aligns the spine and strengthens core postural muscles",
          "Controls cortisol levels, anxiety, depressive symptoms, and panic attacks",
          "Improves lung capacity and oxygen saturation in bronchial conditions",
          "Balances autonomic nervous system and regulates high blood pressure",
          "Cultivates profound inner tranquility and mental clarity"
        ],
        duration: "45 - 60 mins",
        indications: ["Spinal Spondylosis", "Asthma & Bronchitis", "Depression & Anxiety", "Thyroid Imbalances"],
        popular: true,
      },
      {
        id: "plantain-leaf-bath",
        name: "Plantain-Leaf Bath (வாழை இலைக்குளியல்)",
        tagline: "Signature banana-leaf sunlight bath for intensive natural detox",
        description:
          "Kumar Nature Cure Hospital's iconic signature treatment. The body is wrapped comfortably in fresh green banana leaves under gentle morning sunlight. The therapeutic micro-greenhouse effect induces deep sweat, flushing stagnant cellular toxins, accelerating fat metabolism, and infusing natural chlorophyll.",
        benefits: [
          "Deep cellular detoxification through intensive natural perspiration",
          "Infuses organic plant chlorophyll and bio-nutrients into the skin",
          "Stimulates metabolic fat breakdown and tones subcutaneous layer",
          "Clears skin blemishes and produces a revitalized natural glow",
          "Leaves the body feeling remarkably light, energetic, and refreshed"
        ],
        duration: "30 - 45 mins",
        indications: ["Weight Loss / Obesity", "Sluggish Metabolism", "Toxemia", "Dull Skin", "Chronic Fatigue"],
        popular: true,
      }
    ]
  },
  {
    id: "general",
    name: "General",
    shortDesc: "Foundational hydrotherapy, mud packs, and natural cleansing therapies.",
    iconName: "Droplets",
    treatments: [
      {
        id: "enema",
        name: "Enema",
        tagline: "Natural colon cleansing and digestive reset",
        description: "A gentle hydrotherapeutic colon cleansing using pure warm water, neem, or mild herbal infusions. It helps flush out accumulated fecal matter, stagnant toxins, and restores healthy peristalsis without irritating the mucosal lining.",
        benefits: [
          "Relieves acute & chronic constipation",
          "Cleanses toxic residue from the colon",
          "Improves nutrient absorption and digestion",
          "Alleviates indigestion, gas, and abdominal bloating",
          "Supports systemic body detoxification"
        ],
        duration: "20 - 30 mins",
        indications: ["Constipation", "Indigestion", "Toxemia", "Headaches", "Sluggish Digestion"],
        popular: true,
      },
      {
        id: "mud-pack",
        name: "Mud Pack",
        tagline: "Mineral-rich clay therapy for cooling and inflammation relief",
        description: "Application of sterilized, mineral-dense medicinal earth packs onto targeted areas such as the abdomen, eyes, and forehead. Mud retains moisture and coolness for prolonged periods, effectively absorbing morbid heat and reducing deep inflammation.",
        benefits: [
          "Absorbs excess visceral heat and inflammation",
          "Relieves congestion in abdominal organs and eyes",
          "Alleviates eye strain, dark circles, and headaches",
          "Tones intestinal muscles and aids peristalsis",
          "Improves local blood microcirculation"
        ],
        duration: "30 mins",
        indications: ["Eye Strain", "Abdominal Heat", "Chronic Dyspepsia", "Skin Eruptions"],
        popular: true,
      },
      {
        id: "hip-bath",
        name: "Hip Bath",
        tagline: "Targeted pelvic hydrotherapy for reproductive and bowel health",
        description: "A specialized tub bath where the patient is seated so that the pelvis and lower abdomen are submerged in temperature-regulated water (cold, hot, or alternate), while the feet remain outside. Highly effective for pelvic organ circulation.",
        benefits: [
          "Stimulates pelvic and abdominal circulation",
          "Relieves menstrual cramps and irregularities",
          "Helps alleviate hemorrhoids and prostate congestion",
          "Enhances bowel motility and eases constipation",
          "Soothes lower back and pelvic muscle tension"
        ],
        duration: "15 - 20 mins",
        indications: ["Menstrual Disorders", "Piles / Hemorrhoids", "Constipation", "Pelvic Congestion"],
      },
      {
        id: "spinal-bath",
        name: "Spinal Bath",
        tagline: "Gentle spinal column immersion to balance the nervous system",
        description: "The patient reclines in a specially designed shallow tub that immerses only the vertebral column in temperature-calibrated water. It directly stimulates and balances the spinal cord, autonomic nerves, and sympathetic chain.",
        benefits: [
          "Calms the central and autonomic nervous system",
          "Reduces elevated blood pressure and anxiety",
          "Relieves chronic insomnia and promotes deep restful sleep",
          "Eases vertebral stiffness and muscular tension along the spine",
          "Regulates sympathetic and parasympathetic tone"
        ],
        duration: "15 - 20 mins",
        indications: ["Hypertension", "Insomnia", "Anxiety & Stress", "Spinal Stiffness"],
        popular: true,
      },
      {
        id: "steam-bath",
        name: "Steam Bath",
        tagline: "Full-body herbal sweat therapy for rapid pore detoxification",
        description: "Full-body medicinal herbal steam exposure inside a wooden chamber with the head kept cool outside. The moist heat dilates peripheral blood vessels, induces profuse sweating, and opens millions of skin pores to expel accumulated metabolic waste.",
        benefits: [
          "Eliminates deep metabolic toxins through profuse perspiration",
          "Softens tense muscles and relieves joint stiffness",
          "Rejuvenates skin texture and clears clogged pores",
          "Improves peripheral blood and lymphatic circulation",
          "Assists in weight management and metabolic stimulation"
        ],
        duration: "15 - 25 mins",
        indications: ["Toxin Buildup", "Muscular Aches", "Rheumatism", "Sluggish Metabolism"],
        popular: true,
      },
      {
        id: "spinal-spray",
        name: "Spinal Spray",
        tagline: "Invigorating high-velocity hydro-jet spinal massage",
        description: "A specialized hydrotherapy device that applies localized, fine sprays of warm or alternating water jets along the entire length of the spine. The mechanical stimulation recharges nerve roots and relieves back exhaustion.",
        benefits: [
          "Revitalizes tired spinal nerves and energy flow",
          "Quickly relieves back fatigue, numbness, and spasms",
          "Alleviates tension headaches originating from cervical strain",
          "Improves neuromuscular coordination and alertness",
          "Invigorates the sympathetic nervous system"
        ],
        duration: "10 - 15 mins",
        indications: ["Cervical / Lumbar Spondylosis", "Chronic Back Fatigue", "Nervous Exhaustion"],
      },
      {
        id: "immersion-bath",
        name: "Immersion Bath",
        tagline: "Full-body temperature immersion for total somatic relaxation",
        description: "Complete immersion of the entire body up to the neck in warm or neutral water infused with essential minerals or herbs. The hydrostatic buoyancy relieves gravitational load on joints and muscles, inducing effortless full-body relaxation.",
        benefits: [
          "Relieves joint compression and muscular aches",
          "Enhances cutaneous venous circulation and cardiac tone",
          "Induces deep mental calm and reduces high stress levels",
          "Alleviates general body fatigue and neural excitability",
          "Improves joint range of motion"
        ],
        duration: "20 - 30 mins",
        indications: ["Generalized Body Pain", "Stress & Burnout", "Fibromyalgia", "Arthritis"],
      },
    ],
  },
  {
    id: "special",
    name: "Special",
    shortDesc: "Signature natural baths, banana leaf sun therapy, and thermal detox treatments.",
    iconName: "Sparkles",
    treatments: [
      {
        id: "plantain-leaf-bath",
        name: "Plantain Leaf Bath",
        tagline: "Signature banana leaf natural sun-detox therapy",
        description: "The body is cocooned in fresh, green banana (plantain) leaves under gentle morning sunlight. The natural chlorophyll and sun heat produce a micro-greenhouse effect that triggers deep cellular perspiration, burning toxins and rejuvenating tissues.",
        benefits: [
          "Deep cellular detoxification through intensive natural perspiration",
          "Infuses organic chlorophyll and bio-nutrients into the skin",
          "Stimulates metabolic fat breakdown and tones the subcutaneous layer",
          "Cleanses deep skin layers and improves skin clarity",
          "Leaves the body feeling lightweight, energized, and refreshed"
        ],
        duration: "30 - 45 mins",
        indications: ["Obesity / Weight Management", "Dull Complexion", "Toxemia", "Sluggish Metabolism"],
        popular: true,
      },
      {
        id: "ganji-turmeric-bath",
        name: "Ganji Turmeric Bath",
        tagline: "Therapeutic rice-starch and organic turmeric healing soak",
        description: "An authentic healing bath prepared with boiled rice starch (ganji) enriched with pure medicinal turmeric (curcumin) and selected therapeutic botanicals. Unsurpassed for chronic inflammatory skin conditions and skin barrier rejuvenation.",
        benefits: [
          "Potent anti-inflammatory and antiseptic action on the skin",
          "Soothes severe itching, scaling, and dryness in eczema & psoriasis",
          "Improves natural skin hydration and barrier protection",
          "Leaves skin remarkably soft, supple, and glowing",
          "Provides soothing relief from sunburn and allergic rashes"
        ],
        duration: "25 - 35 mins",
        indications: ["Psoriasis", "Eczema", "Dry Skin / Pruritus", "Skin Allergies"],
        popular: true,
      },
      {
        id: "mud-bath",
        name: "Mud Bath",
        tagline: "Full-body medicinal earth bath for holistic detoxification",
        description: "Application of specially sourced, filtered, and mineral-enriched therapeutic clay over the entire body, followed by sun-drying and a restorative rinse. It absorbs deep tissue impurities, unblocks sweat pores, and balances thermal energy.",
        benefits: [
          "Eliminates heavy toxins trapped in dermal tissue layers",
          "Draws out excessive internal heat and body inflammation",
          "Nourishes skin with essential trace minerals (silica, magnesium)",
          "Eases chronic joint stiffness, rheumatoid pain, and arthritis",
          "Improves peripheral circulation and natural skin tone"
        ],
        duration: "45 mins",
        indications: ["Chronic Arthritis", "Skin Disorders", "Uric Acid Imbalance", "General Fatigue"],
        popular: true,
      },
      {
        id: "infrared-ray",
        name: "Infrared Ray",
        tagline: "Penetrating therapeutic thermal radiation for pain and joint healing",
        description: "Application of therapeutic infrared rays (IR lamp therapy) targeting specific joints, muscles, and nerve regions. The gentle radiant thermal waves penetrate deep beneath the skin without physical pressure, dilating local capillaries, relaxing painful spasms, and accelerating cellular tissue repair.",
        benefits: [
          "Provides deep penetrating heat to relieve acute and chronic muscle spasms",
          "Dramatically increases local microvascular blood flow and cellular oxygenation",
          "Alleviates joint stiffness in cervical spondylosis, knee osteoarthritis, and frozen shoulder",
          "Accelerates tissue healing, reduces inflammation, and relieves localized swelling",
          "Calms irritated nerve endings and diminishes neuralgia and neuropathic pain"
        ],
        duration: "15 - 20 mins",
        indications: ["Cervical & Lumbar Spondylosis", "Knee Osteoarthritis", "Muscle Spasms & Back Pain", "Frozen Shoulder", "Neuralgia"],
        popular: true,
      },
    ],
  },
  {
    id: "yoga-therapy",
    name: "Yoga Therapy",
    shortDesc: "Therapeutic asanas, pranayama, mudras, and guided psychosomatic relaxation.",
    iconName: "Activity",
    treatments: [
      {
        id: "therapeutic-asanas",
        name: "Therapeutic Asanas",
        tagline: "Clinically customized yogic postures for alignment and healing",
        description: "Gentle, individualized physical postures prescribed by Yoga & Naturopathy physicians targeting specific ailments such as spinal disc prolapse, diabetes, digestive dysfunction, and postural imbalances.",
        benefits: [
          "Corrects spinal alignment and strengthens core stabilizing muscles",
          "Stimulates endocrine pancreas and thyroid for metabolic equilibrium",
          "Enhances joint flexibility and lubrication without strain",
          "Promotes steady diaphragmatic breathing and visceral massage",
          "Builds physical stamina, balance, and mind-body coordination"
        ],
        duration: "45 - 60 mins",
        indications: ["Spinal Disc Prolapse", "Diabetes Mellitus", "Hypertension", "Postural Defects"],
        popular: true,
      },
      {
        id: "pranayamas",
        name: "Pranayama (Breath Therapy)",
        tagline: "Yogic breath modulation to regulate autonomic nervous balance",
        description: "Systematic practice of vital energy regulation through breath control techniques including Nadi Shodhana (Alternate Nostril), Bhastrika, Sheetali, and Bhramari, guided according to physiological indications.",
        benefits: [
          "Balances the sympathetic and parasympathetic nervous systems",
          "Expands vital lung capacity and oxygenates arterial blood",
          "Lowers resting heart rate and reduces stress hormones (cortisol)",
          "Clears mental fogginess and sharpens concentration",
          "Alleviates asthma, chronic rhinitis, and anxiety symptoms"
        ],
        duration: "30 mins",
        indications: ["Bronchial Asthma", "Anxiety", "High Blood Pressure", "Mental Fatigue"],
        popular: true,
      },
      {
        id: "therapeutic-mudras",
        name: "Therapeutic Mudras",
        tagline: "Bio-energetic hand seals to balance elemental energies",
        description: "Specific neurological finger and hand gestures that stimulate meridian nerve endings and reflex circuits, directing prana (vital force) to corresponding glands and abdominal viscera.",
        benefits: [
          "Directs subtle bio-energy flow to vital organs",
          "Calms cardiac rhythms (Apana Vayu Mudra)",
          "Supports digestive agni and metabolic balance",
          "Enhances grounding, stability, and emotional resilience",
          "Easy to practice even during acute recovery phases"
        ],
        duration: "20 - 30 mins",
        indications: ["Cardiac Arrhythmias", "Digestive Weakness", "Insomnia", "Lethargy"],
      },
      {
        id: "relaxation-techniques",
        name: "Relaxation Techniques (Yoga Nidra / IRT / QRT)",
        tagline: "Guided neuromuscular relaxation and conscious yogic sleep",
        description: "Evidence-based relaxation protocols including Instant Relaxation Technique (IRT), Quick Relaxation Technique (QRT), and deep Yoga Nidra, guiding brainwaves from active beta to regenerative theta states.",
        benefits: [
          "Dissolves deep neuromuscular tension and subconscious stress",
          "Induces the body's natural parasympathetic repair response",
          "Provides restorative benefits equivalent to multiple hours of deep sleep",
          "Reduces psychosomatic chronic pain and tension headaches",
          "Enhances emotional balance and mental clarity"
        ],
        duration: "30 - 45 mins",
        indications: ["Chronic Insomnia", "Panic Disorders", "Hypertension", "Burnout"],
        popular: true,
      },
      {
        id: "therapeutic-kriyas",
        name: "Therapeutic Kriyas",
        tagline: "Internal yogic cleansing of sensory and respiratory tracts",
        description: "Classical purification techniques including Jala Neti (nasal irrigation with saline water), Sutra Neti, Trataka (steady gazing for optic cleansing), and Kapalabhati for respiratory purification.",
        benefits: [
          "Clears nasal pathways, sinuses, and removes allergens",
          "Relieves chronic sinusitis, allergic rhinitis, and migraines",
          "Improves eyesight and soothes optic nerve fatigue",
          "Activates sluggish metabolism and invigorates frontal brain",
          "Enhances respiratory immunity against airborne irritants"
        ],
        duration: "20 - 30 mins",
        indications: ["Sinusitis", "Allergic Rhinitis", "Migraine", "Sluggish Bronchial System"],
      },
    ],
  },
  {
    id: "fasting-diet-therapy",
    name: "Fasting & Diet Therapy",
    shortDesc: "Evidence-based therapeutic fasting regimes and vital natural nutrition.",
    iconName: "Apple",
    treatments: [
      {
        id: "fruit-fasting",
        name: "Fruit Fasting",
        tagline: "Enzyme-rich seasonal fruit nutrition for gentle detoxification",
        description: "A structured dietary regime consisting solely of organic, easily digestible seasonal fruits (papaya, pomegranate, watermelon, apples). Provides high antioxidant loads, living enzymes, and dietary fiber while giving the digestive tract rest.",
        benefits: [
          "Restores alkaline balance throughout body tissues",
          "Provides instant cellular energy without taxing digestion",
          "Mobilizes stubborn fat stores and aids in gradual weight loss",
          "Promotes natural daily bowel clearance and liver renewal",
          "Improves skin radiance and clear complexion"
        ],
        duration: "1 - 3 Days (Supervised)",
        indications: ["Liver Sluggishness", "Mild Toxemia", "Indigestion", "Skin Dullness"],
        popular: true,
      },
      {
        id: "honey-fasting",
        name: "Honey Fasting",
        tagline: "Therapeutic cleanse with pure raw honey and warm lemon water",
        description: "A classical Naturopathy fasting regimen where patients consume pure, unprocessed wild honey diluted in lukewarm water with fresh lemon juice at calibrated intervals. Honey supplies direct bio-available glucose and vital minerals to nourish vital organs and prevent fatigue, while lemon alkalizes the system, accelerates metabolic fat burning, and flushes systemic toxins.",
        benefits: [
          "Provides instant cellular energy and prevents weakness or dizziness during fasting",
          "Accelerates metabolic fat oxidation and supports healthy, sustainable weight loss",
          "Cleanses the stomach, intestines, and colon of accumulated toxic wastes",
          "Protects vital cardiac, hepatic, and nervous function with readily absorbed natural glucose",
          "Soothes gastric inflammation and promotes mucosal gastrointestinal repair"
        ],
        duration: "1 - 3 Days (Doctor Supervised)",
        indications: ["Weight Management / Obesity", "Sluggish Metabolism", "Toxemia", "Chronic Indigestion", "Fatigue"],
        popular: true,
      },
      {
        id: "water-fasting",
        name: "Water Fasting",
        tagline: "The ultimate physiological cleanse under expert medical monitoring",
        description: "Consuming only pure, structured warm or ambient temperature spring water under 24-hour medical supervision. Halts digestive metabolism, triggering intense autophagic cleanup of old, damaged cellular components.",
        benefits: [
          "Triggers profound cellular autophagy (Nobel Prize-winning mechanism)",
          "Resets insulin resistance and optimizes blood glucose levels",
          "Deep systemic cleansing of vital organs (liver, kidneys, gut)",
          "Reduces autoimmune inflammatory markers significantly",
          "Provides extraordinary mental clarity and emotional equanimity"
        ],
        duration: "24 - 72 Hours (Strict Medical Protocol)",
        indications: ["Severe Metabolic Dysfunction", "Type 2 Diabetes", "Chronic Inflammatory Ailments"],
        popular: true,
      },
      {
        id: "mono-diet-fasting",
        name: "Mono Diet Fasting",
        tagline: "Single-ingredient dietary simplification for gastrointestinal rest",
        description: "Consuming exclusively one selected whole food item (such as apple diet or raw papaya diet) for a designated period. Minimizes enzymatic demand on the liver and pancreas, allowing mucosal gut lining repair.",
        benefits: [
          "Eliminates food intolerance and digestive fermentation",
          "Allows the gastric and intestinal mucosa to heal from ulcers",
          "Normalizes irregular bowel habits and resolves bloating",
          "Gentle and well-tolerated by individuals unaccustomed to fasting",
          "Soothes hyperacidity and gastroesophageal reflux"
        ],
        duration: "1 - 2 Days",
        indications: ["Gastritis", "Acid Peptic Disease", "Irritable Bowel Symptoms", "Food Sensitivities"],
      },
      {
        id: "immune-boosting-diet",
        name: "Immune Boosting Diet",
        tagline: "Vital living foods, sprouts, and herbal decoctions for vitality",
        description: "A nourishing clinical nutrition plan rich in activated sprouts, fresh salads, herbal teas, raw vegetables, cold-pressed oils, and potassium broths formulated to reinforce immune defenses and replenish vital micronutrients.",
        benefits: [
          "Rich in bioactive vitamins C, E, zinc, and polyphenols",
          "Maintains gut microbiome diversity with natural prebiotics",
          "Strengthens white blood cell response against pathogens",
          "Supports long-term vitality, sustained energy, and longevity",
          "Helps sustain results gained from therapeutic fasting regimes"
        ],
        duration: "Daily Lifestyle Routine",
        indications: ["Recurrent Infections", "Post-Illness Convalescence", "Low Immunity", "Fatigue"],
      },
    ],
  },
  {
    id: "massage-therapy",
    name: "Massage Therapy",
    shortDesc: "Therapeutic bodywork, aroma oil massage, deep tissue, and herbal scrubs.",
    iconName: "Hand",
    treatments: [
      {
        id: "signature-massage",
        name: "Signature Massage (Full Body Herbal Oil)",
        tagline: "Classical full-body rhythmic massage with warm medicated oils",
        description: "A harmonious, full-body therapeutic massage performed with warm, herbalized sesame or medicated Ayurvedic oils chosen according to body constitution. Long rhythmic strokes soothe the nervous system and nourish skin tissues.",
        benefits: [
          "Improves full-body blood circulation and lymphatic clearance",
          "Deeply hydrates and nourishes skin layers with medicinal lipids",
          "Relieves chronic generalized body ache, stiffness, and fatigue",
          "Induces profound emotional calmness and tranquil sleep",
          "Slows premature aging and strengthens joint flexibility"
        ],
        duration: "45 - 60 mins",
        indications: ["Generalized Body Pain", "Insomnia", "Dry Skin", "Stress & Anxiety"],
        popular: true,
      },
      {
        id: "deep-tissue-massage",
        name: "Deep Tissue Massage",
        tagline: "Intensive neuromuscular therapy for chronic muscular knots",
        description: "Focused, deep finger pressure and slow, deliberate strokes applied across the grain of muscle fibers and deep connective fascia to break down chronic adhesions, trigger points, and postural tension.",
        benefits: [
          "Releases chronic muscle tension and stubborn myofascial trigger points",
          "Increases joint mobility and restores normal range of motion",
          "Breaks down old scar tissue and collagen adhesions",
          "Relieves occupational back pain, neck stiffness, and sciatica",
          "Enhances athletic performance and prevents strain injuries"
        ],
        duration: "50 - 60 mins",
        indications: ["Chronic Neck / Shoulder Stiffness", "Sciatica", "Fibromyalgia", "Post-sports Soreness"],
        popular: true,
      },
      {
        id: "salt-glow-massage",
        name: "Salt Glow Massage",
        tagline: "Invigorating sea mineral exfoliation for cellular circulation",
        description: "A full-body exfoliating treatment utilizing fine sea salts infused with aromatic herbal essential oils. Dead stratum corneum cells are sloughed off while peripheral capillary circulation is vigorously stimulated.",
        benefits: [
          "Exfoliates dull, dead skin cells to reveal fresh, glowing skin",
          "Stimulates peripheral blood flow and lymphatic drainage",
          "Enhances skin absorption of moisturizing and medicinal oils",
          "Smooths rough, bumpy skin texture on elbows, knees, and back",
          "Leaves the entire body feeling thoroughly energized and invigorated"
        ],
        duration: "35 - 45 mins",
        indications: ["Dull Skin", "Poor Peripheral Circulation", "Cellulite", "Sluggish Lymphatics"],
        popular: true,
      },
      {
        id: "aroma-oil-massage",
        name: "Aroma Oil Massage",
        tagline: "Therapeutic essential oil massage for emotional and nervous serenity",
        description: "A gentle, flowing massage incorporating therapeutic-grade essential oils (lavender, eucalyptus, sandalwood, rosemary) customized to balance emotional states and relieve neuro-muscular anxiety.",
        benefits: [
          "Calms hyperactivity of the nervous system and mental chatter",
          "Soothes mild depression, mood swings, and emotional burnout",
          "Enhances respiratory breathing when infused with eucalyptus / mint",
          "Induces deep sleep in individuals suffering from insomnia",
          "Nourishes the skin and uplifts sensory perception"
        ],
        duration: "45 - 60 mins",
        indications: ["Stress", "Mild Depression", "Insomnia", "Nervous Restlessness"],
      },
      {
        id: "fruit-gel-massage",
        name: "Fruit Gel Massage",
        tagline: "Organic antioxidant fruit pulp therapy for glowing skin",
        description: "Application of fresh, pureed fruit pulp (papaya, cucumber, orange) and cooling aloe vera gel using gentle effleurage strokes. Delivers high concentrations of vitamins A, C, and E directly to the skin mantle.",
        benefits: [
          "Soothes overheated, sun-damaged, or irritated skin",
          "Naturally lightens superficial blemishes and hyperpigmentation",
          "Deeply hydrates without clogging delicate skin pores",
          "Provides cooling relief during hot weather or Pitta elevation",
          "Leaves the complexion radiant, supple, and naturally fragrant"
        ],
        duration: "40 mins",
        indications: ["Sunburn", "Hyperpigmentation", "Sensitive Skin", "Summer Heat Fatigue"],
      },
      {
        id: "swedish-massage",
        name: "Swedish Massage",
        tagline: "Classic restorative bodywork to improve venous return and stamina",
        description: "Utilizes the five classical Western massage movements—effleurage, petrissage, friction, tapotement, and vibration—directed toward the heart to boost oxygenation and venous blood return.",
        benefits: [
          "Increases the level of oxygen in the blood and muscle tissues",
          "Decreases muscle toxins and speeds up lactic acid clearance",
          "Improves flexibility without excessive forceful manipulation",
          "Reduces stress hormone levels and relaxes the entire somatic frame",
          "Promotes general well-being and bodily lightness"
        ],
        duration: "50 - 60 mins",
        indications: ["Post-travel Fatigue", "Muscle Tightness", "Circulatory Sluggishness", "General Wellness"],
      },
    ],
  },
  {
    id: "acupuncture",
    name: "Acupuncture",
    shortDesc: "Classical meridian needling, acupressure, reflexology, and cupping therapy.",
    iconName: "ShieldAlert",
    treatments: [
      {
        id: "needling",
        name: "Needling (Acupuncture)",
        tagline: "Sterile micro-needle meridian therapy to unlock natural healing",
        description: "Gentle insertion of ultra-fine, sterile, single-use stainless steel needles into specific therapeutic acupoints along the body's vital meridians. Stimulates the nervous system, releases pain-relieving endorphins, and balances organ energy.",
        benefits: [
          "Rapid, drug-free pain relief for chronic musculoskeletal disorders",
          "Balances neuro-endocrine and autonomic nervous pathways",
          "Reduces frequency and severity of migraines and tension headaches",
          "Assists in fertility enhancement, PCOD regulation, and hormonal harmony",
          "Strengthens immune surveillance and internal organ vitality"
        ],
        duration: "30 - 45 mins",
        indications: ["Cervical / Lumbar Spondylosis", "Migraine", "Paralysis Rehab", "PCOD", "Sciatica"],
        popular: true,
      },
      {
        id: "acupressure",
        name: "Acupressure",
        tagline: "Non-invasive manual stimulation of vital healing trigger points",
        description: "Firm, targeted finger, thumb, and palm pressure applied to calibrated anatomical acupoints to release energy blockages, relieve muscle spasms, and stimulate self-healing mechanisms without needles.",
        benefits: [
          "Completely needle-free therapy suitable for needle-phobic patients",
          "Relieves acute tension, neck stiffness, and headaches quickly",
          "Stimulates digestive secretions and relieves nausea / motion sickness",
          "Promotes steady circulation and relieves localized energy stasis",
          "Improves sleep and releases accumulated physical tension"
        ],
        duration: "30 mins",
        indications: ["Nausea", "Headaches", "Neck Stiffness", "Stress", "Fatigue"],
      },
      {
        id: "reflexology",
        name: "Reflexology",
        tagline: "Therapeutic sole and palm zone therapy for internal organ harmony",
        description: "Specialized pressure technique applied to specific reflex zones on the feet, hands, and ears that directly map to every major organ, gland, and system in the human body.",
        benefits: [
          "Stimulates nerve pathways and boosts corresponding organ efficiency",
          "Induces profound full-body relaxation and reduces systemic anxiety",
          "Improves foot circulation, relieving numbness and peripheral neuropathy",
          "Helps normalize blood pressure and respiratory rhythms",
          "Eases heel pain, plantar fasciitis, and foot arch fatigue"
        ],
        duration: "30 - 40 mins",
        indications: ["Plantar Fasciitis", "Diabetic Neuropathy", "Insomnia", "Digestive Sluggishness"],
        popular: true,
      },
      {
        id: "cupping",
        name: "Cupping Therapy",
        tagline: "Negative pressure suction to pull stagnant blood and toxins",
        description: "Specialized medical cups placed on the skin with negative pressure (vacuum suction) to lift skin, fascia, and superficial muscle layers. Pulls stagnant blood and lactic acid to the surface for rapid lymphatic clearance.",
        benefits: [
          "Decompresses tight, compacted myofascial tissue layers",
          "Clears stagnant blood, metabolic wastes, and cellular toxins",
          "Provides rapid relief from severe upper back and shoulder stiffness",
          "Stimulates new blood vessel formation and local tissue oxygenation",
          "Helps clear deep respiratory congestion and bronchial tightness"
        ],
        duration: "20 - 30 mins",
        indications: ["Chronic Upper Back Knots", "Frozen Shoulder", "Bronchial Congestion", "Fibrositis"],
        popular: true,
      },
      {
        id: "moxibustion",
        name: "Moxibustion",
        tagline: "Thermal herbal stimulation of acupoints to dispel deep coldness",
        description: "Thermal warming of specific acupoints using dried moxa (Artemisia vulgaris) held near the skin surface. The infrared heat penetrates deep into meridians to dispel cold, dampness, and chronic stagnation.",
        benefits: [
          "Warms meridian channels and dispels deep-seated coldness",
          "Relieves chronic degenerative joint pain and osteoarthritis",
          "Strengthens digestion in cases of chronic diarrhea and cold abdomen",
          "Boosts white blood cell count and general vital energy",
          "Assists in breech presentation correction and pelvic warming"
        ],
        duration: "20 mins",
        indications: ["Osteoarthritis", "Chronic Cold Sensations", "Digestive Weakness", "Low Vitality"],
      },
    ],
  },
];

export const healthPackages = [
  {
    name: "Rejuvenation Package",
    tagline: "Complete mind-body restoration and anti-aging wellness",
    duration: "7 to 14 Days",
    idealFor: "Stress, chronic fatigue, metabolic sluggishness, premature aging",
    includes: [
      "Daily Doctor Consultation & Prakriti Diagnostic Assessment",
      "Signature Abhyanga Full Body Herbal Oil Massage",
      "Authentic Shirodhara (Tailadhara / Takradhara)",
      "Herbal Steam Bath & Mud Bath Therapies",
      "Therapeutic Yoga, Pranayama & Yoga Nidra Sessions",
      "Customized Organic Naturopathy Diet Plan",
      "Full access to Swimming Pool, Gym & Pebble Walk"
    ],
    popular: true,
  },
  {
    name: "Pain Relief & Spine Care Package",
    tagline: "Drug-free relief for arthritis, back pain, and joint stiffness",
    duration: "10 to 21 Days",
    idealFor: "Cervical & Lumbar Spondylosis, Sciatica, Knee Osteoarthritis, Frozen Shoulder",
    includes: [
      "Physiotherapy & Orthopedic Assessment",
      "Computerized Spinal Traction & Short-Wave Diathermy (SWD)",
      "Interferential Therapy (IFT) & Ultrasound Therapy",
      "Hydrotherapy: Spinal Spray, Spinal Bath & Steam Bath",
      "Acupuncture, Acupressure & Cupping Therapy",
      "Paraffin Wax Bath for small joint stiffness",
      "Specialized Anti-inflammatory Diet & Herbal Decoctions"
    ],
    popular: true,
  },
  {
    name: "Diabetic Care & Metabolic Reset",
    tagline: "Scientific natural lifestyle protocol to normalize blood sugar",
    duration: "14 to 21 Days",
    idealFor: "Type 2 Diabetes, Pre-diabetes, Insulin Resistance, Fatty Liver",
    includes: [
      "Daily Blood Glucose & Metabolic Monitoring",
      "Therapeutic Juice & Fruit Fasting Protocols",
      "Plantain Leaf Sun Bath for metabolic acceleration",
      "Therapeutic Asanas targeting the endocrine pancreas",
      "Acupuncture & Reflexology for diabetic neuropathy prevention",
      "Guided Aerobic & Circuit Fitness Conditioning",
      "Comprehensive Lifestyle & Nutritional Take-home Blueprint"
    ],
    popular: false,
  },
  {
    name: "Weight Management & Detox Package",
    tagline: "Safe, sustained fat reduction through natural detoxification",
    duration: "14 to 28 Days",
    idealFor: "Obesity, Visceral Adiposity, Cellulite, High Cholesterol",
    includes: [
      "Body Composition Analysis & Caloric Profiling",
      "Supervised Fasting (Honey Fasting & Mono Diet)",
      "Plantain Leaf Bath & Infrared Ray Therapy",
      "Herbal Steam Bath & Salt Glow Scrub",
      "Daily Zumba, Hydro-gym, and Aerobic Conditioning",
      "Detox Colon Cleansing (Enema) & Mud Therapy",
      "Personalized Maintenance Nutrition Guide"
    ],
    popular: false,
  },
  {
    name: "Stress Relief & Sleep Wellness",
    tagline: "Deep neuro-psychological calm for insomnia, anxiety, and burnout",
    duration: "7 to 10 Days",
    idealFor: "Chronic Insomnia, Anxiety, Work Burnout, Depression, Migraine",
    includes: [
      "Individual Psychotherapy & Empathetic Mental Health Counselling",
      "Daily Medicated Shirodhara (Tailadhara / Ksheeradhara)",
      "Aroma Oil Massage & Full Body Hydro-Immersion",
      "Guided Yoga Nidra & Deep Breathwork (Pranayama)",
      "Music Therapy & Vedic Mantra Chanting",
      "Pranic Energy Cleansing & Chromotherapy",
      "Serene riverside boating and quiet nature immersion"
    ],
    popular: true,
  },
];
