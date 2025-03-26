"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-20">
        <div className="w-full min-h-screen flex items-center justify-center px-6">
          <HeroSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
