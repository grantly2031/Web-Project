"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-4 px-8 fixed w-full top-0 shadow-md z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-extrabold">MyPortfolio</div>
        <div className="flex space-x-8 text-lg">
          {["About", "Portfolio", "Contact"].map((tab) => (
            <Link href={`#${tab.toLowerCase()}`} key={tab}>
              <span
                className={`cursor-pointer ${
                  activeTab === tab.toLowerCase() ? "underline" : ""
                } hover:underline transition`}
                onClick={() => handleTabClick(tab.toLowerCase())}
              >
                {tab}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
