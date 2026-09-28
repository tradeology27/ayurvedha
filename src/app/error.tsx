"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle size={32} />
        </div>
        
        <h2 className="text-2xl font-heading font-bold text-primary mb-3">
          Oops! Something went wrong
        </h2>
        
        <p className="text-foreground/70 text-sm mb-8">
          We encountered an unexpected error while loading this page. 
          {error.message ? ` (${error.message})` : ""}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors"
          >
            <RefreshCcw size={16} /> Try Again
          </button>
          
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-secondary/10 text-primary px-6 py-3 rounded-full text-sm font-bold hover:bg-secondary/20 transition-colors"
          >
            <Home size={16} /> Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
