import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // Hozirgi sahifa URL'ni olish

  return (
    <section className="bg-[#2563eb] py-3 text-white shadow-md sticky top-0 z-29">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div>
          <Link to={"/"} className="font-bold text-[20px]">
            BenzinServis
          </Link>
        </div>
        <div className="flex items-center gap-[40px]">
          <Link
            className={`hover:text-blue-200 transition-colors flex items-center ${
              location.pathname === "/"
                ? "text-white font-bold"
                : "text-blue-100"
            }`}
            to={"/"}
          >
            Bosh sahifa
          </Link>
          <Link
            className={`hover:text-blue-200 transition-colors flex items-center ${
              location.pathname === "/profile"
                ? "text-white font-bold"
                : "text-blue-100"
            }`}
            to={"/profile"}
          >
            Profil
          </Link>
          <Link
            className={`hover:text-blue-200 transition-colors flex items-center ${
              location.pathname === "/buyurtmalar"
                ? "text-white font-bold"
                : "text-blue-100"
            }`}
            to={"/buyurtmalar"}
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
