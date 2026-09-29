"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { healthShopCategories, ShopCategory } from "@/data/healthShop";
import { 
  ShoppingBag, 
  Search, 
  Leaf, 
  CheckCircle2, 
  Sparkles, 
  HeartHandshake, 
  Cookie, 
  Wheat, 
  ArrowRight,
  PhoneCall,
  type LucideIcon 
} from "lucide-react";

const shopIconMap: Record<string, LucideIcon> = {
  Leaf: Leaf,
  Cookie: Cookie,
  Sparkles: Sparkles,
  Wheat: Wheat,
  HeartHandshake: HeartHandshake,
};

export default function HealthShopShowcase() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCategories = useMemo(() => {
    let list = healthShopCategories;

    if (selectedCategoryId !== "all") {
      list = list.filter((c) => c.id === selectedCategoryId);
    }

    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase();
    return list
      .map((cat) => {
        const matchesCategory = cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
        const filteredGroups = cat.groups
          .map((group) => {
            const matchesSubheading = group.subheading?.toLowerCase().includes(q);
            const filteredItems = group.items.filter((item) => item.toLowerCase().includes(q));
            if (matchesSubheading || filteredItems.length > 0) {
              return {
                ...group,
                items: matchesSubheading ? group.items : filteredItems,
              };
            }
            return null;
          })
          .filter(Boolean) as typeof cat.groups;

        if (matchesCategory) return cat;
        if (filteredGroups.length > 0) {
          return {
            ...cat,
            groups: filteredGroups,
          };
        }
        return null;
      })
      .filter(Boolean) as ShopCategory[];
  }, [selectedCategoryId, searchQuery]);

  return (
    <section className="py-12 bg-white" id="health-shop-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Health Shop Intro Banner */}
        <div className="bg-gradient-to-r from-emerald-800/10 via-primary/5 to-emerald-800/10 rounded-3xl p-6 md:p-8 border border-emerald-600/20 mb-10 text-center max-w-4xl mx-auto shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <ShoppingBag size={14} />
            KNCH Organic & Wellness Store
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
            Natural Health Shop & Pharmacy
          </h3>
          <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
            All authentic products, wild forest honey, native millets, cold-pressed oils, and home naturopathy equipment used during hospital residential therapies are available directly at our campus store.
          </p>

          {/* Quick WhatsApp Inquiry */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/918148129709?text=${encodeURIComponent(
                "Hello KNCH Health Shop! 👋\n\nI would like to inquire about purchasing organic herbal products from your store. Please share product availability and pricing."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <PhoneCall size={15} />
              <span>Inquire / Order Products on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Category Pills & Search Bar */}
        <div className="max-w-5xl mx-auto mb-10 space-y-4">
          
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products (e.g., Honey, Amla, Cookies, Enema Can)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-background/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm text-foreground transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-2.5 py-0.5 rounded-full transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setSelectedCategoryId("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategoryId === "all"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-background text-foreground/80 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              All Product Categories ({healthShopCategories.length})
            </button>
            {healthShopCategories.map((cat) => {
              const isSelected = selectedCategoryId === cat.id;
              const IconComp = shopIconMap[cat.iconName] || Leaf;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-background text-foreground/80 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <IconComp size={13} className={isSelected ? "text-secondary" : "text-gray-500"} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Categories Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-background rounded-3xl p-8 border border-gray-100 max-w-md mx-auto">
            <p className="text-gray-500 mb-4">No products found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategoryId("all");
              }}
              className="bg-primary text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-primary/90 transition-colors"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredCategories.map((cat, idx) => {
              const IconComp = shopIconMap[cat.iconName] || Leaf;

              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-background rounded-3xl p-6 md:p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-secondary/15 text-primary flex items-center justify-center shrink-0">
                        <IconComp size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold text-primary">
                          {cat.name}
                        </h4>
                        <p className="text-xs text-secondary font-medium italic">
                          {cat.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground/75 font-light mb-6 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Product Groups & Lists */}
                    <div className="space-y-5">
                      {cat.groups.map((group, gIdx) => (
                        <div key={gIdx} className="bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm">
                          {group.subheading && (
                            <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 pb-1.5 border-b border-gray-100 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                              {group.subheading}
                            </h5>
                          )}
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {group.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 font-medium">
                                <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Button for this Category */}
                  <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between gap-3">
                    <span className="text-xs text-foreground/60 font-light">
                      Available at hospital store
                    </span>
                    <a
                      href={`https://wa.me/918148129709?text=${encodeURIComponent(
                        `*Hello Kumar Hospital Store!* 👋\n\nI would like to purchase items from the *${cat.name}* category. Please share price list and courier details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-xl text-xs font-bold transition-all"
                    >
                      <span>Inquire {cat.name.split(" ")[0]}</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
