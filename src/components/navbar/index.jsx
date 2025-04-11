import { Button, Modal, Drawer } from "antd";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/axios";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxios();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 540);

  // Ekran o'lchamini kuzatish
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 540);
      if (window.innerWidth > 540) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Modalni ochish
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Modalni yopish
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Drawer'ni ochish
  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  // Drawer'ni yopish
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Linkni bosganda drawer'ni yopish
  const handleLinkClick = () => {
    if (isMobile) {
      setIsDrawerOpen(false);
    }
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
      setIsDrawerOpen(false); // Drawer'ni yopish
      navigate("/login"); // Login sahifasiga yo'naltirish
    } catch (error) {
      console.error("Chiqish jarayonida xatolik:", error);
    }
  };

  // Linklar komponenti (har ikki joyda ham ishlatiladigan)
  const NavLinks = ({ onClick }) => (
    <div className="links flex gap-[2em] max-[768px]:text-[0.9em] max-[650px]:gap-[1em]">
      <Link
        className={`hover:text-blue-200 text-[1em] py-2 transition-colors ${
          location.pathname === "/" ? "text-white font-bold" : "text-blue-100"
        }`}
        to={"/"}
        onClick={onClick}
      >
        Bosh sahifa
      </Link>
      <Link
        className={`hover:text-blue-200 text-[1em] py-2 transition-colors ${
          location.pathname === "/profile"
            ? "text-white font-bold"
            : "text-blue-100"
        }`}
        to={"/profile"}
        onClick={onClick}
      >
        Profil
      </Link>
      <Link
        className={`hover:text-blue-200 text-[1em] py-2 transition-colors ${
          location.pathname === "/buyurtmalar"
            ? "text-white font-bold"
            : "text-blue-100"
        }`}
        to={"/buyurtmalar"}
        onClick={onClick}
      >
        Buyurtmalar
      </Link>
    </div>
  );

  return (
    <>
      {/* Navbar */}
      <section className="bg-[#2563eb] py-3 text-white shadow-md navbar2">
        <div className="w-[90%] m-auto flex items-center justify-between">
          <div>
            <Link to={"/"} className="font-bold text-xl">
              BenzinServis
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* Desktop uchun linklar */}
            {!isMobile && (
              <div className="flex items-center gap-8">
                <NavLinks />
              </div>
            )}

            <div className="flex items-center gap-4 max-[540px]:gap-[10px]">
              <Button
                className="text-base logoutBtn text-[1em] w-[80px] max-[768px]:w-[70px] max-[768px]:text-[0.8em]"
                onClick={showModal}
              >
                Chiqish
              </Button>

              {/* Mobil ekranlarda bars ikonkasi ko'rinadi */}
              {isMobile && (
                <Button
                  type="text"
                  icon={<MenuOutlined className="text-white barss" />}
                  onClick={showDrawer}
                  className="flex items-center justify-center p-0 border-none bg-transparent"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobil qurilmalar uchun chap tomondan chiquvchi panel */}
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">BenzinServis</span>
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={closeDrawer}
              className="border-none flex items-center justify-center p-0"
            />
          </div>
        }
        placement="left"
        closable={false}
        onClose={closeDrawer}
        open={isDrawerOpen}
        width="50%"
        bodyStyle={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "20px",
        }}
        headerStyle={{
          backgroundColor: "#2563eb",
          color: "white",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <div className="flex flex-col gap-6">
          <NavLinks onClick={handleLinkClick} />
        </div>
      </Drawer>

      {/* Chiqish tasdiqlash modali */}
      <Modal
        className="modal"
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
