import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Health & Naturopathy Articles | Kumar Nature Cure Hospital",
  description: "Read expert health guides, naturopathic lifestyle tips, dietary advice, and holistic healing articles by Dr. C. Sukumar and Dr. M. Anitha Sukumar.",
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    title: "Understanding Your Body Type & Natural Self-Healing",
    excerpt: "Discover the core principles of Nature Cure and learn how aligning your body with the five natural elements can transform your chronic wellness.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop",
    date: "March 15, 2024",
    author: "Dr. C. Sukumar, BNYS",
    category: "Naturopathy",
  },
  {
    title: "The Healing Powers of Mud Therapy & Hydrotherapy",
    excerpt: "Explore the profound physical benefits of mud packs and spinal sprays for chronic spine, joint, and digestive health.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop",
    date: "April 2, 2024",
    author: "Dr. C. Sukumar, BNYS",
    category: "Treatments",
  },
  {
    title: "Natural Nutrition: Diet Therapy for a Disease-Free Life",
    excerpt: "All disease begins in poor digestion and toxemia. Learn 5 essential dietary rules for natural detoxification and strong immunity.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2000&auto=format&fit=crop",
    date: "May 10, 2024",
    author: "Dr. M. Anitha Sukumar, BDS, DNYS",
    category: "Diet & Nutrition",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader 
        title="Ayurveda Blog" 
        breadcrumb={[{ name: "Blog", path: "/blog" }]} 
        bgImage="https://images.unsplash.com/photo-1473221326025-9183b46be8cb?q=80&w=2000&auto=format&fit=crop"
      />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col group">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-foreground/60 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-foreground/70 font-light mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link href="#" className="inline-block text-secondary font-medium hover:text-primary transition-colors mt-auto">
                    Read Full Article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
