import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/axios";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxios();

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal ochiq/yopiq holati

  // Modalni ochish
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Modalni yopish
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Chiqishni tasdiqlash va logout qilish
  const handleLogout = async () => {
    try {
      const response = await axios({
        url: "/logout/",
        method: "POST",
      });

      console.log("Logout javobi:", response);
      setIsModalOpen(false); // Modalni yopish
      navigate("/login"); // Login sahifasiga yo'naltirish
    } catch (error) {
      console.error("Chiqish jarayonida xatolik:", error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <section className="bg-[#2563eb] py-3 text-white shadow-md navbar2">
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
            <Button onClick={showModal}>Chiqish</Button>
          </div>
        </div>
      </section>

      {/* Chiqish tasdiqlash modali */}
      <Modal
        title="Chiqishni tasdiqlang"
        open={isModalOpen}
        onOk={handleLogout} // Tasdiqlash tugmasi
        onCancel={handleCancel} // Bekor qilish tugmasi
        okText="Ha, chiqish"
        cancelText="Bekor qilish"
      >
        <p>Siz rostdan ham tizimdan chiqmoqchimisiz?</p>
      </Modal>
    </>
  );
}

export default Navbar;
