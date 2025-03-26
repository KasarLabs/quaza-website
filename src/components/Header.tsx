"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 z-50 ">
      <nav className="h-20 px-4 bg-black/100 md:bg-black/80 backdrop-blur-sm md:px-6">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/quaza-no-bg.png"
                alt="Logo"
                width={60}
                height={60}
                className="hidden sm:block object-contain mt-3"
              />
              <Image
                src="/images/quaza-no-bg.png"
                alt="Logo"
                width={50}
                height={50}
                className="block sm:hidden object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className=" md:flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/plugins"
                className="text-gray-300 hover:text-white font-calibre-medium text-2xl hover:scale-105 transition-all"
              >
                Plugins
              </Link>
              <Link
                href="https://docs.starkagent.ai"
                target="_blank"
                className="text-gray-300 hover:text-white font-calibre-medium text-2xl hover:scale-105 transition-all"
              >
                Docs
              </Link>
              <a
                href="https://github.com/kasarlabs/starknet-agent-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white font-calibre-medium text-2xl hover:scale-105 transition-all"
              >
                GitHub
              </a>
              <Link
                href="/create-agent"
                className="bg-white text-black px-4 py-2 rounded-lg font-calibre-medium text-xl hover:bg-gray-200 transition-all"
              >
                Create Agent
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/100 backdrop-blur-sm border-b border-neutral-800 py-4 px-6 space-y-4">
            <Link
              href="/plugins"
              className="block text-gray-300 hover:text-white font-calibre-medium text-lg hover:bg-black py-2 px-4 rounded-lg transition-all"
            >
              Plugins
            </Link>
            <Link
              href="https://docs.starkagent.ai"
              className="block text-gray-300 hover:text-white font-calibre-medium text-lg hover:bg-black py-2 px-4 rounded-lg transition-all"
            >
              Docs
            </Link>
            <a
              href="https://github.com/kasarlabs/starknet-agent-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white font-calibre-medium text-lg hover:bg-black py-2 px-4 rounded-lg transition-all"
            >
              GitHub
            </a>
            <Link
              href="/create-agent"
              className="block bg-white text-black px-4 py-2 rounded-lg font-calibre-medium text-lg hover:bg-gray-200 transition-all max-w-[200px]"
            >
              Create Agent
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
