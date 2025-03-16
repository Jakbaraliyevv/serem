import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeView, setActiveView] = useState("dashboard");
  return (
    <section className="bg-[#2563eb] py-3 text-white shadow-md sticky top-0 z-29">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div>
          <h1 className="font-bold text-[20px]">BenzinServis</h1>
        </div>
        <div className="flex items-center gap-[40px]">
          <Link
            className={`hover:text-blue-200 transition-colors flex items-center ${
              activeView === "dashboard"
                ? "text-white font-bold"
                : "text-blue-100"
            }`}
            to={"/"}
            onClick={() => setActiveView("dashboard")}
          >
            Bosh sahifa
          </Link>
          <Link
            className={`hover:text-blue-200 transition-colors flex items-center ${
              activeView === "profile"
                ? "text-white font-bold"
                : "text-blue-100"
            }`}
            to={"/profile"}
            onClick={() => setActiveView("profile")}
          >
            Profil
          </Link>
          <Link
            className={`hover:text-blue-200 transition-colors flex items-center ${
              activeView === "buyurtmalar"
                ? "text-white font-bold"
                : "text-blue-100"
            }`}
            to={"/buyurtmalar"}
            onClick={() => setActiveView("buyurtmalar")}
          >
            Buyurtmalar
          </Link>
          <h3>Chiqish</h3>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
