import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumb: { name: string; path: string }[];
  bgImage?: string;
}

import Image from "next/image";

export default function PageHeader({ title, breadcrumb, bgImage = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center justify-center bg-primary overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Elegant Gradient Overlay - Minimal for Maximum Image Clarity */}
        <div className="absolute inset-0 bg-[#0a1f16]/20 bg-gradient-to-b from-[#1B4332]/30 via-transparent to-[#1B4332]/80 z-0" />
        
        {/* Radial Gradient behind text for guaranteed legibility */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[600px] h-[250px] bg-black/40 blur-[80px] rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-xl">
          {title}
        </h1>
        
        <nav className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
          <Link href="/" className="text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-secondary" />
              {index === breadcrumb.length - 1 ? (
                <span className="text-secondary">{item.name}</span>
              ) : (
                <Link href={item.path} className="text-white/80 hover:text-white transition-colors">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
